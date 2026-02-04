import type { Product } from './ProductCard';
import { getLocale, getTranslations } from 'next-intl/server';
import { AnimatedContainer } from '@/components/common/AnimatedContainer';
import { AnimatedText } from '@/components/common/AnimatedText';
import ProductButton from './ProductButton';
import ProductGrid from './ProductGrid';
// Product data
const productData: Product[] = [
  {
    id: '1',
    name: 'Prada Galleria Saffiano leather',
    image: '/assets/images/product1.png',
    category: 'Thời trang',
    price: '12.495.000₫',
    commission_rate: 30,
    rating: 3.5,
  },
  {
    id: '2',
    name: 'Prada Galleria Saffiano leather',
    image: '/assets/images/product2.png',
    category: 'Thời trang',
    price: '12.495.000₫',
    commission_rate: 20,
    rating: 4,
  },
  {
    id: '3',
    name: 'Prada Galleria Saffiano leather',
    image: '/assets/images/product3.png',
    category: 'Thời trang',
    price: '12.495.000₫',
    commission_rate: 20,
    rating: 4.5,
  },
  {
    id: '4',
    name: 'Prada Galleria Saffiano leather',
    image: '/assets/images/product4.png',
    category: 'Thời trang',
    price: '12.495.000₫',
    commission_rate: 30,
    rating: 4,
  },
  {
    id: '5',
    name: 'Prada Galleria Saffiano leather',
    image: '/assets/images/product5.png',
    category: 'Thời trang',
    price: '12.495.000₫',
    commission_rate: 30,
    rating: 4.5,
  },
  {
    id: '6',
    name: 'Prada Galleria Saffiano leather',
    image: '/assets/images/product6.png',
    category: 'Thời trang',
    price: '12.495.000₫',
    commission_rate: 20,
    rating: 4,
  },
  {
    id: '7',
    name: 'Prada Galleria Saffiano leather',
    image: '/assets/images/product7.png',
    category: 'Thời trang',
    price: '12.495.000₫',
    commission_rate: 20,
    rating: 4,
  },
  {
    id: '8',
    name: 'Prada Galleria Saffiano leather',
    image: '/assets/images/product8.png',
    category: 'Thời trang',
    price: '12.495.000₫',
    commission_rate: 30,
    rating: 4,
  },
];

export default async function ProductSection() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'Products',
  });

  return (
    <section id="products-section" className="mx-5 max-w-7xl py-12 md:mx-auto md:py-16">
      <div className="mb-8 w-full md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="mb-8 flex flex-1 flex-col items-center text-center md:mb-0 md:items-start md:text-left">
            <AnimatedText as="h2" className="w-3/4 text-3xl font-medium text-gray-900 md:text-5xl" delay={0.1}>
              {t('title')}
            </AnimatedText>
            <AnimatedText as="p" className="mt-2 w-full text-base text-text-secondary md:w-auto md:text-lg" delay={0.2}>
              {t('description')}
            </AnimatedText>
          </div>
          {/* Button - Hidden on mobile, shown on desktop */}
          <AnimatedContainer direction="bottom" delay={0.4} className="hidden md:block">
            <ProductButton />
          </AnimatedContainer>
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid products={productData} />

      {/* Button - Mobile only, centered below grid */}
      <div className="mt-8 flex justify-center md:hidden">
        <ProductButton />
      </div>
    </section>
  );
}
