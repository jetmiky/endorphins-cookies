import Lenis from "lenis";
import ScrollReveal from "scrollreveal";

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Initialize ScrollReveal
const sr = ScrollReveal({
  duration: 500,
  easing: "ease-in-out",
  reset: true,
  mobile: true,
  opacity: 0.01,
});

// Reveal elements on scroll
sr.reveal(".animate-fade", { origin: "top", distance: "20px" });
sr.reveal(".animate-fade-up", { origin: "bottom", distance: "20px" });
sr.reveal(".animate-fade-left", {
  origin: "right",
  distance: "30px",
  delay: 500,
});
sr.reveal(".animate-fade-right", {
  origin: "left",
  distance: "30px",
  delay: 300,
});

sr.reveal("#hero > div:first-child > div > span", {
  origin: "bottom",
  distance: "20px",
  interval: 250,
});

sr.reveal("#hero > div:first-child > *:not(div)", {
  origin: "bottom",
  distance: "30px",
  interval: 300,
  delay: 500,
});

sr.reveal("#js-usp > div", {
  origin: "bottom",
  distance: "30px",
  interval: 300,
  delay: 300,
});

sr.reveal("#js-cookies > div", {
  origin: "bottom",
  distance: "30px",
  interval: 300,
  delay: 300,
});

sr.reveal("#js-hampers > div", {
  origin: "bottom",
  distance: "30px",
  interval: 300,
  delay: 300,
});

// Subscription form
document.getElementById("subscription-form").addEventListener("submit", function (event) {
  event.preventDefault();
  window.alert("Terima kasih!");

  this.reset();
});
