import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
  price: string;
  commission_rate: number;
  rating: number;
};

type ProductCardProps = {
  product: Product;
};

export default async function ProductCard({ product }: ProductCardProps) {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'Products',
  });
  const renderStars = (rating: number) => {
    // Validate and clamp rating to valid range [0, 5]
    const validRating = Math.max(0, Math.min(5, Number(rating) || 0));
    const stars = [];
    const fullStars = Math.floor(validRating);
    const hasHalfStar = validRating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Image
          key={i}
          src="/assets/icons/star-active.svg"
          alt="star"
          width={16}
          height={16}
          className="h-4 w-4"
        />,
      );
    }

    if (hasHalfStar) {
      // You may want a half star icon; keeping the SVG as-is unless you have a star-half.svg
      stars.push(
        <svg
          key="half"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="half-fill-half-gold-gray" x1="0" x2="20" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#DDDDE3" />
            </linearGradient>
          </defs>
          <path
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            fill="url(#half-fill-half-gold-gray)"
          />
        </svg>,
      );
    }

    const emptyStars = Math.max(0, 5 - Math.ceil(validRating));
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Image
          key={`empty-${i}`}
          src="/assets/icons/star-unactive.svg"
          alt="star"
          width={16}
          height={16}
          className="h-4 w-4"
        />,

      );
    }

    return stars;
  };

  return (
    <div className="flex flex-col rounded-2xl">
      <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-xl bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />

      </div>
      <div className="mb-1 text-xs text-text-secondary md:text-sm">{product.category}</div>
      <h3 className="mb-2 cursor-pointer text-base font-medium text-gray-900 hover:underline md:text-lg">{product.name}</h3>
      <div className="mb-2 grid items-center gap-2 md:flex">
        <span className="text-base font-semibold text-gray-900 md:text-lg">{product.price}</span>
        {product.commission_rate && product.commission_rate > 0 && (
          <div className="flex w-fit items-center gap-1.5 rounded-full bg-pink-100 px-3 py-1">
            <Image
              src="/assets/icons/comm.svg"
              alt="commission"
              width={12}
              height={12}
            />

            <span className="text-xs font-semibold text-secondary-pink italic">
              {product.commission_rate}
              {t('product.commission_rate')}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1">{renderStars(product.rating)}</div>
    </div>
  );
}
