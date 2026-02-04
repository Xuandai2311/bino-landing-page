import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { AnimatedContainer } from '@/components/common/AnimatedContainer';
import { AnimatedText } from '@/components/common/AnimatedText';
import { Link } from '@/libs/I18nNavigation';

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'Footer',
  });

  // const currentYear = new Date().getFullYear();

  return (
    <footer id="contact-section" className="bg-primary-3 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12 lg:py-16">
        {/* Main Footer Content */}

        <div className="lg:grid lg:grid-cols-5">
          {/* Logo Section */}
          <AnimatedContainer direction="bottom" delay={0.1} className="col-span-2 mb-8">
            <Link href="/" className="flex items-center justify-start">
              <Image
                src="/Logo.svg"
                alt="ERA MEDIA Logo"
                width={85}
                height={81}
                className="h-[81px] w-auto brightness-0 invert"
                priority
              />
            </Link>
          </AnimatedContainer>
          <div className="col-span-3 grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-12">

            <div className="col-span-2 flex gap-8 md:col-span-1 md:grid">
              {/* Resources */}
              <AnimatedContainer direction="bottom" delay={0.2} className="lg:col-span-1">
                <AnimatedText as="h3" className="mb-4 font-semibold" delay={0.2}>{t('resources.title')}</AnimatedText>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('resources.home')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kol"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('resources.kol_list')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('resources.products')}
                    </Link>
                  </li>
                </ul>
              </AnimatedContainer>

              {/* Developers */}
              <AnimatedContainer direction="bottom" delay={0.3} className="ml-16 lg:col-span-1 lg:ml-0">
                <AnimatedText as="h3" className="mb-4 font-semibold" delay={0.3}>{t('developers.title')}</AnimatedText>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="https://github.com"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('developers.github')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('developers.docs')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/smart-contracts"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('developers.smart_contracts')}
                    </Link>
                  </li>
                </ul>
              </AnimatedContainer>
            </div>

            <div className="col-span-2 flex gap-8 md:col-span-1 md:grid">
              {/* Downloads */}
              <AnimatedContainer direction="bottom" delay={0.4} className="lg:col-span-1">
                <AnimatedText as="h3" className="mb-4 font-semibold" delay={0.4}>{t('downloads.title')}</AnimatedText>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/download/mac"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('downloads.portrait_mac')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/download/windows"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('downloads.portrait_windows')}
                    </Link>
                  </li>
                </ul>
              </AnimatedContainer>
              {/* Platform */}
              <AnimatedContainer direction="bottom" delay={0.5} className="ml-[72px] lg:col-span-1 lg:ml-0">
                <AnimatedText as="h3" className="mb-4 font-semibold" delay={0.5}>{t('platform.title')}</AnimatedText>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="https://x.com"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('platform.x')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://farcaster.xyz"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('platform.farcaster')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://bsky.social"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('platform.bluesky')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://discord.com"
                      className="text-white/80 transition-colors hover:text-white"
                    >
                      {t('platform.discord')}
                    </Link>
                  </li>
                </ul>
              </AnimatedContainer>
            </div>

            <div className="col-span-2 flex gap-8 md:col-span-1 md:grid">

              {/* Support Section - Mobile: below main content, Desktop: separate row */}
              <AnimatedContainer direction="bottom" delay={0.6} className="grid grid-cols-1 gap-8">
                <div>
                  <AnimatedText as="h3" className="mb-4 font-semibold" delay={0.6}>{t('support.title')}</AnimatedText>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/customer-care"
                        className="text-white/80 transition-colors hover:text-white"
                      >
                        {t('support.customer_care')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/complaints"
                        className="text-white/80 transition-colors hover:text-white"
                      >
                        {t('support.complaints')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hotline"
                        className="text-white/80 transition-colors hover:text-white"
                      >
                        {t('support.hotline')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-dashed border-white/20 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            {/* Copyright */}
            <p className="text-sm text-white/80">
              {t('copyright')}
            </p>

            {/* Bottom Links */}
            <div className="flex flex-wrap items-start justify-center gap-4 text-sm md:items-center md:justify-end">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <Link
                  href="/system-status"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {t('system_status')}
                </Link>
              </div>
              <Link
                href="/privacy"
                className="text-white/80 transition-colors hover:text-white"
              >
                {t('privacy')}
              </Link>
              <Link
                href="/terms"
                className="text-white/80 transition-colors hover:text-white"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
