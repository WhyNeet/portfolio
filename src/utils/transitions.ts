const appleEase = "cubic-bezier(0.32, 0.72, 0, 1)";
const duration = "600ms"; // Slower, more cinematic duration

export const customTransition = {
  forwards: {
    old: { name: "slide-out-up", duration: "500ms", easing: appleEase, fillMode: "both" },
    new: { name: "slide-in-up", duration: "600ms", easing: appleEase, fillMode: "both" },
  },
  backwards: {
    old: { name: "slide-out-down", duration: "500ms", easing: appleEase, fillMode: "both" },
    new: { name: "slide-in-down", duration: "600ms", easing: appleEase, fillMode: "both" },
  },
};


export const customTransitionInverted = {
  backwards: {
    old: { name: "slide-out-up", duration: "500ms", easing: appleEase, fillMode: "both" },
    new: { name: "slide-in-up", duration: "600ms", easing: appleEase, fillMode: "both" },
  },
  forwards: {
    old: { name: "slide-out-down", duration: "500ms", easing: appleEase, fillMode: "both" },
    new: { name: "slide-in-down", duration: "600ms", easing: appleEase, fillMode: "both" },
  },
};
