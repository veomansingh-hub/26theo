export interface Project {
  slug: string;
  caseStudySlug: string;
  title: string;
  sector: string;
  category: string;
  description: string;
  shortDescription: string;
  liveUrl?: string;
  tags: string[];
  features: string[];
  challenge: string;
  creativeDirection: string;
  customerJourney: string;
  technology: string[];
}

export const projects: Project[] = [
  {
    slug: 'hospitality-booking-platforms',
    caseStudySlug: 'hospitality-booking-platforms',
    title: 'Boutique Stays & Hospitality Platforms',
    sector: 'Hospitality & Stays',
    category: 'hospitality',
    description: 'Custom commission-free direct room booking engines, PMS synchronization, suite showcases, and dining reservation flows designed to eliminate OTA commission leakage.',
    shortDescription: 'Direct booking engines and guest experience platforms built to eliminate third-party commissions.',
    tags: ['Direct Booking Engine', 'PMS Connected', 'Zero Commission', 'Suite Showcases'],
    features: [
      'Commission-free direct booking engine',
      'PMS & calendar availability synchronization',
      'Dining and restaurant reservation integration',
      'Seasonal package presentation',
      'Mobile-first guest booking journey',
      'Automated confirmation & pre-arrival flows'
    ],
    challenge: 'Hotels lose 15–25% commission on third-party OTA bookings. A bespoke direct-booking platform provides immediate ROI while establishing luxury brand positioning.',
    creativeDirection: 'Cinematic hospitality storytelling. Warm editorial tones, generous white space, and immersive photography create the tactile feeling of arriving at the property.',
    customerJourney: 'Guest discovers property → explores suites & dining → books directly at guaranteed best rate → receives instant confirmation.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Booking Engine Architecture', 'PMS Integration Ready'],
  },
  {
    slug: 'restaurant-dining-systems',
    caseStudySlug: 'restaurant-dining-systems',
    title: 'Restaurant & Gastropub Experiences',
    sector: 'Dining & Gastropubs',
    category: 'hospitality',
    description: 'Atmospheric dining websites with interactive seasonal menus, instant table booking integration, private hire event workflows, and local SEO foundations.',
    shortDescription: 'Atmospheric seasonal menus, instant table bookings, and private event packages.',
    tags: ['Table Booking', 'Digital Menus', 'Private Hire Enquiries', 'Local SEO'],
    features: [
      'Interactive seasonal menu display',
      'Real-time table reservation integration',
      'Private dining & venue hire enquiry workflow',
      'Sunday roast & tasting menu bookings',
      'Event and function package presentations',
      'High-speed mobile accessibility for diners'
    ],
    challenge: 'A restaurant website is the first taste of the dining experience. Generic templates feel commercial, whereas bespoke digital dining experiences elevate table bookings and venue hire.',
    creativeDirection: 'Warm, atmospheric editorial styling that mirrors the ambiance of a curated dining room. Typography and photography set an immediate culinary mood.',
    customerJourney: 'Diner searches local dining → explores seasonal menus & atmosphere → reserves table in 3 taps → shares with guests.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Reservation System Integration', 'Menu CMS'],
  },
  {
    slug: 'contractor-trades-platforms',
    caseStudySlug: 'contractor-trades-platforms',
    title: 'Architectural Build & Trades Platforms',
    sector: 'Trades & Construction',
    category: 'trades',
    description: 'High-trust contractor and trades platforms built with verified project proof galleries, interactive quote request calculators, and service area routing.',
    shortDescription: 'High-trust contractor platforms with project proof galleries and interactive quote requests.',
    tags: ['Project Proof', 'Quote Requests', 'Service Area Mapping', 'Trust Signals'],
    features: [
      'Completed project proof gallery',
      'Interactive multi-step quote request workflow',
      'Service area radius coverage mapping',
      'Accreditation, insurance & compliance badges',
      'Project timeline and milestone showcases',
      'Emergency & direct mobile enquiry channels'
    ],
    challenge: 'Contractors and builders are judged by their digital presence before their craftsmanship. A dated website loses high-value renovation tenders to competitors who simply look more professional.',
    creativeDirection: 'Solid, grounded architectural design language communicating structural precision and craftsmanship. High-resolution project photography leads the narrative.',
    customerJourney: 'Property owner lands on site → reviews completed build galleries → verifies accreditations → submits detailed quote request.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Quote Engine', 'Local SEO Architecture'],
  },
  {
    slug: 'specialist-automotive-platforms',
    caseStudySlug: 'specialist-automotive-platforms',
    title: 'Specialist Automotive & Workshop Platforms',
    sector: 'Automotive & Specialist Workshops',
    category: 'trades',
    description: 'Modern automotive platforms built around transparent service discovery, instant MOT and workshop booking flows, and fleet management channels.',
    shortDescription: 'Transparent service menus, instant MOT booking flows, and fleet management.',
    tags: ['MOT & Service Booking', 'Transparent Menus', 'Fleet Portals', 'Direct WhatsApp'],
    features: [
      'Transparent service & inspection pricing tables',
      'Instant online MOT & repair booking calendar',
      'Commercial fleet and vehicle management section',
      'Before/after workshop restoration showcases',
      'Direct WhatsApp emergency mechanic enquiry',
      'Google Maps & local search optimization'
    ],
    challenge: 'Vehicle owners need to trust an independent workshop before booking. Transparent pricing menus and instant digital booking eliminate customer uncertainty.',
    creativeDirection: 'Industrial precision meets modern digital clarity. Dark charcoal tones with crisp typography establish the feeling of a clean, state-of-the-art workshop.',
    customerJourney: 'Motorist experiences vehicle fault → sees transparent service menu → books workshop slot online → receives automated SMS/email reminder.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Online Booking Flow', 'SEO Optimised'],
  },
  {
    slug: 'private-healthcare-systems',
    caseStudySlug: 'private-healthcare-systems',
    title: 'Private Healthcare & Clinical Systems',
    sector: 'Private Healthcare & Aesthetics',
    category: 'healthcare',
    description: 'Calm, consultation-led digital experiences designed for private practices, dental clinics, and medical aesthetics with transparent treatment menus and online consultation booking.',
    shortDescription: 'High-trust clinical platforms with transparent treatment menus and consultation scheduling.',
    tags: ['Doctor Consultations', 'Treatment Menus', 'Patient FAQs', 'GDPR Compliant'],
    features: [
      'Transparent treatment menus with clear starting fees',
      'Online consultation booking flow',
      'Practitioner credentialing & bio showcases',
      'Patient FAQ and aftercare documentation',
      'Clinical before & after case documentation',
      'GDPR-compliant encrypted enquiry forms'
    ],
    challenge: 'Patients choosing private clinical care require exceptional trust signals. A healthcare platform must feel calm, safe, medically authoritative, and transparent.',
    creativeDirection: 'Clean, serene clinical minimalism. Generous white space, soft neutral tones, and precise typography establish immediate medical authority.',
    customerJourney: 'Patient researches treatment options → verifies practitioner credentials → reviews transparent fee structure → books confidential consultation.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Scheduling Integration', 'GDPR Compliant'],
  },
  {
    slug: 'artisan-ecommerce-platforms',
    caseStudySlug: 'artisan-ecommerce-platforms',
    title: 'Premium Ecommerce & Lifestyle Stores',
    sector: 'Artisan Brands & Ecommerce',
    category: 'ecommerce',
    description: 'Brand-led ecommerce experiences built around editorial product storytelling, sub-second collection filtering, and frictionless Apple Pay and Stripe checkout.',
    shortDescription: 'Sub-second collection browsing, Apple Pay checkout, and brand storytelling.',
    tags: ['Sub-second Checkout', 'Stripe & Apple Pay', 'Fast Filtering', 'Brand Storytelling'],
    features: [
      'Editorial product storytelling pages',
      'Frictionless mobile checkout with Apple Pay & Stripe',
      'Instant sub-second category & attribute filtering',
      'Multi-currency processing and international shipping',
      'Real-time inventory and back-office sync',
      'Wishlist and customer account portals'
    ],
    challenge: 'Independent lifestyle brands compete with mass-market online retailers. The platform must convey craft, materiality, and heritage to command premium pricing.',
    creativeDirection: 'Editorial product presentation with generous layout. The digital store functions like a luxury magazine with high conversion mechanics underneath.',
    customerJourney: 'Shopper discovers brand → explores product craftsmanship story → adds to bag → completes checkout with Apple Pay in seconds.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe / Shopify Headless', 'Performance Tuned'],
  },
  {
    slug: 'custom-web-applications',
    caseStudySlug: 'custom-web-applications',
    title: 'Custom Web Applications & Operational Portals',
    sector: 'Business Software & Tools',
    category: 'software',
    description: 'Bespoke SaaS platforms, client management portals, internal operations dashboards, and automated quoting tools built to eliminate manual spreadsheets.',
    shortDescription: 'Bespoke client portals, operational dashboards, and custom quoting tools.',
    tags: ['Client Portals', 'Operational Dashboards', 'Workflow Automation', 'Custom APIs'],
    features: [
      'Secure client login & account management portals',
      'Staff operations & service dispatch dashboards',
      'Automated multi-variable quoting engines',
      'Real-time database reporting and analytics',
      'Role-based permissions and audit logs',
      'Full API integrations with accounting & CRM tools'
    ],
    challenge: 'Growing businesses hit a operational ceiling when relying on disconnected spreadsheets and manual data entry. Custom software streamlines core workflows.',
    creativeDirection: 'Information density balanced with visual clarity. Fast-loading data tables, intuitive forms, and zero extraneous decoration.',
    customerJourney: 'Client or staff member logs in → accesses real-time operational data → triggers automated workflow → saves administrative hours daily.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL / Supabase Ready', 'API Integrations'],
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Architectures' },
  { id: 'hospitality', label: 'Hospitality & Dining' },
  { id: 'trades', label: 'Trades & Automotive' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'ecommerce', label: 'Ecommerce' },
  { id: 'software', label: 'Custom Software' },
] as const;
