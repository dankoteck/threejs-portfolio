import { Variants } from "framer-motion";

export function verticalVariants(): Variants {
  return {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };
}

export function horizontalVariants(): Variants {
  return {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1.25,
      },
    },
  };
}
