gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".box", {x: 500, duration: 5})
  .to(".box", {y: 500, duration: 5})
  .to(".box", {rotate: 90, repeat: 2, ease: "back"})

tl.addLabel("label_1", 3) // tl 타임라인의 3초 지점에 'label'라는 라벨을 생성
  .play("label_1") // lable_1부터 play 

// ScrollTrigger.create({
//   animation: tl,
//   trigger: ".box",
//   start: "top center",
//   // scrub: 1,
// })