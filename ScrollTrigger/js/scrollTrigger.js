gsap.registerPlugin(ScrollTrigger);

// gsap.to(".box", {
//   x: 500,
//   duration: 2,
// });
// gsap.to(".box", {
//   y: 200,
//   duration: 3,
//   delay: 2,
// });
// gsap.to(".box", {
//   x: 0,
//   duration: 2,
//   delay: 5,
// });

// 위 내용을 아래처럼 정리 가능

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 1
  }
});

tl.to(".box", {x: 500, duration: 2,})
  .to(".box", {y: 200, duration: 3,})
  .to(".box", {x: 0, duration: 3,})