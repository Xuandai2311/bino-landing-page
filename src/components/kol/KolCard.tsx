import Image from 'next/image';

export type KOLCardProps = {
  name: string;
  image: string;
  rank: 'diamond' | 'gold' | 'silver';
  badge: string;
  categories: string[];
  additionalCategories?: number;
  socialStats: {
    tiktok?: string;
    instagram?: string;
    facebook?: string;
  };
  className?: string;
};

export default function KOLCard({
  name,
  image,
  rank,
  badge,
  categories,
  additionalCategories = 0,
  socialStats,
}: KOLCardProps) {
  const rankIcons: Record<'diamond' | 'gold' | 'silver', string> = {
    diamond: '/assets/images/diamond-rank.png',
    gold: '/assets/images/gold-rank.png',
    silver: '/assets/images/silver-rank.png',
  };

  // Validate rank and get icon with fallback
  const rankIcon = rankIcons[rank] || rankIcons.silver;

  return (
    <div className="max-w-sm overflow-hidden rounded-2xl border-none bg-white shadow-none">
      {/* Image Section with Badge */}
      <div className="relative p-2">
        <Image
          src={image}
          alt={name}
          width={288}
          height={270}
          className="aspect-square w-full rounded-2xl object-cover"
        />
        {/* Rank Badge - Top Left */}
        <div className="absolute top-3 left-3">
          <img src={rankIcon} alt={rank} />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-2 text-center">
        {/* Name and KOL Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className="rounded-sm bg-[#9A1DFF33] px-2.5 py-1 text-xs font-medium text-gray-700">
            {badge}
          </span>
        </div>
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 text-sm font-medium text-gray-500">
          {categories?.map(cat => (
            <span key={cat}>{cat.toUpperCase()}</span>
          ))}
          {additionalCategories > 0 && (
            <span>{`+${additionalCategories}`}</span>
          )}
        </div>

        {/* Social Media Stats */}
        <div className="flex justify-center gap-6 py-4">
          {socialStats.tiktok && (
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/assets/icons/tiktok.svg"
                alt="TikTok"
                width={32}
                height={32}
              />
              <span className="text-xs font-medium text-gray-900">
                TIKTOK
              </span>
              <span className="text-xs font-normal text-gray-400">
                {socialStats.tiktok}
              </span>
            </div>
          )}
          {socialStats.instagram && (
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/assets/icons/instagram.svg"
                alt="Instagram"
                width={32}
                height={32}
              />
              <span className="text-xs font-medium text-gray-900">
                INSTAGRAM
              </span>
              <span className="text-xs font-normal text-gray-400">
                {socialStats.instagram}
              </span>
            </div>
          )}
          {socialStats.facebook && (
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/assets/icons/facebook.svg"
                alt="Facebook"
                width={32}
                height={32}
              />
              <span className="text-xs font-medium text-gray-900">
                FACEBOOK
              </span>
              <span className="text-xs font-normal text-gray-400">
                {socialStats.facebook}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
