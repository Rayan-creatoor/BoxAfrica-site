import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 8787;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

if (!ANTHROPIC_API_KEY) {
  console.error(
    "ANTHROPIC_API_KEY manquante. Copiez server/.env.example vers server/.env et renseignez votre clé."
  );
  process.exit(1);
}

const MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS = 1000;
const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 4000;

const SYSTEM_PROMPT = `Tu es l'assistant virtuel du site de Box.Africa, une entreprise de services numériques (ESN) basée à Ouagadougou (Burkina Faso), active en Afrique de l'Ouest.

Box.Africa est spécialisée dans :
- les services et solutions Microsoft (Azure, Microsoft 365, administration des identités) ;
- le développement logiciel et le conseil IT (applications web/mobile, data & IA, middleware, tests) ;
- l'infrastructure et le cloud (architecture cloud, virtualisation, Kubernetes, réseau & stockage) ;
- la cybersécurité (pentest, SecOps, analyse forensique, conformité) ;
- l'accompagnement à la digitalisation des entreprises et administrations d'Afrique de l'Ouest.

Box.Africa propose aussi deux offres dédiées :
- BoxAcademy : le centre de formation IT de Box.Africa (Microsoft & Cloud, Oracle, Cybersécurité & Réseaux, Gouvernance & Gestion de projet, Intelligence Artificielle & Data, Odoo), en intra ou inter-entreprise, avec formateurs certifiés.
- Proxy : un service de support et d'infogérance de proximité, avec point focal résident et intervention sur site en moins de 24h, organisé en niveaux de support N1/N2/N3.

Réponds aux visiteurs du site de façon professionnelle, chaleureuse et concise, en français par défaut (bascule en anglais si le visiteur écrit en anglais). Tu peux présenter les services, orienter vers la bonne offre (Services, BoxAcademy, Proxy) et donner une vue d'ensemble générale.

Tu ne connais pas les tarifs exacts, les disponibilités de sessions de formation ni les plannings internes : si on te le demande, invite poliment la personne à contacter l'équipe Box.Africa via le formulaire de contact du site plutôt que d'inventer un chiffre ou une date. Ne prétends jamais être un humain.`;

const app = express();
app.use(express.json({ limit: "100kb" }));
app.use(
  cors({
    origin(origin, callback) {
      // Autorise les requêtes sans origine (ex: curl, health checks) et les origines listées.
      if (!origin || ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
      callback(new Error("Origine non autorisée"));
    },
  })
);

// Rate limiting basique en mémoire (par IP) pour éviter l'abus de la clé API.
// Suffisant pour un widget vitrine à faible trafic ; passer par un store partagé
// (Redis, etc.) si le serveur tourne un jour sur plusieurs instances.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 20;
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/chat", async (req, res) => {
  const ip = req.ip;
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Trop de requêtes, réessayez dans quelques minutes." });
  }

  const { messages } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Le champ 'messages' est requis et doit être un tableau non vide." });
  }
  if (messages.length > MAX_MESSAGES) {
    return res.status(400).json({ error: "Conversation trop longue." });
  }
  for (const m of messages) {
    if (
      !m ||
      (m.role !== "user" && m.role !== "assistant") ||
      typeof m.content !== "string" ||
      m.content.length === 0 ||
      m.content.length > MAX_MESSAGE_LENGTH
    ) {
      return res.status(400).json({ error: "Format de message invalide." });
    }
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: SYSTEM_PROMPT,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Erreur API Anthropic:", response.status, detail);
      return res.status(502).json({ error: "Le service de chat est momentanément indisponible." });
    }

    const data = await response.json();
    const reply = data.content?.find((block) => block.type === "text")?.text || "";
    res.json({ reply });
  } catch (err) {
    console.error("Erreur serveur /api/chat:", err);
    res.status(500).json({ error: "Une erreur est survenue, réessayez plus tard." });
  }
});

// Gestionnaire d'erreurs générique : évite de renvoyer la page d'erreur HTML par défaut
// d'Express (qui inclut la stack trace et les chemins de fichiers du serveur).
app.use((err, req, res, next) => {
  console.error("Erreur non gérée:", err);
  res.status(err.status || 500).json({ error: "Requête refusée." });
});

app.listen(PORT, () => {
  console.log(`Serveur de chat Box.Africa lancé sur http://localhost:${PORT}`);
});
