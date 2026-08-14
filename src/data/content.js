import { Lightbulb, FlaskConical, Hammer, Rocket } from "lucide-react";

// Pictogrammes ligne dessinés sur mesure pour chaque domaine de service.
export const SERVICE_ICONS = {
  devTest: "/icons/dev-test-logiciel.svg",
  infra: "/icons/infra-plateforme.svg",
  cyber: "/icons/cybersecurite.svg",
  delegation: "/icons/delegation.svg",
  managed: "/icons/services-manages.svg",
  formation: "/icons/formation.svg",
};

export const BOXAFRICA_LOGO = "/boxafrica-logo.png";
export const BOXAFRICA_BOX = "/boxafrica-box.png";

export const CONTACT_EMAIL = "info@box.africa";
export const COMPANY_PHONE = "06 48 11 11";
export const COMPANY_PHONE_HREF = `tel:${COMPANY_PHONE.replace(/\s+/g, "")}`;
export const COMPANY_ADDRESS = ["09 BP 157", "Ouagadougou 09", "Burkina Faso"];
export const LINKEDIN_URL = "https://ci.linkedin.com/company/boxafrica";
export const WHATSAPP_ICON = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

export function mailtoHref(subject = "Demande d'informations - Box Africa") {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export function whatsappHref(message = "Bonjour Box.Africa, je souhaite avoir plus d'informations.") {
  return `https://wa.me/226${COMPANY_PHONE.replace(/\s+/g, "")}?text=${encodeURIComponent(message)}`;
}

export const BUSINESS_HOURS = [
  { day: "Lundi", open: "08:00", close: "17:30" },
  { day: "Mardi", open: "08:00", close: "17:30" },
  { day: "Mercredi", open: "08:00", close: "17:30" },
  { day: "Jeudi", open: "08:00", close: "17:30" },
  { day: "Vendredi", open: "08:00", close: "17:30" },
  { day: "Samedi", open: null, close: null },
  { day: "Dimanche", open: null, close: null },
];

export function getBusinessStatus(now = new Date()) {
  const jsDay = now.getDay();
  const todayIndex = jsDay === 0 ? 6 : jsDay - 1;
  const today = BUSINESS_HOURS[todayIndex];
  if (!today.open) return { open: false, today };
  const [oh, om] = today.open.split(":").map(Number);
  const [ch, cm] = today.close.split(":").map(Number);
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const isOpen = nowMinutes >= oh * 60 + om && nowMinutes < ch * 60 + cm;
  return { open: isOpen, today };
}

// Logos officiels de partenaires (Wikimedia Commons, vérifiés) — réutilisés sur l'accueil,
// la page Services et BoxAcademy pour identifier chaque marque partenaire.
export const PARTNER_LOGOS = {
  odoo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Odoo_logo_rgb.svg",
  microsoft: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  oracle: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  cisco: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  fortinet: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg",
  iso: "https://upload.wikimedia.org/wikipedia/commons/e/e3/ISO_Logo_%28Red_square%29.svg",
};

// Pictogrammes thématiques dessinés sur mesure, un par section — affichés devant le titre
// de chaque bloc de contenu, à la place d'une icône vectorielle générique.
export const THEME_ICONS = {
  method: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Icons8_flat_services.svg",
  people: "/icons/humain-au-coeur-it.svg",
  services: "https://upload.wikimedia.org/wikipedia/commons/7/78/Programming_icon_flat_circle.svg",
  catalogue: "/icons/catalogue.svg",
  audience: "/icons/pour-qui.svg",
  format: "/icons/format.svg",
  promise: "/icons/partenaires-cle.svg",
  location: "/icons/nous-trouver.svg",
  fonctionnement: "/icons/fonctionnement.svg",
  notrePromesse: "/icons/notre-promesse.svg",
  niveauxSupport: "/icons/niveaux-de-support.svg",
};

export const TECH_PHOTOS = {
  hero: "/hero-globe-africa.png",
  innovation: "/cta-lightbulb-innovation.png",
  think: "https://images.pexels.com/photos/7446590/pexels-photo-7446590.jpeg?auto=compress&cs=tinysrgb&w=800",
  poc: "https://images.pexels.com/photos/7979415/pexels-photo-7979415.jpeg?auto=compress&cs=tinysrgb&w=800",
  build: "https://images.pexels.com/photos/1181401/pexels-photo-1181401.jpeg?auto=compress&cs=tinysrgb&w=800",
  run: "https://images.pexels.com/photos/7709135/pexels-photo-7709135.jpeg?auto=compress&cs=tinysrgb&w=800",
  team: "https://images.pexels.com/photos/1181401/pexels-photo-1181401.jpeg?auto=compress&cs=tinysrgb&w=1200",
  woman: "https://images.pexels.com/photos/7191959/pexels-photo-7191959.jpeg?auto=compress&cs=tinysrgb&w=1200",
  academyBg: "https://images.pexels.com/photos/7709135/pexels-photo-7709135.jpeg?auto=compress&cs=tinysrgb&w=1200",
  proxyBg: "https://images.pexels.com/photos/7446590/pexels-photo-7446590.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const SERVICE_PHOTOS = {
  heroA: "/services-on-demand.png",
  heroB: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=900",
  heroC: "https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=900",
  heroD: "https://images.pexels.com/photos/5905483/pexels-photo-5905483.jpeg?auto=compress&cs=tinysrgb&w=900",
  dev: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1400",
  infra: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1400",
  cyber: "https://images.pexels.com/photos/5483240/pexels-photo-5483240.jpeg?auto=compress&cs=tinysrgb&w=1400",
  delegation: "https://images.pexels.com/photos/9489091/pexels-photo-9489091.jpeg?auto=compress&cs=tinysrgb&w=1400",
  managed: "https://images.pexels.com/photos/5083210/pexels-photo-5083210.jpeg?auto=compress&cs=tinysrgb&w=1400",
  formation: "https://images.pexels.com/photos/3869649/pexels-photo-3869649.jpeg?auto=compress&cs=tinysrgb&w=1400",
  contact: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const PIPELINE = [
  {
    key: "THINK",
    icon: Lightbulb,
    color: "var(--gold)",
    image: TECH_PHOTOS.think,
    desc: "On cadre le besoin réel avant de coder la moindre ligne.",
    items: ["Conseil stratégique IT", "Audit technique & organisationnel"],
  },
  {
    key: "POC",
    icon: FlaskConical,
    color: "var(--teal)",
    image: TECH_PHOTOS.poc,
    desc: "On valide la faisabilité, technique et business, avant d'investir.",
    items: ["Prototype technique (Technical POC)", "Validation terrain (Business POC)"],
  },
  {
    key: "BUILD",
    icon: Hammer,
    color: "var(--indigo)",
    image: TECH_PHOTOS.build,
    desc: "On construit la solution et on la sécurise de bout en bout.",
    items: ["Intégration système", "Développement logiciel", "Cybersécurité intégrée"],
  },
  {
    key: "RUN",
    icon: Rocket,
    color: "var(--coral)",
    image: TECH_PHOTOS.run,
    desc: "On maintient, on forme et on reste disponible sur la durée.",
    items: ["Infogérance quotidienne", "Formations continues", "Support réactif"],
  },
];

export const SERVICES = [
  {
    slug: "dev-test-logiciel",
    iconImage: SERVICE_ICONS.devTest,
    color: "var(--indigo)",
    image: SERVICE_PHOTOS.dev,
    title: "Dev & Test Logiciel",
    summary: "Conception, développement et qualification de vos applications, de la donnée à l'interface utilisateur.",
    description:
      "Nos équipes d'ingénieurs couvrent l'ensemble du cycle de vie logiciel : architecture, développement sur mesure, intégration de middleware et campagnes de tests rigoureuses. Nous livrons des solutions fiables, maintenables et prêtes pour la production.",
    items: [
      {
        name: "Data & IA",
        detail: "Pipelines de données, entrepôts, modèles ML et tableaux de bord décisionnels adaptés à vos enjeux métier.",
      },
      {
        name: "App web et mobile",
        detail: "Applications React, React Native et backends scalables — UX soignée, performance et accessibilité.",
      },
      {
        name: "Middleware (API, etc.)",
        detail: "Bus de messages, API REST/GraphQL, microservices et intégration entre systèmes hétérogènes.",
      },
      {
        name: "Tests & Qualité",
        detail: "Stratégie QA, tests automatisés, TNR, tests de charge et recettes utilisateurs avant mise en production.",
      },
    ],
    highlights: ["Agile / DevOps", "CI/CD", "Couverture de tests", "Revues de code"],
    partnerSpotlights: [
      {
        id: "odoo-dev",
        partner: "Odoo",
        logo: PARTNER_LOGOS.odoo,
        title: "Développement & intégration Odoo",
        description:
          "Box.Africa accompagne les entreprises ouest-africaines dans l'implémentation et la personnalisation de l'ERP open source Odoo, du paramétrage initial aux développements sur mesure.",
        items: [
          "Implémentation ERP Odoo (Ventes, Achats, Comptabilité, RH…)",
          "Développement de modules et applications sur mesure",
          "Migration et intégration de données",
          "Support et maintenance applicative Odoo",
        ],
        highlights: ["Partenaire Odoo", "ERP open source", "Modules sur mesure"],
      },
    ],
  },
  {
    slug: "infra-plateforme",
    iconImage: SERVICE_ICONS.infra,
    color: "var(--teal)",
    image: SERVICE_PHOTOS.infra,
    title: "Infra & Plateforme",
    summary: "Architectures cloud, virtualisation et conteneurisation pour des systèmes résilients et évolutifs.",
    description:
      "Nous concevons et déployons les fondations techniques de vos projets numériques : cloud public ou privé, virtualisation HCI, orchestration Kubernetes. L'objectif : disponibilité, sécurité et coûts maîtrisés.",
    items: [
      {
        name: "Architecture Cloud",
        detail: "Conception multi-cloud, migration lift-and-shift ou cloud-native, FinOps et gouvernance.",
      },
      {
        name: "Cloud Privé (HCI/SDx)",
        detail: "Hyperconvergence, software-defined storage et réseau pour un datacenter moderne et agile.",
      },
      {
        name: "Kubernetes & Docker",
        detail: "Conteneurisation, clusters K8s managés, Helm, monitoring et autoscaling.",
      },
      {
        name: "Réseau & Stockage",
        detail: "SD-WAN, load balancing, sauvegarde et reprise d'activité conformes à vos SLA.",
      },
    ],
    highlights: ["Haute disponibilité", "Infrastructure as Code", "Observabilité", "SLA garantis"],
    partnerSpotlights: [
      {
        id: "microsoft-dev",
        partner: "Microsoft",
        logo: PARTNER_LOGOS.microsoft,
        title: "Solutions cloud & productivité Microsoft",
        description:
          "Partenaire Microsoft, Box.Africa conçoit et déploie vos environnements Azure et votre écosystème Microsoft 365, avec une expertise en sécurité et gouvernance des identités.",
        items: [
          "Architecture et migration vers Microsoft Azure",
          "Déploiement Microsoft 365 (sécurité, conformité, identités)",
          "Administration Microsoft Entra ID (Azure AD)",
          "Supervision et gouvernance de l'environnement Microsoft",
        ],
        highlights: ["Partenaire Microsoft", "Azure", "Microsoft 365"],
      },
    ],
  },
  {
    slug: "cybersecurite",
    iconImage: SERVICE_ICONS.cyber,
    color: "var(--coral)",
    image: SERVICE_PHOTOS.cyber,
    title: "Cybersécurité",
    summary: "Protection proactive, détection des menaces et réponse aux incidents pour sécuriser vos actifs numériques.",
    description:
      "La cybersécurité est intégrée dès la conception de nos projets. Nos experts réalisent des audits offensifs, mettent en place des centres de supervision (SecOps) et interviennent en analyse forensique après incident.",
    items: [
      {
        name: "Pentest",
        detail: "Tests d'intrusion applicatifs, réseau et infrastructure — rapports actionnables et plans de remédiation.",
      },
      {
        name: "SecOps",
        detail: "SOC, SIEM, corrélation d'événements et playbooks de réponse automatisée 24/7.",
      },
      {
        name: "Analyse Forensique",
        detail: "Investigation post-incident, collecte de preuves, restauration et recommandations préventives.",
      },
      {
        name: "Conformité & Gouvernance",
        detail: "Politiques de sécurité, gestion des identités (IAM) et alignement sur les référentiels sectoriels.",
      },
    ],
    highlights: ["Zero Trust", "Threat intelligence", "Sensibilisation", "ISO 27001"],
  },
  {
    slug: "delegation",
    iconImage: SERVICE_ICONS.delegation,
    color: "var(--gold)",
    image: SERVICE_PHOTOS.delegation,
    title: "Délégation",
    summary: "Renfort d'experts à la demande — régie, offshore ou nearshore selon vos contraintes.",
    description:
      "Besoin de compétences ponctuelles ou d'une équipe dédiée ? Box.Africa met à disposition des profils seniors en régie, ou des équipes offshore/nearshore intégrées à vos processus et outils.",
    items: [
      {
        name: "Régie d'experts",
        detail: "Architectes, développeurs, DevOps ou RSSI en mission chez vous, avec reporting et suivi de performance.",
      },
      {
        name: "Offshore à la demande",
        detail: "Équipes distantes compétitives, timezone adaptée et communication structurée pour vos projets long terme.",
      },
      {
        name: "NearShore à la demande",
        detail: "Proximité géographique et culturelle — collaboration en direct depuis l'Afrique de l'Ouest.",
      },
      {
        name: "Staff augmentation",
        detail: "Montée en charge rapide sur des profils rares : cloud, data, sécurité ou delivery management.",
      },
    ],
    highlights: ["Profils certifiés", "Onboarding rapide", "Flexibilité contractuelle", "Bilingue FR/EN"],
  },
  {
    slug: "services-manages",
    iconImage: SERVICE_ICONS.managed,
    color: "var(--magenta)",
    image: SERVICE_PHOTOS.managed,
    title: "Services managés",
    summary: "Exploitation, supervision et maintenance de vos systèmes d'information au quotidien.",
    description:
      "Externalisez l'exploitation de votre SI et concentrez-vous sur votre cœur de métier. Nos équipes assurent l'infogérance, la cyber-supervision et la maintenance matérielle et logicielle avec des engagements de service clairs.",
    items: [
      {
        name: "Cyber Supervision",
        detail: "Veille sécurité, patching, durcissement et alertes en temps réel sur votre parc.",
      },
      {
        name: "Infogérance des S.I.",
        detail: "Administration serveurs, bases de données, sauvegardes et gestion des incidents N1/N2/N3.",
      },
      {
        name: "Maintenance hard/soft",
        detail: "Interventions sur site, renouvellement de parc, licences et mises à jour applicatives.",
      },
      {
        name: "Proxy — support innovant",
        detail: "Point focal résident, prise en main immédiate et intervention sur site en moins de 24h.",
      },
    ],
    highlights: ["Astreinte 24/7", "Reporting mensuel", "ITIL", "Intervention < 24h"],
    externalLink: { to: "/proxy", label: "Découvrir Proxy en détail" },
  },
  {
    slug: "formation",
    iconImage: SERVICE_ICONS.formation,
    color: "var(--blue)",
    image: SERVICE_PHOTOS.formation,
    title: "Formation",
    summary: "Montée en compétences de vos équipes via Box.Africa Academy — intra ou inter-entreprise.",
    description:
      "Notre centre de formation IT propose des parcours certifiants et sur mesure : DevOps, Data & IA, cybersécurité et management des SI. Salles équipées, formateurs praticiens et modules adaptés à votre contexte.",
    items: [
      {
        name: "DevOps",
        detail: "Docker, Kubernetes, CI/CD, DevSecOps et pratiques SRE pour industrialiser vos livraisons.",
      },
      {
        name: "Data & AI",
        detail: "Python, Spark, modèles ML, MLOps et gouvernance des données pour vos équipes analytiques.",
      },
      {
        name: "Management des SI",
        detail: "ITIL, COBIT, conduite du changement et pilotage de projets transverses.",
      },
      {
        name: "Cybersécurité",
        detail: "Sensibilisation, ethical hacking, réponse à incident et certifications Microsoft.",
      },
    ],
    highlights: ["Intra / Inter", "Certifications", "Labs pratiques", "Modules sur mesure"],
    externalLink: { to: "/academy", label: "Voir le catalogue BoxAcademy" },
    partnerSpotlights: [
      {
        id: "odoo-formation",
        partner: "Odoo",
        logo: PARTNER_LOGOS.odoo,
        title: "Formations certifiantes Odoo",
        description:
          "BoxAcademy propose des parcours de formation dédiés à Odoo, pour vos équipes métier comme pour vos développeurs, afin de tirer pleinement parti de votre ERP.",
        items: [
          "Prise en main fonctionnelle Odoo (utilisateurs métier)",
          "Administration et paramétrage Odoo",
          "Développement de modules Odoo (Python, ORM)",
          "Préparation aux certifications Odoo",
        ],
        highlights: ["Intra / Inter", "Formateurs certifiés Odoo"],
      },
      {
        id: "microsoft-formation",
        partner: "Microsoft",
        logo: PARTNER_LOGOS.microsoft,
        title: "Formations & certifications Microsoft",
        description:
          "BoxAcademy couvre l'essentiel du catalogue Microsoft : Azure, Microsoft 365, System Center et gestion des identités, avec préparation aux certifications officielles.",
        items: [
          "Windows Server & infrastructure Microsoft",
          "Microsoft Azure & Azure Database",
          "Microsoft 365 / Office 365",
          "Power BI & gestion des identités (SC-300)",
        ],
        highlights: ["8 formations au catalogue", "Certifications officielles"],
      },
    ],
  },
];

// Partenaires technologiques clé — chaque carte renvoie vers le spotlight détaillé
// correspondant dans la page Services (voir SERVICES[].partnerSpotlights).
export const KEY_PARTNERS = [
  {
    partner: "Odoo",
    logo: PARTNER_LOGOS.odoo,
    tagline: "Partenaire ERP open source",
    cards: [
      {
        title: "Développement Odoo",
        summary: "Implémentation, personnalisation et intégration de l'ERP Odoo pour digitaliser vos processus métier.",
        link: "/services#odoo-dev",
      },
      {
        title: "Formations Odoo",
        summary: "Des parcours BoxAcademy pour prendre en main, administrer ou développer sur Odoo.",
        link: "/services#odoo-formation",
      },
    ],
  },
  {
    partner: "Microsoft",
    logo: PARTNER_LOGOS.microsoft,
    tagline: "Partenaire cloud & productivité",
    cards: [
      {
        title: "Solutions cloud Microsoft",
        summary: "Architecture Azure, déploiement Microsoft 365 et gouvernance des identités pour votre organisation.",
        link: "/services#microsoft-dev",
      },
      {
        title: "Formations Microsoft",
        summary: "Windows Server, Azure, Microsoft 365 et Power BI — nos parcours certifiants Microsoft.",
        link: "/services#microsoft-formation",
      },
    ],
  },
];

export const SECTORS = ["Finances", "Télécom", "Industries", "Parapublique"];

export const STATS = [
  { target: 100, suffix: "+", label: "collaborateurs" },
  { target: 80, suffix: "%", label: "d'ingénieurs" },
  { target: 20, prefix: "+", suffix: "%", label: "de croissance / an" },
  { target: 2020, label: "année de référence" },
];
