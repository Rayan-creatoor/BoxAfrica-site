import { TECH_PHOTOS, SERVICE_PHOTOS, PARTNER_LOGOS as VENDOR_LOGOS } from "./content.js";

export const ACADEMY_PHOTOS = {
  hero: TECH_PHOTOS.academyBg,
  mosaicA: SERVICE_PHOTOS.formation,
  mosaicB: TECH_PHOTOS.think,
  mosaicC: TECH_PHOTOS.team,
  mosaicD: TECH_PHOTOS.woman,
  contact: SERVICE_PHOTOS.contact,
  step1: "https://images.pexels.com/photos/9433160/pexels-photo-9433160.jpeg?auto=compress&cs=tinysrgb&w=900",
  step2: "https://images.pexels.com/photos/5940713/pexels-photo-5940713.jpeg?auto=compress&cs=tinysrgb&w=900",
  step3: "https://images.pexels.com/photos/5905489/pexels-photo-5905489.jpeg?auto=compress&cs=tinysrgb&w=900",
  step4: "https://images.pexels.com/photos/9829483/pexels-photo-9829483.jpeg?auto=compress&cs=tinysrgb&w=900",
};

export const ACADEMY_STATS = [
  { value: "20", label: "formations au catalogue" },
  { value: "6", label: "domaines d'expertise" },
  { value: "100%", label: "formateurs certifiés" },
  { value: "Intra / Inter", label: "formats disponibles" },
];

