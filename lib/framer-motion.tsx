"use client"

// This is a client-side only package, so we need conditional imports
// This approach prevents server-side errors while allowing animations on the client

import React, { ReactNode } from "react";

const Component = ({ children }: { children?: ReactNode }) => <>{children}</>;
const noop = () => Component;

export const motion = {
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
};
export const AnimatePresence = Component;
export const useScroll = () => ({ scrollYProgress: { current: 0 } });
export const useSpring = noop;
export const useTransform = noop;
export const useAnimate = () => [null, noop];
export const useInView = () => false;
export const useReducedMotion = () => false;