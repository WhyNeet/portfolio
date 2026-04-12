const appleEase = "cubic-bezier(0.32, 0.72, 0, 1)";
const duration = "350ms";

export const customTransition = {
  forwards: {
    old: {
      name: "slide-out-back",
      duration: duration,
      easing: appleEase,
      fillMode: "both",
    },
    new: {
      name: "slide-in-up",
      duration: duration,
      easing: appleEase,
      fillMode: "both",
    },
  },
  backwards: {
    old: {
      name: "slide-out-down",
      duration: duration,
      easing: appleEase,
      fillMode: "both",
    },
    new: {
      name: "slide-in-front",
      duration: duration,
      easing: appleEase,
      fillMode: "both",
    },
  },
};
