const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const progress = document.getElementById("pageProgress");
const glow = document.getElementById("cursorGlow");
const heroBg = document.getElementById("heroBg");
const mobileLinks = mobileMenu.querySelectorAll("a");

function updateScrollUI() {
  const y = window.scrollY;
  header.classList.toggle("scrolled",y>30);
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  progress.style.width=`${max>0?(y/max)*100:0}%`;

  if (heroBg && window.innerWidth > 820) {
    heroBg.style.transform=`translateY(${Math.min(y*.08,45)}px) scale(1.01)`;
  }
}

window.addEventListener("scroll",updateScrollUI,{passive:true});
updateScrollUI();

function toggleMenu(forceClose = false) {
  const open=forceClose?false:!mobileMenu.classList.contains("open");
  mobileMenu.classList.toggle("open",open);
  menuBtn.classList.toggle("active",open);
  menuBtn.setAttribute("aria-expanded",String(open));
  document.body.classList.toggle("menu-open",open);
}

menuBtn.addEventListener("click",() => toggleMenu());
mobileLinks.forEach(link => link.addEventListener("click",() => toggleMenu(true)));

const revealObserver=new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const parallax = document.querySelector(".parallax");
let ticking = false;

function updateParallax() {
  if (!parallax || window.innerWidth <= 820) {
    ticking = false;
    return;
  }

  const rect = parallax.parentElement.getBoundingClientRect();
  const viewport = window.innerHeight;

  if (rect.bottom > 0 && rect.top < viewport) {
    const p = (viewport - rect.top) / (viewport + rect.height);
    parallax.style.transform=`translateY(${(p-.5)*60}px) scale(1.08)`;
  }
  ticking = false;
}

window.addEventListener("scroll",() => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking=true;
  }
},{passive:true});

if (window.matchMedia("(hover:hover) and (pointer:fine)").matches){
  window.addEventListener("pointermove",e => {
    glow.style.left=`${e.clientX}px`;
    glow.style.top=`${e.clientY}px`;
  },{passive:true});
}

document.querySelectorAll(".magnetic").forEach(el => {
  el.addEventListener("mousemove",e => {
    if (window.innerWidth <= 820) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform=`translate(${x*.12}px,${y*.12}px)`;
  });

  el.addEventListener("mouseleave",() => {
    el.style.transform="";
  });
 });

document.getElementById("year").textContent=new Date().getFullYear();
updateParallax();
