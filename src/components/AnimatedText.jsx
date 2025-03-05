import { motion } from "framer-motion";

// Animation for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: delay,
    },
  }),
};

// Animation for each character
const characterVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const highlightVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    color: "#FFFFFF",
  },
  visible: {
    opacity: 1,
    y: 0,
    color: "#FF6B00",
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

export const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  type = "heading",
  highlightWords = [],
  once = true,
}) => {
  // Split text into words and then characters with proper spacing
  const words = text.split(" ");

  const getTagByType = () => {
    switch (type) {
      case "heading":
        return "h2";
      case "subheading":
        return "h3";
      case "paragraph":
        return "p";
      default:
        return "div";
    }
  };

  const Tag = getTagByType();

  return (
    <Tag className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        custom={delay}
        style={{ display: "inline-block" }}
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            style={{ display: "inline-block", marginRight: "0.3em" }}
          >
            {word.split("").map((char, charIndex) => {
              // Check if the current word should be highlighted
              const shouldHighlight = highlightWords.includes(word);
              return (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  variants={
                    shouldHighlight ? highlightVariants : characterVariants
                  }
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export const AnimatedGradientText = ({
  text,
  className = "",
  delay = 0,
  gradientFrom = "#FF6B00",
  gradientTo = "#FF8533",
  once = true,
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ delay, duration: 0.5 }}
      className={className}
      style={{
        background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        display: "inline-block",
      }}
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;