export const ACADEMY_CATEGORIES = [
  {
    slug: "microsoft-cloud",
    icon: "/icons/microsoft-cloud.svg",
    color: "#4f7cff",
    title: "Microsoft & Cloud",
    desc: "Administration, sécurité et productivité sur l'écosystème Microsoft et le cloud Azure.",
    courses: [
      {
        name: "Windows Server 2019",
        type: "Certification officielle",
        blurb: "Installation, administration et sécurisation des environnements Windows Server en entreprise.",
        logo: VENDOR_LOGOS.microsoft,
      },
      {
        name: "Microsoft AZURE",
        type: "Certification officielle",
        blurb: "Fondamentaux et administration des services cloud Microsoft Azure.",
        logo: VENDOR_LOGOS.microsoft,
      },
      {
        name: "Microsoft Certified Azure Database",
        type: "Certification officielle",
        blurb: "Conception, déploiement et gestion des bases de données Azure (SQL, Cosmos DB).",
        logo: VENDOR_LOGOS.microsoft,
      },
      {
        name: "Microsoft SC-300",
        type: "Certification officielle",
        blurb: "Gestion des identités et des accès avec Microsoft Entra ID (Azure AD).",
        logo: VENDOR_LOGOS.microsoft,
      },
      {
        name: "Microsoft Suite System Center",
        type: "Formation experte",
        blurb: "Supervision, déploiement et gestion de parc avec la suite System Center.",
        logo: VENDOR_LOGOS.microsoft,
      },
      {
        name: "Microsoft Office 365",
        type: "Formation experte",
        blurb: "Prise en main et administration des outils collaboratifs Office 365.",
        logo: VENDOR_LOGOS.microsoft,
      },
      {
        name: "Microsoft 365",
        type: "Certification officielle",
        blurb: "Administration globale de l'environnement Microsoft 365 : sécurité, conformité, identités.",
        logo: VENDOR_LOGOS.microsoft,
      },
      {
        name: "Microsoft Power Bi",
        type: "Formation experte",
        blurb: "Modélisation de données et création de tableaux de bord décisionnels.",
        logo: VENDOR_LOGOS.microsoft,
      },
    ],
  },
  {
    slug: "oracle",
    icon: "/icons/bases-de-donnees.svg",
    color: "#345fc7",
    title: "Oracle",
    desc: "Administration et sécurisation avancée des bases de données Oracle.",
    courses: [
      {
        name: "Oracle Advanced Security",
        type: "Formation experte",
        blurb: "Chiffrement, contrôle d'accès et protection avancée des bases Oracle.",
        logo: VENDOR_LOGOS.oracle,
      },
      {
        name: "Oracle Boot Camp",
        type: "Formation experte",
        blurb: "Immersion intensive sur l'administration et l'optimisation des bases Oracle.",
        logo: VENDOR_LOGOS.oracle,
      },
    ],
  },
  {
    slug: "cyber-reseaux",
    icon: "/icons/cybersecurite-reseaux.svg",
    color: "#1d4ed8",
    title: "Cybersécurité & Réseaux",
    desc: "Sécuriser les infrastructures réseau et mettre en place une gouvernance de la sécurité de l'information.",
    courses: [
      {
        name: "Formation Cisco CCNA",
        type: "Certification officielle",
        blurb: "Fondamentaux réseau : routage, commutation et dépannage d'infrastructures Cisco.",
        logo: VENDOR_LOGOS.cisco,
      },
      {
        name: "FortiGate Administrator",
        type: "Certification officielle",
        blurb: "Configuration et administration des pare-feux FortiGate pour sécuriser le réseau.",
        logo: VENDOR_LOGOS.fortinet,
      },
      {
        name: "ISO 27001/Lead Implementer",
        type: "Certification officielle",
        blurb: "Mise en place d'un système de management de la sécurité de l'information.",
        logo: VENDOR_LOGOS.iso,
        badge: "Certifié PECB",
      },
    ],
  },
  {
    slug: "gouvernance",
    icon: "/icons/gouvernance-projet.svg",
    color: "#7fa0f2",
    title: "Gouvernance & Gestion de projet",
    desc: "Cadres méthodologiques reconnus pour structurer la gestion des services et des projets IT.",
    courses: [
      {
        name: "ITIL V4 Foundation",
        type: "Certification officielle",
        blurb: "Bonnes pratiques de gestion des services IT et amélioration continue.",
      },
      {
        name: "Prince2 Foundation V7",
        type: "Certification officielle",
        blurb: "Méthodologie de gestion de projet structurée, orientée résultats.",
      },
    ],
  },
  {
    slug: "ia-data",
    icon: "/icons/ia-data.svg",
    color: "#6b8fe8",
    title: "Intelligence Artificielle & Data",
    desc: "Comprendre et exploiter l'intelligence artificielle au service des métiers.",
    courses: [
      {
        name: "Intelligence Artificielle",
        type: "Formation experte",
        blurb: "Concepts clés de l'IA, du machine learning aux cas d'usage métier.",
      },
    ],
  },
  {
    slug: "odoo",
    icon: "/icons/odoo-modules.svg",
    color: "#345fc7",
    title: "Odoo",
    desc: "Prise en main, administration et développement sur l'ERP open source Odoo, pour vos équipes métier comme pour vos développeurs.",
    courses: [
      {
        name: "Prise en main fonctionnelle Odoo",
        type: "Formation métier",
        blurb: "Navigation, modules clés et bonnes pratiques au quotidien pour les utilisateurs métier.",
        logo: VENDOR_LOGOS.odoo,
      },
      {
        name: "Administration et paramétrage Odoo",
        type: "Formation experte",
        blurb: "Configuration, gestion des droits d'accès et paramétrage avancé de l'ERP.",
        logo: VENDOR_LOGOS.odoo,
        badge: "À venir",
      },
      {
        name: "Développement de modules Odoo",
        type: "Formation développeur",
        blurb: "Python, ORM Odoo et création de modules sur mesure pour étendre l'ERP.",
        logo: VENDOR_LOGOS.odoo,
        badge: "À venir",
      },
      {
        name: "Préparation aux certifications Odoo",
        type: "Certification",
        blurb: "Préparation ciblée aux examens des certifications officielles Odoo.",
        logo: VENDOR_LOGOS.odoo,
        badge: "À venir",
      },
    ],
  },
];

export const ACADEMY_FORMAT_STEPS = [
  {
    title: "Inter ou Intra-entreprise",
    text: "Sessions ouvertes sur nos campus ou déployées directement dans vos locaux, selon vos contraintes.",
    image: ACADEMY_PHOTOS.step1,
  },
  {
    title: "Salles équipées",
    text: "Environnements pratiques prêts à l'emploi — labs, VM et outillage identiques à ceux du terrain.",
    image: ACADEMY_PHOTOS.step2,
  },
  {
    title: "Formateurs certifiés",
    text: "Des experts en activité, certifiés sur les technologies enseignées, avec une pédagogie orientée pratique.",
    image: ACADEMY_PHOTOS.step3,
  },
  {
    title: "Accompagnement post-formation",
    text: "Suivi, ressources complémentaires et préparation ciblée aux examens de certification.",
    image: ACADEMY_PHOTOS.step4,
  },
];

export const ACADEMY_AUDIENCE = [
  "Étudiants & jeunes diplômés",
  "Professionnels IT",
  "Entreprises",
  "Administrations publiques",
];
