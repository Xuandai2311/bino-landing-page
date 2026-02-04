'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type AnimatedDecorProps = {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
  sensitivity?: number; // Độ nhạy của parallax effect
};

export function AnimatedDecor({
  children,
  className = '',
  direction = 'left',
  delay = 0,
  sensitivity = 15, // Mặc định 15px movement
}: AnimatedDecorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  // Motion values với spring để tạo hiệu ứng mượt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  // Spring animations cho smooth movement
  const springConfig = { damping: 25, stiffness: 200 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const scaleSpring = useSpring(scale, springConfig);

  // Tính toán giá trị ban đầu dựa trên direction
  const getInitialOffset = () => {
    switch (direction) {
      case 'left':
        return { x: -100, y: 0 };
      case 'right':
        return { x: 100, y: 0 };
      case 'top':
        return { x: 0, y: -100 };
      case 'bottom':
        return { x: 0, y: 100 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialOffset();
  const entranceDuration = 0.6;

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Tính khoảng cách từ center của element đến mouse
      const deltaX = (e.clientX - centerX) / window.innerWidth;
      const deltaY = (e.clientY - centerY) / window.innerHeight;

      // Cập nhật position với parallax effect ngược (chuột trái -> element phải)
      x.set(-deltaX * sensitivity);
      y.set(-deltaY * sensitivity);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [sensitivity, x, y]);

  // Entrance animation
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        x.set(0);
        y.set(0);
        scale.set(1);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isInView, delay, x, y, scale]);

  // Hover effect
  useEffect(() => {
    if (isHovered) {
      scale.set(1.15);
    } else {
      scale.set(1);
    }
  }, [isHovered, scale]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.5,
        x: initialOffset.x,
        y: initialOffset.y,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              scale: 0.5,
              x: initialOffset.x,
              y: initialOffset.y,
            }
      }
      transition={{
        delay,
        duration: entranceDuration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        x: xSpring,
        y: ySpring,
        scale: scaleSpring,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        // Reset về vị trí ban đầu khi rời chuột
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
