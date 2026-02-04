'use client';

import type { KolCard } from './KolSetion';
import { useEffect, useRef, useState } from 'react';
import KOLCard from './KolCard';

type KolCarouselProps = {
  kols: KolCard[];
};

export default function KolCarousel({ kols }: KolCarouselProps) {
  // Duplicate the KOLs array multiple times to create seamless infinite scroll
  const duplicatedKols = kols ? [...kols, ...kols, ...kols] : [];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [animationPaused, setAnimationPaused] = useState(false);

  useEffect(() => {
    if (innerContainerRef.current) {
      if (animationPaused) {
        innerContainerRef.current.style.animationPlayState = 'paused';
      } else {
        innerContainerRef.current.style.animationPlayState = 'running';
      }
    }
  }, [animationPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) {
      return;
    }
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setAnimationPaused(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) {
      return;
    }
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Tăng tốc độ scroll
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setAnimationPaused(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setAnimationPaused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!scrollContainerRef.current) {
      return;
    }
    if (e.key === 'ArrowLeft') {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    } else if (e.key === 'ArrowRight') {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      ref={scrollContainerRef}
      role="group"
      aria-label="KOL carousel"
      className="scrollbar-hide relative w-full cursor-grab overflow-x-auto scroll-smooth focus:ring-2 focus:ring-offset-2 focus:outline-none active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={innerContainerRef}
        className="animate-scroll flex gap-4 pl-4 select-none md:pl-8"
        style={{ userSelect: 'none' }}
      >
        {duplicatedKols.map((kol, index) => (
          <div
            key={`${kol.id}-${index}`}
            className="shrink-0"
          >
            <KOLCard
              name={kol.name}
              image={kol.image}
              rank={kol.rank}
              badge={kol.badge}
              categories={kol.categories}
              additionalCategories={kol.additionalCategories}
              socialStats={kol.socialStats}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
