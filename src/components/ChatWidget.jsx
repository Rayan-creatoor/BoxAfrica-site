import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL || "http://localhost:8787/api/chat";

// Le serveur (plan gratuit) peut se mettre en veille et mettre jusqu'à ~50s à se
// réveiller, et le serveur lui-même retente déjà plusieurs fois auprès de Gemini en
// cas de surcharge (jusqu'à ~10s) — on laisse une marge confortable avant d'abandonner
// côté client, et on retente aussi en cas de coupure réseau pure.
const REQUEST_TIMEOUT_MS = 30000;
const RETRY_DELAYS_MS = [3000, 6000, 10000, 15000];
const SLOW_HINT_DELAY_MS = 5000;

const GREETING = {
  role: "assistant",
  content:
    "Bonjour 👋 Je suis l'assistant de Box.Africa. Posez-moi vos questions sur nos services IT, la cybersécurité, Microsoft, ou les formations BoxAcademy.",
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// L'assistant répond en Markdown léger (liens, **gras**, listes à puces) — on le
// convertit en JSX plutôt que de l'afficher tel quel, et les liens internes (/...)
// utilisent le routeur pour naviguer sans recharger la page.
function renderInline(text, keyPrefix, onNavigate) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      // Le libellé peut lui-même contenir du **gras** — on l'enlève, le lien est déjà
      // mis en évidence visuellement (couleur + soulignement) sans avoir besoin du gras.
      const label = linkMatch[1].replace(/\*\*/g, "");
      const url = linkMatch[2];
      if (url.startsWith("/")) {
        return (
          <Link key={key} to={url} className="ba-chat-link" onClick={onNavigate}>
            {label}
          </Link>
        );
      }
      return (
        <a key={key} className="ba-chat-link" href={url} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) return <strong key={key}>{boldMatch[1]}</strong>;
    return part;
  });
}

function renderMessageContent(content, onNavigate) {
  const lines = content.split("\n");
  const blocks = [];
  let currentList = null;

  for (const line of lines) {
    const bulletMatch = line.match(/^\s*[*-]\s+(.*)/);
    if (bulletMatch) {
      if (!currentList) {
        currentList = [];
        blocks.push({ type: "list", items: currentList });
      }
      currentList.push(bulletMatch[1]);
    } else {
      currentList = null;
      if (line.trim() !== "") blocks.push({ type: "text", text: line });
    }
  }

  return blocks.map((block, i) =>
    block.type === "list" ? (
      <ul className="ba-chat-list-inner" key={i}>
        {block.items.map((item, j) => (
          <li key={j}>{renderInline(item, `${i}-${j}`, onNavigate)}</li>
        ))}
      </ul>
    ) : (
      <p className="ba-chat-line" key={i}>
        {renderInline(block.text, `${i}`, onNavigate)}
      </p>
    )
  );
}

