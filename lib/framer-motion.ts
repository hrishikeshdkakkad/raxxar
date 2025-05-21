"use client"

// This is a client-side only package, so we need conditional imports
// This approach prevents server-side errors while allowing animations on the client

import { useEffect, useState } from 'react';

// Create a placeholder API that matches framer-motion's most commonly used features
const createPlaceholderAPI = () => {
  const Component = ({ children }: { children: React.ReactNode }) => <>{children}</>;
  const noop = () => Component;
  
  return {
    motion: {
      div: Component,
      span: Component,
      button: Component,
      a: Component,
      ul: Component,
      li: Component,
      p: Component,
      h1: Component,
      h2: Component,
      h3: Component,
      h4: Component,
      h5: Component,
      h6: Component,
      img: Component,
      svg: Component,
      path: Component,
    },
    AnimatePresence: Component,
    useScroll: () => ({ scrollYProgress: { current: 0 } }),
    useSpring: noop,
    useTransform: noop,
    useAnimate: () => [null, noop],
    useInView: () => false,
    useReducedMotion: () => false,
  };
};

// Client-side code with framer-motion
let framerMotion = createPlaceholderAPI();

// Use Effect to load the actual library only on the client
const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

const useFramerMotion = () => {
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (hasMounted) {
      import('framer-motion').then((mod) => {
        framerMotion = mod;
      });
    }
  }, [hasMounted]);
};

useFramerMotion();

// Export the placeholder or actual API based on environment
export const {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useAnimate,
  useInView,
  useReducedMotion,
} = framerMotion;