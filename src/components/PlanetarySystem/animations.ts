import type { Transition, Variants } from 'framer-motion';

// ── Spring presets ──────────────────────────────────

/** Interactive elements: buttons, panels, clicks */
export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

/** View transitions, center elements */
export const springSmooth: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 28,
  mass: 1,
};

/** Decorative: orbit rings, tagline */
export const springGentle: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 24,
  mass: 1,
};

// ── View transition variants ────────────────────────

export const viewTransition: Transition = {
  type: 'spring',
  stiffness: 350,
  damping: 32,
  mass: 0.9,
};

export const solarSystemVariants: Variants = {
  initial: { opacity: 0, scale: 1.04 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const planetDetailVariants: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

// ── Element variants ────────────────────────────────

export const centerElementVariants: Variants = {
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.6 },
};

export const planetNodeVariants = (delay: number): Variants => ({
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { ...springSnappy, delay },
  },
  exit: {
    opacity: 0,
    scale: 0.3,
    transition: { duration: 0.15 },
  },
});

export const satelliteNodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springSnappy,
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.12 },
  },
};

export const satelliteContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

export const panelSlideVariants: Variants = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
};

export const backButtonVariants: Variants = {
  initial: { opacity: 0, x: -16 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
};

export const infoPanelVariants: Variants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 40, opacity: 0 },
};

// ── Orbit ───────────────────────────────────────────

export const ORBIT_PERIOD_SECONDS = 45;

/** Zoom in/out of planet focus */
export const zoomSpring: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 28,
  mass: 1.1,
};
