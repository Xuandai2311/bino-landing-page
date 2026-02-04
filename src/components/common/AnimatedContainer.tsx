'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type AnimatedContainerProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  direction?: 'left' | 'right' | 'top' | 'bottom' | 'none';
};

export function AnimatedContainer({
  children,
  className = '',
  delay = 0,
  staggerChildren = 0.1,
  direction = 'none',
}: AnimatedContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Tính toán giá trị x và y ban đầu dựa trên direction
  const getInitialOffset = () => {
    switch (direction) {
      case 'left':
        return { x: -50, y: 0 };
      case 'right':
        return { x: 50, y: 0 };
      case 'top':
        return { x: 0, y: -50 };
      case 'bottom':
        return { x: 0, y: 50 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: initialOffset.x,
      y: initialOffset.y,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        staggerChildren,
        delayChildren: delay,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
