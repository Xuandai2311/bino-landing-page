import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function HeroButton() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'HeroSection',
  });
  return (
    <div className="mt-8 grid flex-col items-center justify-center gap-4 md:flex md:flex-row ">
      <button type="button" className="flex cursor-pointer items-center gap-8 rounded-4xl bg-primary-3 py-2 pr-2 pl-7 text-lg font-semibold text-white italic">
        {t('register_kol')}
        <Image src="/assets/icons/arrow.svg" alt="arrow-right" width={40} height={40} />
      </button>
      <button type="button" className="flex cursor-pointer items-center justify-between gap-8 rounded-4xl bg-linear-to-r from-primary-1 to-primary-2 py-2 pr-2 pl-7 text-lg font-semibold text-white italic">
        {t('find-kol')}
        <Image src="/assets/icons/arrow.svg" alt="arrow-right" width={40} height={40} />
      </button>
    </div>
  );
}
