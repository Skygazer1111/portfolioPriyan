import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import {
  SCROLL_VIEWPORT,
  scrollRevealHidden,
  scrollRevealTransition,
  scrollRevealVisible,
} from "../lib/motion";

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y,
  ...props
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={y !== undefined ? { ...scrollRevealHidden, y } : scrollRevealHidden}
      whileInView={scrollRevealVisible}
      viewport={SCROLL_VIEWPORT}
      transition={scrollRevealTransition(delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
