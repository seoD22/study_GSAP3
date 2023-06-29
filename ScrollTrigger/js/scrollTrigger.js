gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 700,
  duration:8,
  scrollTrigger: {
    trigger: ".square2",
    start: "top 80%",
    end: "top 30%",
    scrub: 4,
    toggleActions: "restart none none none",
    pin: ".square",
    pinSpacing: true,
    markers: true,
  },
});