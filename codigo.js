$(document).ready(function () {
  $("main h1 span").lettering();

  var tl = gsap.timeline();

  tl.from("main h1 span", {
    
    x: -20,
    duration: 1,
    opacity: 1,
    opacity: 0,
    stagger: .1
  });
});
