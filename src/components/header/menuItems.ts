import type { MenuItem } from './types';

export const menuItems: MenuItem[] = [
  { label: 'about', href: '#results-section' },
  { label: 'kol', href: '#kol-section', highlight: 'new' },
  { label: 'products', href: '#products-section' },
  { label: 'contact', href: '#contact-section' },
] satisfies MenuItem[];
