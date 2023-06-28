gsap.registerPlugin(ScrollTrigger);

gsap.to(".a", {
  scrollTrigger: {
    trigger: ".a",
    toggleActions: "restart none none none",
    markers: true,
  },
  x:400,
  rotation: 360,
  duration:3
});
