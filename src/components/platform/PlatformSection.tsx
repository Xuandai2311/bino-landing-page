import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { AnimatedContainer } from '@/components/common/AnimatedContainer';
import { AnimatedText } from '@/components/common/AnimatedText';

export default async function PlatformSection() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'PlatformSection',
  });
  return (
    <section className="mx-5 max-w-7xl py-12 md:mx-auto md:py-16">
      {/* Mobile Layout */}
      <div className="relative z-10 block h-[569px] overflow-hidden rounded-2xl md:hidden">
        <div className="relative z-20 px-6 py-12">
          <AnimatedContainer className="flex min-h-[300px] flex-col items-center text-center" delay={0.3}>
            <AnimatedText as="h2" className="w-full text-3xl font-medium text-white" delay={0.1}>
              {t('title')}
            </AnimatedText>
            <AnimatedText as="p" className="mt-2 w-full text-lg text-[#cdb8a6]" delay={0.2}>
              {t('description')}
            </AnimatedText>
          </AnimatedContainer>
        </div>
        <div>
          <Image
            src="/assets/images/banner-mobile.png"
            alt="Platform banner mobile"
            height={584}
            width={358}
            className="absolute bottom-0 z-0 object-cover"
          />
          {/* Linear gradient */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(180deg, #814E20 0%, #A0866C 40%, #A9958000 45%)',
              pointerEvents: 'none',
            }}
          />
        </div>

      </div>

      {/* Desktop Layout */}
      <AnimatedContainer direction="top" delay={0.2}>
        <div className="relative hidden md:block">
          <Image
            src="/assets/images/banner.png"
            alt="Platform banner"
            width={1280}
            height={666}
            className="h-auto w-full rounded-4xl"
            priority
          />
          <AnimatedContainer className="absolute top-8 left-8 flex max-w-1/4 flex-col items-start text-left" delay={0.1}>
            <AnimatedText as="h2" className="text-3xl font-medium text-white" delay={0.4}>
              {t('title')}
            </AnimatedText>
            <AnimatedText as="p" className="mt-2 text-lg text-white" delay={0.5}>
              {t('description')}
            </AnimatedText>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>

    </section>
  );
}
