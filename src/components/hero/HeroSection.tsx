import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { AnimatedContainer } from '@/components/common/AnimatedContainer';
import { AnimatedDecor } from '@/components/common/AnimatedDecor';
import { AnimatedText } from '@/components/common/AnimatedText';
import HeroButton from './HeroButton';
import SocialProof from './SocialProof';

export default async function HeroSection() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'HeroSection',
  });
  return (
    <section className="relative mt-5 mb-20 flex justify-center overflow-hidden rounded-3xl bg-linear-to-b from-hero-background-1 to-hero-background-2">
      <div className="relative z-10">
        {/* decor left */}
        <AnimatedDecor
          className="absolute top-[100px] left-[40px] z-20 lg:top-[128px] lg:left-[-135px]"
          direction="left"
          delay={0.1}
        >
          <Image
            src="/assets/decor/comment-decor.svg"
            alt="Comment decor"
            width={27}
            height={25}
            className="lg:h-[46px] lg:w-[51px]"

          />
        </AnimatedDecor>
        <AnimatedDecor
          className="absolute top-[320px] left-[-205px] z-20 hidden md:block"
          direction="left"
          delay={0.2}
        >
          <Image
            src="/assets/decor/arrow-decor1.svg"
            alt="Arrow decor 1"
            width={68}
            height={48}

          />
        </AnimatedDecor>
        <AnimatedDecor
          className="absolute top-[400px] left-[-40px] z-20 hidden md:block"
          direction="left"
          delay={0.3}
        >
          <Image
            src="/assets/decor/bling-decor.svg"
            alt="Bling decor"
            width={18}
            height={21}

          />
        </AnimatedDecor>
        <AnimatedDecor
          className="absolute top-[270px] left-[30px] md:top-[477px] md:left-[-43px] "
          direction="left"
          delay={0.15}
        >
          <Image
            src="/assets/decor/smileface-decor.svg"
            alt="Smileface decor"
            width={27}
            height={27}
            className="md:h-[43px] md:w-[43px]"

          />
        </AnimatedDecor>

        {/* decor right */}
        <AnimatedDecor
          className="absolute top-[100px] right-[40px] z-20 md:top-[128px] md:right-[-155px]"
          direction="right"
          delay={0.1}
        >
          <Image
            src="/assets/decor/live-decor.svg"
            alt="Live decor"
            width={61}
            height={51}
            className="md:h-[98px] md:w-[117px]"

          />
        </AnimatedDecor>
        <AnimatedDecor
          className="absolute top-[320px] right-[-135px] z-20 hidden md:block"
          direction="right"
          delay={0.2}
        >
          <Image
            src="/assets/decor/arrow-decor2.svg"
            alt="Arrow decor 2"
            width={35}
            height={58}

          />
        </AnimatedDecor>
        <AnimatedDecor
          className="absolute top-[280px] right-[30px] z-20 md:top-[400px] md:right-[-35px]"
          direction="right"
          delay={0.25}
        >
          <Image
            src="/assets/decor/like-decor.svg"
            alt="Like decor"
            width={21}
            height={21}
            className="md:h-[46px] md:w-[51px]"

          />
        </AnimatedDecor>
        <AnimatedDecor
          className="absolute right-[-45px] z-20 hidden md:block lg:top-[620px]"
          direction="right"
          delay={0.3}
        >
          <Image
            src="/assets/decor/arrow-decor3.svg"
            alt="Arrow decor 3"
            width={89}
            height={24}

          />
        </AnimatedDecor>

        <div className="relative z-10 mt-52 px-4 text-center">
          <AnimatedContainer className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-4">
            <AnimatedText as="h1" className="grid text-32px font-medium md:block lg:text-52px" delay={0.1}>
              {t('title')}
              {' '}
              <span className="mx-auto mb-3.5 w-fit bg-linear-to-r from-primary-1 to-primary-2 bg-clip-text font-playfair text-32px font-normal text-transparent italic md:mx-0 lg:text-52px">{t('highlight')}</span>
            </AnimatedText>
          </AnimatedContainer>
          <AnimatedText as="h1" className="lg: text-32px font-medium lg:text-52px" delay={0.2}>
            {t('subtitle')}
          </AnimatedText>
          <AnimatedText as="p" className="mx-auto mt-8 max-w-xl text-base text-text-secondary md:text-lg" delay={0.3}>
            {t('description')}
          </AnimatedText>
        </div>
        <AnimatedContainer direction="top" delay={0.4}>
          <HeroButton />
        </AnimatedContainer>
        <AnimatedContainer direction="bottom" delay={0.5}>
          <SocialProof />
        </AnimatedContainer>
      </div>
      <Image
        src="/assets/images/hero-background.png"
        alt="hero-background"
        fill
        className="z-0 object-cover"
        priority
      />
    </section>
  );
}
