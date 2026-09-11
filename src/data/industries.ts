export interface Industry {
  name: string;
  priorities: string[];
  slug?: string;
}

export const industries: Industry[] = [
  { name: 'Hospitality', priorities: ['Story', 'Rooms', 'Direct Booking'], slug: '/industries/hotels' },
  { name: 'Restaurants', priorities: ['Menus', 'Reservations', 'Private Dining'], slug: '/industries/restaurants' },
  { name: 'Automotive', priorities: ['Trust', 'Services', 'Booking'] },
  { name: 'Trades', priorities: ['Work', 'Proof', 'Quote Requests'], slug: '/industries/trades' },
  { name: 'Private Healthcare', priorities: ['Trust', 'Treatment Discovery', 'Consultation'], slug: '/industries/healthcare' },
  { name: 'Ecommerce', priorities: ['Product', 'Story', 'Conversion'], slug: '/services/ecommerce' },
  { name: 'Travel', priorities: ['Destination', 'Experience', 'Booking'] },
  { name: 'Public Figures & Civic', priorities: ['Trust', 'Priorities', 'Information', 'Contact'] },
  { name: 'Professional Services', priorities: ['Credibility', 'Expertise', 'Enquiry'] },
];
