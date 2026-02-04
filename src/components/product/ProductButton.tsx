'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ProductButton() {
  const t = useTranslations('Products');

  return (
    <button
      type="button"
      className="flex cursor-pointer items-center gap-1 rounded-4xl bg-primary-3 py-2 pr-2 pl-7 text-lg font-semibold text-white"
    >
      {t.rich('more_product', {
        count: (chunks: React.ReactNode) => (
          <span className="bg-linear-to-r from-primary-1 to-[#cc6898] bg-clip-text text-transparent">
            {chunks}
          </span>
        ),
      })}
      <Image
        src="/assets/icons/arrow.svg"
        alt="Arrow"
        width={40}
        height={40}
        className="ml-7"
      />
    </button>
  );
}
