// Animation variants for Framer Motion

// Fade in animation (basic)
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 }
};

// Fade in up animation
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5 }
};

// Fade in down animation
export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

// Fade in left animation
export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.5 }
};

// Fade in right animation
export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: 0.5 }
};

// Scale animation
export const scaleAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.4 }
};

// Staggered children animation
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: { opacity: 0 }
};

// Animation for items within stagger container
export const staggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.3 }
};

// Hover animations
export const pulseHover = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 },
};

// Custom section reveal animation
export const sectionReveal = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-100px 0px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

// List item animation for staggered lists
export const listItem = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3 },
};

// Button hover animations
export const buttonHover = {
  scale: 1.05,
  backgroundColor: "#FF8533",
  transition: { duration: 0.2 },
};

// Card animation for services or features
export const cardAnimation = {
  rest: { scale: 1 },
  hover: { scale: 1.05, y: -5, transition: { duration: 0.3 } },
};

// Slide up animation with opacity
export const slideUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -30, opacity: 0 },
  transition: { duration: 0.5 }
};

// Slide down animation with opacity
export const slideDown = {
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 30, opacity: 0 },
  transition: { duration: 0.5 }
};

// Rotating icon animation
export const rotateIcon = {
  initial: { rotate: 0 },
  animate: { rotate: 360 },
  transition: { duration: 2, ease: "linear", repeat: Infinity }
};

// Bounce animation
export const bounce = {
  initial: { y: 0 },
  animate: { y: -10 },
  transition: { 
    repeat: Infinity, 
    repeatType: "reverse",
    duration: 1 
  }
};

// Shake animation (for notifications or alerts)
export const shake = {
  animate: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5 }
  }
};

// Pulse animation (for highlighting elements)
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 1.5, repeat: Infinity }
  }
};

// Highlight animation (for text or borders)
export const highlight = {
  initial: { backgroundColor: "rgba(255, 107, 0, 0)" },
  animate: { backgroundColor: "rgba(255, 107, 0, 0.2)" },
  exit: { backgroundColor: "rgba(255, 107, 0, 0)" },
  transition: { duration: 0.5 }
};

// Text wave animation for headings
export const textWave = (delay = 0) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      delay: delay,
      duration: 0.5,
      times: [0, 0.5, 1],
    }
  }
});

// Create staggered text animation
export const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};
