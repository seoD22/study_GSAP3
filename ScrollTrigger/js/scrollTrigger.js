gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 700,
  duration:8,
  scrollTrigger: {
    trigger: ".square",
    start: "top 60%",
    end: "top 40%",
    toggleActions: "restart pause resume complete",
    markers: true,
  },
});