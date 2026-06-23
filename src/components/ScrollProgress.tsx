import { motion, useReducedMotion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-14 left-0 right-0 z-[45] h-[2px] origin-left bg-accent will-change-transform"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
