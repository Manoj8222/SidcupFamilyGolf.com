var crsr = document.querySelector("#cursor");
var crsrblr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x - 250 + "px";
  crsr.style.top = dets.y - 250 + "px";
  crsrblr.style.left = dets.x - 12 + "px";
  crsrblr.style.top = dets.y - 12 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  console.log(elem);
  elem.addEventListener("mouseenter", function () {
    crsrblr.style.transform = "scale(4)";
    crsrblr.style.border = "1px solid white";
    crsrblr.style.backgroundColor = "transparent";
  });
});
h4all.forEach(function (elem) {
  elem.addEventListener("mouseleave", function () {
    crsrblr.style.transform = "scale(1)";
    crsrblr.style.border = "1px solid #95c11e";
    crsrblr.style.backgroundColor = "#95c11e";
  });
});
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});

gsap.from("#page-2-part1 img,#page-2-part1", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#page-2-part1",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 58%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 58%",
    scrub: true,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 5,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 5,
  },
});

gsap.to("#page4>h1", {
  y: -50,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 70%",
    scrub: true,
  },
});
