import type { MenuItem } from './types';
import { useTranslations } from 'next-intl';
import { Link } from '@/libs/I18nNavigation';
import LoginButton from './LoginButton';

type Props = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  menuItems: MenuItem[];
};

export default function MobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  menuItems,
}: Props) {
  const t = useTranslations('Header.menu_items');

  return (
    <div
      className={`absolute top-full right-0 left-0 mt-2 overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
        isMobileMenuOpen
          ? 'max-h-96 translate-y-0 opacity-100'
          : 'max-h-0 -translate-y-4 opacity-0'
      }`}
      id="mobile-menu"
    >
      <div className="space-y-1 px-2 pt-3 pb-4">
        {menuItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative block rounded-md px-3 py-2.5 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-primary-1 ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : '-translate-y-2 opacity-0'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t(item.label)}
            {item.highlight && (
              <span
                className="absolute -top-1 rotate-12 text-xs font-medium text-secondary-red uppercase"
              >
                {item.highlight}
              </span>
            )}
          </Link>
        ))}
        <div
          className={`mt-4 flex items-center gap-4 transition-all duration-200 ${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-2 opacity-0'
          }`}
          style={{
            transitionDelay: isMobileMenuOpen
              ? `${menuItems.length * 50}ms`
              : '0ms',
          }}
        >
          <LoginButton setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
      </div>
    </div>
  );
}
