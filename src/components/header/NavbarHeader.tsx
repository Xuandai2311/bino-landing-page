import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/libs/I18nNavigation';
import LoginButton from './LoginButton';
import { menuItems } from './menuItems';
import MobileMenuToggle from './MobileMenuToggle';

export default async function Header() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'Header.menu_items',
  });

  return (
    <>
      <header className="fixed top-8 z-50 w-full px-8 lg:px-20">
        <div className="mx-auto h-12 sm:px-6">
          <nav
            className="relative rounded-3xl bg-white/90 pr-1.5 pl-6 shadow"
          >
            <div className="flex h-12 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/Logo.svg"
                    alt="Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                    priority
                  />
                </Link>

                <div className="hidden lg:ml-8 lg:flex lg:gap-8">
                  {menuItems.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative font-medium text-gray-700 transition-colors duration-200 hover:text-primary-1"
                    >
                      {t(item.label)}
                      {item.label && (
                        <span
                          className="absolute -top-2 -right-5 rotate-12 text-xs font-medium text-secondary-red uppercase"
                        >
                          {item.highlight}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex lg:items-center lg:gap-4">
                <LoginButton />
              </div>

              {/* Mobile Menu Button */}
              <MobileMenuToggle menuItems={menuItems} />

            </div>

          </nav>
        </div>
      </header>
    </>

  );
}
