export interface PricingTier {
  id: string;
  number: string;
  name: string;
  price: string;
  priceValue: number;
  tagline: string;
  description: string;
  featured: boolean;
  includes: string[];
  expandedIncludes: string[];
  ctaText: string;
  whatsappText: string;
}

export interface SpecialistProject {
  id: string;
  tag: string;
  name: string;
  price: string;
  priceValue: number;
  description: string;
  whatsappText: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    number: '01',
    name: 'Starter',
    price: '£895',
    priceValue: 895,
    tagline: 'For new and small businesses.',
    description: 'A clean, fast, professional website built to give your business instant credibility and a clear conversion path.',
    featured: false,
    includes: [
      '1–3 custom pages',
      'Custom TheoMedia design',
      'Mobile-first responsive build',
      'Contact / enquiry form',
      'WhatsApp / call integration',
      'Basic SEO & Google indexing',
    ],
    expandedIncludes: [
      'SSL & domain setup',
      'High-speed performance tuning',
      'Social links & favicon',
      '1 revision round',
      '14 days launch support',
    ],
    ctaText: 'CHOOSE STARTER',
    whatsappText: "Hi TheoMedia, I'm interested in the Starter website package (£895). Could you tell me the next steps?",
  },
  {
    id: 'professional',
    number: '02',
    name: 'Professional',
    price: '£2,495',
    priceValue: 2495,
    tagline: 'For established SMEs ready to scale.',
    description: 'Our comprehensive commercial website build with CMS management, dynamic animations, and conversion architecture.',
    featured: true,
    includes: [
      'Up to 8 custom pages',
      'Intuitive CMS (edit text, blogs & media)',
      'Kinetic scroll animations & motion',
      'Copywriting polishing on key pages',
      'Google Analytics & Search Console setup',
    ],
    expandedIncludes: [
      'Local SEO & schema foundation',
      'Advanced enquiry & booking forms',
      'Up to 2 business integrations',
      'Conversion-focused CTAs',
      '2 revision rounds',
      '60 days dedicated post-launch support',
    ],
    ctaText: 'CHOOSE PROFESSIONAL',
    whatsappText: "Hi TheoMedia, I'm interested in the Professional website package (£2,495). Could you tell me the next steps?",
  },
  {
    id: 'bespoke',
    number: '03',
    name: 'Bespoke',
    price: '£4,995',
    priceValue: 4995,
    tagline: 'For premium, custom brand experiences.',
    description: 'Tailored creative direction, bespoke UX design, and custom technical execution for brands that refuse to look ordinary.',
    featured: false,
    includes: [
      'Bespoke art direction & luxury layout',
      'Custom interactive experiences & motion',
      'Multi-page architecture & advanced CMS',
      'Bespoke workflows or client portals',
      'Custom API & database integrations',
    ],
    expandedIncludes: [
      'Advanced technical SEO architecture',
      'Performance & Core Web Vitals tuning',
      'Custom animations & interactive elements',
      '3 revision rounds',
      '90 days priority support',
    ],
    ctaText: 'DISCUSS BESPOKE',
    whatsappText: "Hi TheoMedia, I'd like to discuss a Bespoke website project starting from £4,995.",
  },
];

export const specialistProjects: SpecialistProject[] = [
  {
    id: 'custom-software',
    tag: 'SAAS & CUSTOM SOFTWARE',
    name: 'Custom Web Apps & Operational Portals',
    price: 'from £10,000+',
    priceValue: 10000,
    description: 'Full-stack bespoke web applications involving relational databases, client/staff portals, automated quoting engines, and internal operational tools built to eliminate manual spreadsheets.',
    whatsappText: "Hi TheoMedia, I'd like to get a quote for a Custom Web App or Software project (from £10,000+).",
  },
  {
    id: 'hospitality-systems',
    tag: 'HOSPITALITY & STAYS',
    name: 'Direct Booking & Hospitality Engines',
    price: 'from £10,000+',
    priceValue: 10000,
    description: 'Bespoke commission-free room reservation engines, multi-property PMS connectivity, table reservations, dining menus, and guest experience portals.',
    whatsappText: "Hi TheoMedia, I'd like to get a quote for a Specialist Hospitality System (from £10,000+).",
  },
  {
    id: 'ecommerce-platforms',
    tag: 'ECOMMERCE & COMMERCE',
    name: 'Advanced Ecommerce Architectures',
    price: 'from £10,000+',
    priceValue: 10000,
    description: 'High-scale online stores with bespoke catalog navigation, custom product builders, multi-currency processing, ERP/inventory synchronization, and frictionless mobile checkouts.',
    whatsappText: "Hi TheoMedia, I'd like to get a quote for a Specialist Ecommerce Architecture (from £10,000+).",
  },
];

export const sharedInclusions = [
  'Custom design',
  'Mobile-first build',
  'Fast loading',
  'SSL & Security',
  'Contact setup',
  'SEO foundations',
  'Accessibility standards',
  'Full client ownership',
];
