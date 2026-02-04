'use client';

import type { HTMLMotionProps } from 'framer-motion';
import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

type AnimatedTextProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
};

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  as: Component = 'div',
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const motionProps: HTMLMotionProps<'div'> = {
    ref,
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
    variants,
    className,
  };

  switch (Component) {
    case 'h1':
      return <motion.h1 {...motionProps}>{children}</motion.h1>;
    case 'h2':
      return <motion.h2 {...motionProps}>{children}</motion.h2>;
    case 'h3':
      return <motion.h3 {...motionProps}>{children}</motion.h3>;
    case 'p':
      return <motion.p {...motionProps}>{children}</motion.p>;
    case 'span':
      return <motion.span {...motionProps}>{children}</motion.span>;
    default:
      return <motion.div {...motionProps}>{children}</motion.div>;
  }
}
