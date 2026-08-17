import { TECH_PHOTOS, SERVICE_ICONS, SERVICE_PHOTOS } from "./content.js";

export const PROXY_PHOTOS = {
  hero: TECH_PHOTOS.proxyBg,
  mosaicA: "https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=900",
  mosaicB: "https://images.pexels.com/photos/37605911/pexels-photo-37605911.jpeg?auto=compress&cs=tinysrgb&w=900",
  mosaicC: "https://images.pexels.com/photos/12912013/pexels-photo-12912013.jpeg?auto=compress&cs=tinysrgb&w=900",
  mosaicD: "https://images.pexels.com/photos/12911261/pexels-photo-12911261.jpeg?auto=compress&cs=tinysrgb&w=900",
  contact: TECH_PHOTOS.team,
  step1: "https://images.pexels.com/photos/5685956/pexels-photo-5685956.jpeg?auto=compress&cs=tinysrgb&w=900",
  step2: "https://images.pexels.com/photos/8872698/pexels-photo-8872698.jpeg?auto=compress&cs=tinysrgb&w=900",
  step3: "https://images.pexels.com/photos/6584747/pexels-photo-6584747.jpeg?auto=compress&cs=tinysrgb&w=900",
  step4: "https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&w=900",
  levelN1: "https://images.pexels.com/photos/5668845/pexels-photo-5668845.jpeg?auto=compress&cs=tinysrgb&w=900",
  levelN2: "https://images.pexels.com/photos/6585029/pexels-photo-6585029.jpeg?auto=compress&cs=tinysrgb&w=900",
  levelN3: "https://images.pexels.com/photos/30677714/pexels-photo-30677714.jpeg?auto=compress&cs=tinysrgb&w=900",
};

export const PROXY_STATS = [
  { value: "< 24h", label: "intervention sur site" },
  { value: "N1/N2/N3", label: "niveaux de support" },
  { value: "24/7", label: "astreinte disponible" },
  { value: "100%", label: "reporting transparent" },
];

export const PROXY_PILLARS = [
  {
    slug: "reactivite",
    icon: "/icons/reactivite.svg",
    color: "#8a4b2a",
    title: "Réactivité",
    items: [
      "Points focaux résidents",
      "Prise en main immédiate de l'incident",
      "Sur site en moins de 24h",
    ],
  },
  {
    slug: "savoir-faire",
    icon: "/icons/savoir-faire.svg",
    color: "#a56a3f",
    title: "Savoir-faire",
    items: [
      "Expérience IT des équipes",
      "Base de connaissance",
      "Disponibilité d'experts par domaine",
    ],
  },
  {
    slug: "reporting",
    icon: "/icons/reporting.svg",
    color: "#6b3a1f",
    title: "Reporting",
    items: [
      "Suivi de l'évolution de l'incident",
      "Rapports réguliers avec statistiques",
      "Tableau de bord de l'activité",
    ],
  },
];

export const PROXY_STEPS = [
  {
    title: "Signalement de l'incident",
    text: "Un canal unique et simple pour déclarer l'incident, quel que soit le site concerné.",
    image: PROXY_PHOTOS.step1,
  },
  {
    title: "Prise en main immédiate",
    text: "Le point focal résident qualifie l'incident et engage la résolution sans délai.",
    image: PROXY_PHOTOS.step2,
  },
  {
    title: "Intervention sur site",
    text: "Un expert intervient physiquement en moins de 24h lorsque la situation l'exige.",
    image: PROXY_PHOTOS.step3,
  },
  {
    title: "Reporting & suivi",
    text: "Rapports réguliers et tableau de bord de l'activité pour garder une visibilité totale.",
    image: PROXY_PHOTOS.step4,
  },
];

export const PROXY_SUPPORT_LEVELS = [
  {
    level: "N1",
    title: "Support de premier niveau",
    description:
      "Le point focal résident réceptionne et qualifie chaque incident, et résout immédiatement les demandes courantes.",
    items: [
      "Prise en charge de l'appel ou du ticket",
      "Diagnostic initial de l'incident",
      "Résolution des demandes courantes",
      "Escalade structurée si nécessaire",
    ],
    image: PROXY_PHOTOS.levelN1,
  },
  {
    level: "N2",
    title: "Support technique spécialisé",
    description:
      "Une équipe d'experts prend le relais pour les incidents nécessitant une expertise technique approfondie.",
    items: [
      "Analyse technique approfondie",
      "Intervention sur systèmes, réseau ou applicatif",
      "Résolution des incidents complexes",
      "Escalade vers le N3 si besoin",
    ],
    image: PROXY_PHOTOS.levelN2,
  },
  {
    level: "N3",
    title: "Expertise avancée & éditeurs",
    description:
      "Le niveau le plus élevé mobilise nos experts les plus pointus, jusqu'à l'interface avec les éditeurs et constructeurs.",
    items: [
      "Expertise avancée sur l'infrastructure critique",
      "Interface avec éditeurs et constructeurs",
      "Résolution des incidents majeurs",
      "Analyse des causes racines",
    ],
    image: PROXY_PHOTOS.levelN3,
  },
];

export const PROXY_AUDIENCE = [
  "Entreprises avec SI critique",
  "Directions IT sans astreinte interne",
  "Sites distants / multi-agences",
  "Administrations publiques",
];

// Zones d'intervention Proxy — couverture du territoire national par nos équipes
// de points focaux résidents.
export const PROXY_ZONES = [
  { zone: 1, localities: ["Ouagadougou", "Ziniaré", "Manga", "Pô", "Léo", "Kombissiri"] },
  { zone: 2, localities: ["Bobo-Dioulasso", "Houndé", "Diébougou", "Gaoua", "Banfora", "Orodara", "Niangoloko"] },
  { zone: 3, localities: ["Zorgho", "Koupéla", "Tenkodogo", "Pouytenga", "Fada N'Gourma", "Bogandé"] },
  { zone: 4, localities: ["Koudougou", "Boromo", "Solenzo", "Dédougou", "Tougan", "Nouna"] },
  { zone: 5, localities: ["Ouahigouya", "Yako", "Gourcy"] },
  { zone: 6, localities: ["Kaya", "Kongoussi"] },
];

// Support & Assistance — deux offres complémentaires de Proxy, au-delà de la
// gestion d'incident : renfort d'équipe et exploitation déléguée du SI.
export const PROXY_SUPPORT_SERVICES = [
  {
    slug: "delegation",
    title: "Délégation",
    icon: SERVICE_ICONS.delegation,
    image: SERVICE_PHOTOS.delegation,
    items: [
      "Intérim projets",
      "Régie d'experts",
      "Offshore à la demande",
      "Appoint de ressources I.T",
      "NearShore à la demande",
    ],
  },
  {
    slug: "services-manages",
    title: "Services managés",
    icon: SERVICE_ICONS.managed,
    image: SERVICE_PHOTOS.managed,
    items: [
      "T.M. Applicative",
      "Support ponctuel",
      "Cyber Supervision",
      "Infogérance des S.I.",
      "Maintenance hard/soft",
    ],
  },
];
