import { useTranslations } from 'next-intl';
import { AnimatedContainer } from '@/components/common/AnimatedContainer';
import { AnimatedText } from '@/components/common/AnimatedText';
import { ProcessProvider } from './ProcessContext';
import ProcessStep from './ProcessStep';
import ToogleProcess from './ToogleProcess';

export default function ProcessSection() {
  const t = useTranslations('ProcessSection');

  return (
    <ProcessProvider>
      <section className="mx-5 max-w-7xl py-12 md:mx-auto md:py-16 ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-12">
          {/* Left Column */}
          <div className="col-span-2 flex flex-col">
            <div className="mb-4 flex items-center justify-center gap-2 text-center md:mb-6 md:justify-start">
              <AnimatedText as="h2" className="text-3xl font-medium text-gray-900 md:text-4xl" delay={0.1} duration={0.6}>
                {t('title')}
              </AnimatedText>
              <AnimatedText as="span" className="text-2xl md:text-3xl" delay={0.1} duration={0.6}>✨</AnimatedText>
            </div>
            <AnimatedText as="p" className="mb-6 text-center text-base text-text-secondary md:text-left" delay={0.2} duration={0.6}>
              {t('description')}
            </AnimatedText>

            {/* Toggle Buttons */}
            <AnimatedContainer direction="bottom" delay={0.3}>
              <ToogleProcess />
            </AnimatedContainer>
          </div>

          {/* Right Column - Timeline */}
          <AnimatedContainer direction="top" delay={0.4} className="col-span-3">
            <ProcessStep />
          </AnimatedContainer>
        </div>
      </section>
    </ProcessProvider>
  );
}
