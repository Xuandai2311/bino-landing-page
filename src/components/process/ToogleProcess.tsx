'use client';

import { useTranslations } from 'next-intl';
import { useProcessType } from './ProcessContext';

type ToogleProcessProps = {
  isMobile?: boolean;
};

export default function ToogleProcess({ isMobile = false }: ToogleProcessProps) {
  const t = useTranslations('ProcessSection');
  const { processType, setProcessType } = useProcessType();

  return (
    <div
      className={`mx-auto mb-8 inline-flex w-fit rounded-full bg-[#F9F5FF] p-2 md:mx-0 ${isMobile ? 'gap-1' : 'gap-2'
      }`}
    >
      <button
        type="button"
        onClick={() => setProcessType('kol')}
        className={`cursor-pointer rounded-4xl px-2.5 py-1.5 text-xs font-medium whitespace-nowrap md:text-sm ${processType === 'kol'
          ? 'bg-white text-primary-1'
          : 'bg-transparent'
        }`}
      >
        {t('toggle_kol')}
      </button>
      <button
        type="button"
        onClick={() => setProcessType('business')}
        className={`cursor-pointer rounded-4xl px-2.5 py-1.5 text-xs font-medium whitespace-nowrap md:text-sm ${processType === 'business'
          ? 'bg-white text-primary-1'
          : 'bg-transparent'
        }`}
      >
        {t('toggle_business')}
      </button>
    </div>
  );
}
