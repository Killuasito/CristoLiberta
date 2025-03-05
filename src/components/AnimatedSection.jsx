import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  animation = "fadeUp", // Options: fadeUp, fadeIn, slideIn, scale
  direction = "up", // For slideIn: up, down, left, right
  once = true,
}) => {
  // Choose the appropriate animation variant
  let variants = sectionVariants;

  if (animation === "fadeIn") {
    variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          when: "beforeChildren",
          staggerChildren: 0.1,
          delay,
        },
      },
    };
  } else if (animation === "slideIn") {
    const directionValues = {
      up: { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
      down: { hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 } },
      left: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
      right: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    };

    variants = {
      hidden: directionValues[direction].hidden,
      visible: {
        ...directionValues[direction].visible,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          when: "beforeChildren",
          staggerChildren: 0.1,
          delay,
        },
      },
    };
  } else if (animation === "scale") {
    variants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          when: "beforeChildren",
          staggerChildren: 0.1,
          delay,
        },
      },
    };
  }

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export const AnimatedElement = ({
  children,
  className = "",
  delay = 0,
  animation = "fadeUp", // Options: fadeUp, fadeIn, fadeLeft, fadeRight, scale, custom
  customVariants = null,
  duration = 0.5,
  as = "div",
  ...props
}) => {
  // Choose the appropriate animation variant
  let variants;

  switch (animation) {
    case "fadeUp":
      variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay },
        },
      };
      break;
    case "fadeIn":
      variants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration, delay },
        },
      };
      break;
    case "fadeLeft":
      variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay },
        },
      };
      break;
    case "fadeRight":
      variants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay },
        },
      };
      break;
    case "scale":
      variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration, delay },
        },
      };
      break;
    case "custom":
      variants = customVariants;
      break;
    default:
      variants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration, delay },
        },
      };
  }

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag className={className} variants={variants} {...props}>
      {children}
    </MotionTag>
  );
};

export default AnimatedSection;
