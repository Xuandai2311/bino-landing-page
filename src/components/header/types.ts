export type MenuTranslationKey = 'home' | 'about' | 'kol' | 'products' | 'contact';

export type MenuItem = {
  label: MenuTranslationKey;
  href: string;
  highlight?: string;
};

export type SetMobileMenuOpen = (isOpen: boolean) => void;