async function fetchChat(body) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(CHAT_API_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [slowHint, setSlowHint] = useState(false);
  const [error, setError] = useState(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    const payload = { messages: nextMessages.filter((m) => m !== GREETING) };
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    const slowTimer = setTimeout(() => setSlowHint(true), SLOW_HINT_DELAY_MS);

    let res;
    try {
      // Coupures réseau (souvent le serveur qui se réveille) : on retente plusieurs
      // fois avec un délai croissant avant d'afficher une erreur au visiteur.
      for (let attempt = 0; ; attempt++) {
        try {
          res = await fetchChat(payload);
          break;
        } catch (networkErr) {
          if (networkErr.name === "AbortError" || attempt >= RETRY_DELAYS_MS.length) throw networkErr;
          await sleep(RETRY_DELAYS_MS[attempt]);
        }
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Une erreur est survenue.");
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || "…" }]);
    } catch (err) {
      const message =
        err.name === "AbortError"
          ? "L'assistant met trop de temps à répondre. Réessayez dans un instant."
          : err.message || "Impossible de contacter l'assistant pour le moment.";
      setError(message);
    } finally {
      clearTimeout(slowTimer);
      setSlowHint(false);
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      <style>{`
        .ba-chat-root {
          --ba-chat-font: 'Century Gothic', 'Jost', 'Questrial', system-ui, sans-serif;
          --ba-chat-bg: #ffffff;
          --ba-chat-bg-dim: #f5f6f8;
          --ba-chat-border: rgba(10,14,23,0.12);
          --ba-chat-text: #12141a;
          --ba-chat-text-dim: #5b6270;
          --ba-chat-accent-1: #3f6fe0;
          --ba-chat-accent-2: #7fa8ff;
          position: fixed; right: 22px; bottom: 22px; z-index: 9998;
          font-family: var(--ba-chat-font);
        }
        .ba-chat-toggle {
          width: 58px; height: 58px; border-radius: 50%; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--ba-chat-accent-1), var(--ba-chat-accent-2));
          color: #ffffff; box-shadow: 0 10px 26px rgba(47,95,214,.38);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .ba-chat-toggle:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(47,95,214,.46); }

        .ba-chat-panel {
          position: absolute; right: 0; bottom: 74px; width: min(360px, calc(100vw - 40px));
          height: min(520px, calc(100vh - 120px));
          background: var(--ba-chat-bg); border: 1px solid var(--ba-chat-border); border-radius: 20px;
          box-shadow: 0 24px 60px rgba(10,14,23,.22);
          display: flex; flex-direction: column; overflow: hidden;
          opacity: 0; transform: translateY(12px) scale(.98); pointer-events: none;
          transition: opacity .22s ease, transform .22s ease;
        }
        .ba-chat-panel.open { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }

        .ba-chat-header {
          display: flex; align-items: center; justify-content: space-between; gap: 10px;
          padding: 16px 18px;
          background: linear-gradient(135deg, var(--ba-chat-accent-1), var(--ba-chat-accent-2));
          color: #ffffff;
        }
        .ba-chat-header strong { font-size: 15px; font-weight: 700; display: block; }
        .ba-chat-header span { font-size: 12px; opacity: .88; }
        .ba-chat-close {
          background: rgba(255,255,255,.16); border: none; color: #ffffff; cursor: pointer;
          width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
          transition: background .2s ease;
        }
        .ba-chat-close:hover { background: rgba(255,255,255,.28); }

        .ba-chat-list {
          flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 10px;
        }
        .ba-chat-msg {
          max-width: 84%; padding: 10px 13px; border-radius: 14px; font-size: 13.5px; line-height: 1.5;
          white-space: pre-wrap; word-break: break-word;
        }
        .ba-chat-msg.assistant {
          align-self: flex-start; background: var(--ba-chat-bg-dim); color: var(--ba-chat-text);
          border-bottom-left-radius: 4px;
        }
        .ba-chat-msg.user {
          align-self: flex-end;
          background: linear-gradient(135deg, var(--ba-chat-accent-1), var(--ba-chat-accent-2));
          color: #ffffff; border-bottom-right-radius: 4px;
        }
        .ba-chat-line { margin: 0 0 8px; }
        .ba-chat-line:last-child { margin-bottom: 0; }
        .ba-chat-list-inner { margin: 4px 0 8px; padding-left: 18px; }
        .ba-chat-list-inner:last-child { margin-bottom: 0; }
        .ba-chat-list-inner li { margin-bottom: 4px; }
        .ba-chat-link {
          color: var(--ba-chat-accent-1); font-weight: 700; text-decoration: underline;
          text-underline-offset: 2px; word-break: break-word;
        }
        .ba-chat-typing {
          align-self: flex-start; display: inline-flex; gap: 4px; padding: 12px 14px;
          background: var(--ba-chat-bg-dim); border-radius: 14px; border-bottom-left-radius: 4px;
        }
        .ba-chat-typing span {
          width: 6px; height: 6px; border-radius: 50%; background: var(--ba-chat-text-dim);
          animation: ba-chat-bounce 1.1s ease-in-out infinite;
        }
        .ba-chat-typing span:nth-child(2) { animation-delay: .15s; }
        .ba-chat-typing span:nth-child(3) { animation-delay: .3s; }
        @keyframes ba-chat-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: .5; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        .ba-chat-slow-hint {
          align-self: flex-start; font-size: 11.5px; color: var(--ba-chat-text-dim);
          padding: 0 4px; font-style: italic;
        }

        .ba-chat-error {
          margin: 0 16px 8px; padding: 8px 12px; border-radius: 10px; font-size: 12.5px;
          background: rgba(224,63,63,.1); color: #b83232; border: 1px solid rgba(224,63,63,.25);
        }

        .ba-chat-form {
          display: flex; align-items: center; gap: 8px; padding: 12px; border-top: 1px solid var(--ba-chat-border);
        }
        .ba-chat-input {
          flex: 1; border: 1px solid var(--ba-chat-border); border-radius: 12px; padding: 10px 12px;
          font-size: 13.5px; font-family: inherit; color: var(--ba-chat-text); background: var(--ba-chat-bg-dim);
          resize: none; outline: none; transition: border-color .2s ease;
        }
        .ba-chat-input:focus { border-color: var(--ba-chat-accent-1); }
        .ba-chat-send {
          width: 38px; height: 38px; border-radius: 10px; border: none; cursor: pointer; flex: none;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--ba-chat-accent-1), var(--ba-chat-accent-2)); color: #ffffff;
          transition: opacity .2s ease;
        }
        .ba-chat-send:disabled { opacity: .5; cursor: not-allowed; }
        .ba-chat-spin { animation: ba-chat-spin 1s linear infinite; }
        @keyframes ba-chat-spin { to { transform: rotate(360deg); } }

        @media (max-width: 480px) {
          .ba-chat-root { right: 14px; bottom: 14px; }
          .ba-chat-panel { right: -6px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ba-chat-panel, .ba-chat-toggle, .ba-chat-typing span, .ba-chat-spin { animation: none !important; transition: none !important; }
        }
      `}</style>
      <div className="ba-chat-root">
        <div className={`ba-chat-panel ${open ? "open" : ""}`} role="dialog" aria-label="Assistant Box.Africa" aria-hidden={!open}>
          <div className="ba-chat-header">
            <div>
              <strong>Assistant Box.Africa</strong>
              <span>Services IT · Cybersécurité · BoxAcademy</span>
            </div>
            <button className="ba-chat-close" onClick={() => setOpen(false)} aria-label="Fermer le chat" type="button">
              <X size={16} />
            </button>
          </div>

          <div className="ba-chat-list" ref={listRef}>
            {messages.map((m, i) => (
              <div key={i} className={`ba-chat-msg ${m.role}`}>
                {m.role === "assistant" ? renderMessageContent(m.content, () => setOpen(false)) : m.content}
              </div>
            ))}
            {loading && (
              <>
                <div className="ba-chat-typing" aria-label="L'assistant écrit…">
                  <span /><span /><span />
                </div>
                {slowHint && (
                  <span className="ba-chat-slow-hint">
                    Le serveur se réveille, ça peut prendre quelques secondes…
                  </span>
                )}
              </>
            )}
          </div>

          {error && <div className="ba-chat-error">{error}</div>}

          <form
            className="ba-chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <textarea
              ref={inputRef}
              className="ba-chat-input"
              rows={1}
              placeholder="Écrivez votre question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              maxLength={2000}
            />
            <button className="ba-chat-send" type="submit" disabled={loading || !input.trim()} aria-label="Envoyer">
              {loading ? <Loader2 size={16} className="ba-chat-spin" /> : <Send size={16} />}
            </button>
          </form>
        </div>

        <button
          className="ba-chat-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
          type="button"
        >
          {open ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </>
  );
}
