import { TECH_PHOTOS, SERVICE_PHOTOS } from "./content.js";

// Articles d'exemple, en attendant les premières vraies publications du blog.
// Chaque entrée : slug, catégorie, titre, extrait, date, temps de lecture, image.
export const BLOG_POSTS = [
  {
    slug: "box-africa-forum-dsi-international-tunis-2025",
    category: "Vie de l'entreprise",
    title: "Box.Africa au 11ᵉ Forum DSI International à Tunis",
    excerpt:
      "Notre équipe a pris part au 11ᵉ Forum DSI International, les 29 et 30 octobre 2025 au Regency Gammarth de Tunis, sur le thème « Reinventing the CIO in the Age of AI » — deux jours d'échanges avec plus de 700 participants et 35 experts internationaux sur le leadership numérique, l'intelligence artificielle et la transformation digitale.",
    date: "30 octobre 2025",
    readTime: "2 min",
    image: "/box-africa-forum-dsi-tunis.jpg",
    sourceUrl: "https://forum-dsi.com/",
    sourceLabel: "Forum DSI International",
  },
  {
    slug: "box-africa-mtdpce-dematerialisation-administration",
    category: "Vie de l'entreprise",
    title:
      "Dématérialisation des services de l'Administration : Box.Africa Burkina reçue par la Ministre de la Transition Digitale",
    excerpt:
      "Le 5 mai 2023, notre Directeur Général Hermann Bado a été reçu par Dr Aminata Zerbo/Sabané, Ministre de la Transition Digitale, des Postes et des Communications Électroniques, pour échanger sur sa vision de la digitalisation des services de l'État — en particulier la dématérialisation des documents administratifs.",
    date: "5 mai 2023",
    readTime: "3 min",
    image: "/box-africa-mtdpce-audience.jpg",
    sourceUrl:
      "https://mdenp.gov.bf/details?cHash=79d02743ee11fcd0fbcbd314fe16b216&tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Bnews%5D=492",
    sourceLabel: "Ministère de la Transition Digitale, des Postes et des Communications Électroniques",
  },
  {
    slug: "digitalisation-par-ou-commencer",
    category: "Digitalisation",
    title: "Digitalisation : par où commencer quand on est une PME ouest-africaine ?",
    excerpt:
      "Avant de choisir un outil ou un prestataire, il y a un diagnostic à poser. Voici la méthode que nous suivons avec nos clients pour prioriser les premiers chantiers.",
    date: "12 août 2026",
    readTime: "5 min",
    image: TECH_PHOTOS.think,
  },
  {
    slug: "cybersecurite-reflexes-pme",
    category: "Cybersécurité",
    title: "Cybersécurité : les bons réflexes pour les PME et administrations",
    excerpt:
      "La majorité des incidents que nous traitons viennent d'un manque de base plutôt que d'attaques sophistiquées. Un tour d'horizon des priorités à traiter en premier.",
    date: "29 juillet 2026",
    readTime: "6 min",
    image: SERVICE_PHOTOS.managed,
  },
  {
    slug: "former-ses-equipes-it",
    category: "Formation",
    title: "Pourquoi former ses équipes IT change la trajectoire d'un projet",
    excerpt:
      "Retour d'expérience BoxAcademy : ce que l'on observe chez les entreprises qui investissent dans la montée en compétence de leurs équipes techniques.",
    date: "14 juillet 2026",
    readTime: "4 min",
    image: SERVICE_PHOTOS.formation,
  },
];
