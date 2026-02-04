import type { Product } from './ProductCard';
import { AnimatedContainer } from '@/components/common/AnimatedContainer';
import ProductCard from './ProductCard';

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {products?.map(product => (
          <AnimatedContainer key={product.id} direction="top" delay={0.1}>
            <ProductCard product={product} />
          </AnimatedContainer>
        ))}
      </div>
    </div>
  );
}
