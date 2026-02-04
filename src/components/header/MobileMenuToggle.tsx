'use client';

import type { MenuItem } from './types';
import Image from 'next/image';
import { useReducer } from 'react';
import MobileMenu from './MobileMenu';

function reducer(state: boolean, action: string) {
  switch (action) {
    case 'OPEN': return true;
    case 'CLOSE': return false;
    case 'TOGGLE': return !state;
    default: return state;
  }
}

export default function MobileMenuToggle({ menuItems }: { menuItems: MenuItem[] }) {
  const [isOpen, dispatch] = useReducer(reducer, false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:ring-2 focus:ring-primary-1 focus:outline-none focus:ring-inset"
        aria-controls="mobile-menu"
        onClick={() => dispatch('TOGGLE')}
      >
        {!isOpen
          ? (
              <Image src="/assets/icons/bars.svg" alt="bars" width={24} height={24} />
            )
          : (
              <Image src="/assets/icons/close.svg" alt="close" width={24} height={24} />
            )}
      </button>
      <MobileMenu isMobileMenuOpen={isOpen} setIsMobileMenuOpen={() => dispatch('CLOSE')} menuItems={menuItems} />
    </div>
  );
}
