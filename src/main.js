import Lenis from "lenis";
import ScrollReveal from "scrollreveal";

// Mobile Navbar
const navToggler = document.getElementById("js-mobile-menu-button");
if (navToggler) {
  navToggler.addEventListener("click", function () {
    const navbarCollapse = document.getElementById("js-nav-menu");
    navbarCollapse.classList.toggle("show");

    if (navbarCollapse.classList.contains("show")) {
      navToggler.setAttribute("aria-expanded", "true");
    } else {
      navToggler.setAttribute("aria-expanded", "false");
    }
  });
}

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

sr.reveal("#hero > div:first-child > h1 > span", {
  origin: "bottom",
  distance: "20px",
  interval: 250,
});

sr.reveal("#hero > div:first-child > *:not(h1)", {
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

sr.reveal("#js-members > div", {
  origin: "bottom",
  distance: "30px",
  interval: 300,
  delay: 300,
});

// Subscription form
const subscriptionForm = document.getElementById("subscription-form");
if (subscriptionForm) {
  subscriptionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    window.alert("Terima kasih!");

    this.reset();
  });
}

// Disclaimer indicator
const disclaimerElement = document.getElementById("js-disclaimer");
if (disclaimerElement) {
  const btn = disclaimerElement.querySelector("button");
  btn.addEventListener("click", () => {
    disclaimerElement.style.display = "none";
  });
}
