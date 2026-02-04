import type { Metadata } from 'next';
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/hero/HeroSection';
import KolSetion from '@/components/kol/KolSetion';
import PlatformSection from '@/components/platform/PlatformSection';
import ProcessSection from '@/components/process/ProcessSection';
import ProductSection from '@/components/product/ProductSection';
import ResultsSection from '@/components/results/ResultsSection';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index() {
  const locale = await getLocale();
  setRequestLocale(locale);

  return (
    <div className="px-5">
      <HeroSection />
      <ResultsSection />
      <KolSetion />
      <ProductSection />
      <PlatformSection />
      <ProcessSection />
    </div>
  );
}
