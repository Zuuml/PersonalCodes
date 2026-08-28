const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = mobileMenu.querySelectorAll("a");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

function toggleMenu(forceClose = false) {
  const shouldOpen = forceClose ? false : !mobileMenu.classList.contains("open");
  mobileMenu.classList.toggle("open", shouldOpen);
  menuBtn.classList.toggle("active", shouldOpen);
  menuBtn.setAttribute("aria-expanded", String(shouldOpen));
  document.body.classList.toggle("menu-open", shouldOpen);
}

menuBtn.addEventListener("click", () => toggleMenu());
menuLinks.forEach(link => link.addEventListener("click", () => toggleMenu(true)));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const parallax = document.querySelector(".parallax");
let ticking = false;

function updateParallax() {
  if (!parallax) return;
  const rect = parallax.parentElement.getBoundingClientRect();
  const viewport = window.innerHeight;
  if (rect.bottom > 0 && rect.top < viewport) {
    const progress = (viewport - rect.top) / (viewport + rect.height);
    parallax.style.transform = `translateY(${(progress - 0.5) * 55}px) scale(1.08)`;
  }
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}, { passive: true });

document.getElementById("year").textContent = new Date().getFullYear();
updateParallax();
