export const animations = {
  button: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  },

  card: {
    whileHover: {
      y: -4,
      scale: 1.01,
    },
    transition: { duration: 0.2 },
  },

  fadeUp: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.35 },
  },
};