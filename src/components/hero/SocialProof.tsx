import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function SocialProof() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'HeroSection',
  });
  type Avatar = {
    src: string;
    alt: string;
    className: string;
    id: number;
  };

  const avatars: Avatar[] = [
    { src: '/assets/images/avt1.png', alt: 'avt1', className: 'z-6', id: 1 },
    { src: '/assets/images/avt2.png', alt: 'avt2', className: 'z-7', id: 2 },
    { src: '/assets/images/avt3.png', alt: 'avt3', className: 'z-8', id: 3 },
    { src: '/assets/images/avt4.png', alt: 'avt4', className: 'z-9', id: 4 },
    { src: '/assets/images/avt5.png', alt: 'avt5', className: 'z-10', id: 5 },
  ];

  return (
    <div className="my-10 flex items-center justify-center">
      <div className="flex">
        <div className="flex -space-x-4">
          {avatars.map(avt => (
            <Image
              key={avt.id}
              src={avt.src}
              alt={avt.alt}
              width={40}
              height={40}
              className={avt.className}
            />
          ))}
        </div>
      </div>
      <div className="ml-2.5 flex flex-col items-start">
        <div className="mb-1 flex gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Image
              key={idx}
              src="/assets/icons/star.svg"
              alt="star"
              width={12}
              height={12}
            />
          ))}
        </div>
        <p className="text-sm text-gray-500">{t('trusted_by')}</p>
      </div>
    </div>
  );
}
