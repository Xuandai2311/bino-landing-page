'use client';

import type { CSSProperties } from 'react';
import type { SetMobileMenuOpen } from './types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type LoginButtonProps = {
  setIsMobileMenuOpen?: SetMobileMenuOpen;
};

const gradientBorderStyle: CSSProperties = {
  padding: '2px',
  background: 'linear-gradient(90deg, #9a1dff, #ffb332)',
  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
  WebkitMaskComposite: 'xor',
  maskComposite: 'exclude',
};

export default function LoginButton({ setIsMobileMenuOpen }: LoginButtonProps) {
  const t = useTranslations('Header');

  return (
    <div
      className="lg:flex lg:items-center lg:gap-4 "
    >
      <Link
        href="/"
        onClick={() => setIsMobileMenuOpen?.(false)}
        className="relative rounded-3xl from-primary-1 to-primary-2 px-5 py-1.5 text-sm font-medium transition-colors duration-200 hover:bg-linear-to-r hover:text-white"
      >
        {/* Gradient border overlay */}
        <span
          className="pointer-events-none absolute inset-0 z-0 rounded-3xl"
          aria-hidden="true"
          style={gradientBorderStyle}
        />
        <span className="relative z-10">{t('open-app')}</span>
      </Link>
    </div>
  );
}
