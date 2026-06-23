export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export const SCROLL_VIEWPORT = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -64px 0px",
} as const;

export const scrollRevealTransition = (delay = 0) => ({
  duration: 0.5,
  delay,
  ease: MOTION_EASE,
});

export const scrollRevealHidden = {
  opacity: 0,
  y: 28,
};

export const scrollRevealVisible = {
  opacity: 1,
  y: 0,
};
