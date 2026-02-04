'use client';

import { animate, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type AnimatedNumberProps = {
  value: string;
  className?: string;
};

export function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  const parseValue = (val: string): { number: number; suffix: string } => {
    // Match số và phần suffix (có thể là chữ cái, %, +, hoặc kết hợp)
    const match = val.match(/^(\d+)([A-Z%+\-]*)$/i);
    if (match && match[1]) {
      return {
        number: Number.parseInt(match[1], 10),
        suffix: match[2] || '',
      };
    }
    return { number: 0, suffix: '' };
  };

  const { number: targetNumber, suffix } = parseValue(value);
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetNumber, {
        duration: 2,
        ease: 'easeOut',
      });
      return () => controls.stop();
    } else {
      return undefined;
    }
  }, [isInView, count, targetNumber]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <h2 ref={ref} className={className}>
      {displayValue}
      {suffix}
    </h2>
  );
}
