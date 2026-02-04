import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { AnimatedContainer } from '@/components/common/AnimatedContainer';
import { AnimatedNumber } from '@/components/common/AnimatedNumber';
import { AnimatedText } from '@/components/common/AnimatedText';

export default async function ResultsSection() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'Results' as any,
  }) as any;
  return (
    <section id="results-section">
      <div className="grid max-w-7xl gap-2.5 md:grid-cols-3 lg:mx-auto">
        <div className="grid grid-cols-1 gap-2.5 md:col-span-2 md:grid-cols-2">
          {/* Connect Card */}
          <AnimatedContainer direction="left" className="relative flex h-[306px] flex-col justify-end rounded-2xl border-4  border-white bg-secondary-yellow p-4" delay={0.1}>
            <Image className="absolute top-[-10px] left-0" src="/assets/images/results-connect.png" alt="connect-card" width={225} height={237} />
            <AnimatedText as="h2" className="text-2xl font-medium text-gray-900 md:text-4xl" delay={0.1}>
              {t('connect_card.title')}
            </AnimatedText>
            <AnimatedText as="p" className="text-base text-text-secondary" delay={0.2}>
              {t('connect_card.description')}
            </AnimatedText>
            <Image className="absolute right-[13px] bottom-0" src="/assets/decor/results-connect-decor.svg" alt="Connect Decor" width={268} height={222} />
          </AnimatedContainer>

          {/* Generate Card */}
          <AnimatedContainer direction="right" className="relative flex h-[306px] flex-col items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-secondary-green p-4" delay={0.2}>
            <AnimatedNumber value={t('generate_card.title')} className="text-6xl font-medium text-gray-900 md:text-7xl" />
            <AnimatedText as="p" className="text-base text-text-secondary md:text-lg" delay={0.3}>
              {t('generate_card.description')}
            </AnimatedText>
            <div className="absolute bottom-0 flex md:bottom-[-60px]">
              <Image
                src="/assets/decor/results-generated-decor.svg"
                alt="Generate Decor"
                width={96}
                height={160}
                className="md:h-[188px] md:w-[112px]"
              />
              <Image
                src="/assets/decor/results-generated-decor.svg"
                alt="Generate Decor"
                width={96}
                height={160}
                className="md:h-[188px] md:w-[112px]"
              />
              <Image
                src="/assets/decor/results-generated-decor.svg"
                alt="Generate Decor"
                width={96}
                height={160}
                className="md:h-[188px] md:w-[112px]"
              />
            </div>
          </AnimatedContainer>

          {/* Conversion Effectiveness Card Mobile */}
          <div className="relative flex h-[622px] flex-col justify-end overflow-hidden rounded-2xl border-4 border-white md:hidden">
            <Image
              src="/assets/decor/live-decor.svg"
              alt="Live Decor"
              width={100}
              height={84}
              className="absolute top-[20px] left-[30px] z-10"
            />
            <Image
              src="/assets/decor/like-decor.svg"
              alt="Like Decor"
              width={33}
              height={33}
              className="absolute top-[145px] left-[30px] z-10"
            />
            <Image
              src="/assets/decor/results-arrow-decor.svg"
              alt="Conversion Effectiveness Decor"
              width={35}
              height={21}
              className="absolute top-[155px] right-[30px] z-10"
            />
            <div className="relative z-10 bg-linear-to-t from-secondary-black80 to-black/0 p-4">
              <div className="flex items-center">
                <Image
                  src="/assets/icons/star-white.svg"
                  alt="Star White"
                  width={10}
                  height={10}

                />
                <Image
                  src="/assets/icons/star-white.svg"
                  alt="Star White"
                  width={10}
                  height={10}

                />
                <Image
                  src="/assets/icons/star-white.svg"
                  alt="Star White"
                  width={10}
                  height={10}

                />
                <Image
                  src="/assets/icons/star-white.svg"
                  alt="Star White"
                  width={10}
                  height={10}

                />
                <Image
                  src="/assets/icons/star-white.svg"
                  alt="Star White"
                  width={10}
                  height={10}

                />
              </div>
              <AnimatedText as="h2" className="my-4 text-2xl font-medium text-white md:text-4xl" delay={0.1}>
                {t('conversion_effectiveness_card.title')}
              </AnimatedText>
              <AnimatedText as="p" className="text-base text-white md:text-lg" delay={0.2}>
                {t('conversion_effectiveness_card.description')}
              </AnimatedText>
            </div>
            <Image
              src="/assets/images/results-conversion-effectiveness.png"
              alt="conversion-card-bg"
              fill
              className="absolute inset-0 z-0 object-cover"
              priority
            />
          </div>

          {/* Social Card Mobile */}
          <AnimatedContainer direction="left" className="h-[306px] items-center justify-between rounded-2xl border-4 border-white bg-secondary-isabelline p-4 md:col-span-2 md:flex md:px-16" delay={0.3}>
            <div className="grid gap-4 md:w-3/5">
              <AnimatedText as="h2" className="text-2xl font-medium text-gray-900 md:text-4xl" delay={0.1}>
                {t('Social_card.title')}
              </AnimatedText>
              <AnimatedText as="p" className="text-base text-text-secondary md:text-lg" delay={0.2}>
                {t('Social_card.description')}
              </AnimatedText>

            </div>
            <div className="relative mt-5 flex flex-col gap-2 md:mt-0 md:grid md:h-full md:grid-cols-2">
              <div className="grid grid-cols-4 gap-2 md:hidden md:grid-cols-1">
                <div className="rounded-xl bg-lightbeige p-4">
                  <Image src="/assets/icons/x.svg" alt="X Social" width={37} height={37} />
                </div>
                <div className="rounded-xl bg-lightbeige p-4">
                  <Image src="/assets/icons/youtube.svg" alt="Youtube Social" width={37} height={37} />
                </div>
                <div className=""></div>
                <div></div>
              </div>
              <div className="mr-10 grid grid-cols-4 gap-2 md:mr-0 md:grid-cols-1">
                <div></div>
                <div></div>
                <div className="rounded-xl bg-lightbeige p-4">
                  <Image src="/assets/icons/tiktok.svg" alt="Tiktok Social" width={37} height={37} />
                </div>
                <div className="rounded-xl bg-lightbeige p-4">
                  <Image src="/assets/icons/instagram.svg" alt="Instagram Social" width={37} height={37} />
                </div>
              </div>
              <div className="hidden grid-cols-4 gap-2 md:grid md:grid-cols-1">
                <div className="rounded-xl bg-lightbeige p-4">
                  <Image src="/assets/icons/x.svg" alt="X Social" width={37} height={37} />
                </div>
                <div className="rounded-xl bg-lightbeige p-4">
                  <Image src="/assets/icons/youtube.svg" alt="Youtube Social" width={37} height={37} />
                </div>
                <div className=""></div>
                <div></div>
              </div>
              {/* Linear gradient overlay, absolutely on top */}
              {/* Mobile: horizontal gradient */}
              <div
                className="pointer-events-none absolute inset-0 z-10 md:hidden"
                style={{
                  background: 'linear-gradient(90deg, var(--color-secondary-isabelline) 0%, var(--color-secondary-isabellineOpacity0) 50%, var(--color-secondary-isabelline) 100%)',
                  mixBlendMode: 'normal',
                }}
              />
              {/* Desktop: vertical gradient */}
              <div
                className="pointer-events-none absolute inset-0 z-10 hidden md:block"
                style={{
                  background: 'linear-gradient(0deg, var(--color-secondary-isabelline) 0%, var(--color-secondary-isabellineOpacity0) 50%, var(--color-secondary-isabelline) 100%)',
                  mixBlendMode: 'normal',
                }}
              />
            </div>
          </AnimatedContainer>

        </div>
        {/* Conversion Effectiveness Card Desktop */}
        <AnimatedContainer direction="right" className="relative hidden w-11/12 flex-col justify-end overflow-hidden rounded-2xl border-4 border-white sm:w-full md:flex" delay={0.4}>
          <Image
            src="/assets/decor/live-decor.svg"
            alt="Live Decor"
            width={97}
            height={98}
            className="absolute top-[20px] left-[30px] z-10"
          />
          <Image
            src="/assets/decor/like-decor.svg"
            alt="Like Decor"
            width={40}
            height={33}
            className="absolute top-[165px] left-[30px] z-10"
          />
          <Image
            src="/assets/decor/results-arrow-decor.svg"
            alt="Conversion Effectiveness Decor"
            width={40}
            height={21}
            className="absolute top-[125px] right-[40px] z-10"
          />
          <div className="relative z-10 bg-linear-to-t from-secondary-black80 to-black/0 p-4">
            <div className="flex items-center">
              <Image
                src="/assets/icons/star-white.svg"
                alt="Star White"
                width={15}
                height={15}

              />
              <Image
                src="/assets/icons/star-white.svg"
                alt="Star White"
                width={15}
                height={15}

              />
              <Image
                src="/assets/icons/star-white.svg"
                alt="Star White"
                width={15}
                height={15}

              />
              <Image
                src="/assets/icons/star-white.svg"
                alt="Star White"
                width={15}
                height={15}

              />
              <Image
                src="/assets/icons/star-white.svg"
                alt="Star White"
                width={15}
                height={15}

              />
            </div>
            <AnimatedText as="h2" className="my-4 text-2xl font-medium text-white md:text-4xl" delay={0.1}>
              {t('conversion_effectiveness_card.title')}
            </AnimatedText>
            <AnimatedText as="p" className="text-base text-white md:text-lg" delay={0.2}>
              {t('conversion_effectiveness_card.description')}
            </AnimatedText>
          </div>
          <Image
            src="/assets/images/results-conversion-effectiveness.png"
            alt="conversion-card-bg"
            fill
            className="absolute inset-0 z-0 object-cover"
            priority
          />
        </AnimatedContainer>

        <div className="grid gap-2.5 md:col-span-3 md:grid-cols-3">
          {/* Retention Rate Card */}
          <AnimatedContainer direction="left" className="relative grid h-[306px] content-between items-center overflow-hidden rounded-2xl border-4  border-white bg-[#F7F7F7] p-4" delay={0.5}>
            <div className="grid justify-items-center text-center">
              <AnimatedNumber value={t('retention_rate_card.title')} className="text-6xl font-medium text-gray-900 md:text-7xl" />
              <AnimatedText as="p" className="mx-auto w-3/5 text-lg text-text-secondary" delay={0.2}>
                {t('retention_rate_card.description')}
              </AnimatedText>
            </div>
            <div className="relative flex items-end justify-center ">
              <Image
                src="/assets/images/avt5.png"
                alt="Avatar 5"
                width={36}
                height={36}
                className="absolute top-[-20px] left-1/2 -translate-x-1/2"
              />
              <Image
                src="/assets/decor/audience-retention-decor.svg"
                alt="Retention Rate Decor"
                width={268}
                height={222}
              />
              <Image
                src="/assets/decor/audience-retention-decor1.svg"
                alt="Retention Rate Decor"
                width={268}
                height={222}
                className="absolute top-[-20px] left-1/2 -translate-x-1/2"
              />
            </div>

          </AnimatedContainer>

          {/* Campaign Card */}
          <AnimatedContainer direction="right" className="relative grid h-[434px] gap-2.5 overflow-hidden rounded-2xl border-4 border-white md:col-span-2 md:h-[306px] md:grid-cols-2" delay={0.6}>
            <Image
              src="/assets/images/campaign.png"
              alt="Campaign"
              width={425}
              height={360}
              className="absolute inset-0 z-0 col-span-1 object-cover"
            />
            <div className="z-20 mt-auto grid w-full gap-3 p-5 text-left md:col-span-1 md:col-start-2 md:mt-0 md:content-center md:pr-10">
              <AnimatedText as="h2" className="text-2xl font-medium text-gray-900 md:text-4xl" delay={0.1}>
                {t('campaign_card.title')}
              </AnimatedText>
              <AnimatedText as="p" className="text-lg text-text-secondary" delay={0.2}>
                {t('campaign_card.description')}
              </AnimatedText>
            </div>
            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-[#DEE8F2] from-10% via-white via-50% to-transparent to-80% md:bg-linear-to-l" />

          </AnimatedContainer>

        </div>

      </div>
    </section>
  );
}
