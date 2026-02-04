import { getLocale, getTranslations } from 'next-intl/server';
import { AnimatedContainer } from '@/components/common/AnimatedContainer';
import { AnimatedText } from '@/components/common/AnimatedText';
import KolButton from './KolButton';
import KolCarousel from './KolCarousel';

export type KolCard = {
  id: string;
  name: string;
  image: string;
  rank: 'diamond' | 'gold' | 'silver';
  categories: string[];
  badge: string;
  additionalCategories?: number;
  operatingArea: string;
  followerCount: string;
  socialStats: {
    tiktok?: string;
    instagram?: string;
    facebook?: string;
  };
};

// KOL data
const kolData: KolCard[] = [
  {
    id: '1',
    name: 'Võ Hà Linh',
    image: '/assets/images/vohalinh.png',
    rank: 'diamond',
    categories: ['FOOD', 'TRAVEL', 'BABY'],
    badge: 'KOL',
    additionalCategories: 3,
    operatingArea: 'south',
    followerCount: '1m+',
    socialStats: {
      tiktok: '3.6TR',
      instagram: '3.6TR',
      facebook: '3.6TR',
    },
  },
  {
    id: '2',
    name: 'Ninh Tito',
    image: '/assets/images/ninhtito.png',
    rank: 'gold',
    categories: ['FOOD', 'TRAVEL', 'BABY'],
    badge: 'KOL',
    additionalCategories: 3,
    operatingArea: 'north',
    followerCount: '500k-1m',
    socialStats: {
      tiktok: '3.6TR',
      instagram: '3.6TR',
      facebook: '3.6TR',
    },
  },
  {
    id: '3',
    name: 'Bé Duy',
    image: '/assets/images/beduy.png',
    rank: 'silver',
    categories: ['FOOD', 'TRAVEL', 'BABY'],
    badge: 'MC',
    additionalCategories: 3,
    operatingArea: 'central',
    followerCount: '100k-500k',
    socialStats: {
      tiktok: '3.6TR',
      instagram: '3.6TR',
      facebook: '3.6TR',
    },
  },
  {
    id: '4',
    name: 'Khoai lang thang',
    image: '/assets/images/khoailangthang.png',
    rank: 'gold',
    categories: ['FOOD', 'TRAVEL', 'BABY'],
    badge: 'KOC',
    additionalCategories: 3,
    operatingArea: 'south',
    followerCount: '500k-1m',
    socialStats: {
      tiktok: '3.6TR',
      instagram: '3.6TR',
      facebook: '3.6TR',
    },
  },
];

export default async function KolSetion() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'KOL',
  });

  return (
    <section id="kol-section" className="py-12 md:py-16">
      <div className="mx-auto mb-8 max-w-7xl px-4 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <AnimatedContainer className="mb-8 flex flex-1 flex-col items-center text-center md:mb-0 md:items-start md:text-left" delay={0.1}>
            <AnimatedText as="h2" className="w-3/4 text-3xl font-medium text-gray-900 md:text-5xl" delay={0.1}>
              {t('title')}
            </AnimatedText>
            <AnimatedText as="p" className="mt-2 w-full text-base text-text-secondary md:w-auto md:text-lg" delay={0.2}>
              {t('description')}
            </AnimatedText>
          </AnimatedContainer>
          {/* Button - Hidden on mobile, shown on desktop */}
          <AnimatedContainer direction="bottom" delay={0.3} className="hidden md:block">
            <KolButton />
          </AnimatedContainer>
        </div>
      </div>

      {/* Carousel */}
      <AnimatedContainer className="overflow-hidden" delay={0.3}>
        <KolCarousel kols={kolData} />
      </AnimatedContainer>

      {/* Button - Mobile only, centered below carousel */}
      <div className="mx-auto mt-8 flex max-w-7xl justify-center px-4 md:hidden">
        <KolButton />
      </div>
    </section>
  );
}
