document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const expandBg = document.querySelector(".expand-bg-img");
  const toSide = document.querySelector(".to-side");
  const globalSide = document.querySelector(".global-side");
  const bgImg = expandBg.querySelector(".nitex-bg-img");
  const heading = document.querySelector(".nitex-hero-heading");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".nitex-hero-wrapper",
      start: "top top",
      end: "bottom bottom", // triggers based entirely on the wrapper's scrolling distance
      scrub: 1, // smooth easing scrub, purely for animation (wix-like)
      markers: false,
    },
  });
  // Normalize starting state, avoiding CSS matrix parsing issues
  // Scale the container up, move to perfect center
  tl.fromTo(
    expandBg,
    { xPercent: -50, yPercent: -50, x: 0, y: 0, scale: 0.03, opacity: 1 },
    { scale: 1.01, ease: "power2.out" },
    0,
  );

  // Scale the inner image down inversely to keep it sharp
  tl.fromTo(bgImg, { scale: 33.33 }, { scale: 1, ease: "power2.out" }, 0);

  // Move the words purely using transform (x)
  tl.fromTo(toSide, { x: -50 }, { x: 0, ease: "power2.out" }, 0.1);
  tl.fromTo(globalSide, { x: 50 }, { x: 0, ease: "power2.out" }, 0.1);

  tl.to(heading, { color: "#fff", ease: "power2.inOut" }, 0.15);
});
