document.addEventListener("DOMContentLoaded", () => {
  // Typewriter
  new Typewriter(
    "typewriter",
    [
      "I craft futuristic UI.",
      "I animate with purpose.",
      "I code, refine, repeat.",
    ],
    { delay: 50, pause: 1400 }
  );

  // Nav toggle mobile
  const navToggle = document.getElementById("navToggleBtn");
  const siteNav = document.getElementById("siteNav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      siteNav.classList.toggle("open");
      siteNav.style.display = siteNav.classList.contains("open") ? "flex" : "";
    });
  }

  // Smooth scroll
  document.querySelectorAll(".site-nav a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const href = a.getAttribute("href");
      const target = document.querySelector(href);
      if (target) {
        const offset = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
      if (siteNav && siteNav.classList.contains("open")) {
        siteNav.classList.remove("open");
        siteNav.style.display = "";
      }
    });
  });

  // Scroll spy
  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...document.querySelectorAll(".site-nav a")];
  function onScrollSpy() {
    const y = window.scrollY + 140;
    let cur = sections[0];
    for (const sec of sections) {
      if (y >= sec.offsetTop) cur = sec;
      else break;
    }
    navLinks.forEach((l) => l.classList.remove("active"));
    const link = navLinks.find((l) => l.getAttribute("href") === "#" + cur.id);
    if (link) link.classList.add("active");
  }
  window.addEventListener("scroll", onScrollSpy);
  onScrollSpy();

  // Contact form demo
  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value || "bạn";
      const email = document.getElementById("email").value || "";
      if (!email.includes("@")) {
        formMsg.textContent = "Email không hợp lệ";
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = "Đang gửi...";
      setTimeout(() => {
        formMsg.textContent = `Cảm ơn ${name}, tin nhắn đã gửi (demo).`;
        btn.disabled = false;
        btn.textContent = "Gửi";
        form.reset();
      }, 1100);
    });
  }

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Nav hover effect
  const navBtn = document.getElementById("navToggleBtn");
  navBtn.addEventListener("mouseenter", () => {
    navBtn.style.textShadow = "0 0 8px var(--accent1), 0 0 16px var(--accent2)";
  });
  navBtn.addEventListener("mouseleave", () => {
    navBtn.style.textShadow = "none";
  });

  // Smooth scroll for CTA buttons
  document.querySelectorAll(".hero-cta .btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("href").substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// ---------- Scroll Reveal for all elements ----------
function scrollRevealAll() {
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-card, .skill-pill, .timeline-item, .award-item"
  );
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom && elTop > -el.offsetHeight) {
      // Vào viewport → show
      el.classList.add("active");

      // Skill pill width animation
      if (el.classList.contains("skill-pill")) {
        const progress = el.querySelector("span");
        if (progress) {
          const target = progress.getAttribute("data-target");
          progress.style.width = target + "%";
        }
      }
    } else {
      // Ra khỏi viewport → reset
      el.classList.remove("active");

      if (el.classList.contains("skill-pill")) {
        const progress = el.querySelector("span");
        if (progress) progress.style.width = "0";
      }
    }
  });
}

window.addEventListener("scroll", scrollRevealAll);
window.addEventListener("load", scrollRevealAll);
const footerCanvas = document.getElementById("footer-particles");
const fctx = footerCanvas.getContext("2d");
let fW,
  fH,
  fParticles = [];

function resizeFooter() {
  fW = footerCanvas.width = footerCanvas.offsetWidth;
  fH = footerCanvas.height = footerCanvas.offsetHeight;
}
window.addEventListener("resize", resizeFooter);
resizeFooter();

class FooterStar {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * fW;
    this.y = Math.random() * fH;
    this.r = Math.random() * 2 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.2;
    this.vy = (Math.random() - 0.5) * 0.2;
    this.alpha = Math.random() * 0.8 + 0.2;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > fW || this.y < 0 || this.y > fH) this.reset();
  }
  draw() {
    fctx.beginPath();
    fctx.fillStyle = `rgba(0, 255, 255, ${this.alpha})`;
    fctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    fctx.fill();
  }
}

function initFooterStars(n = 60) {
  fParticles = [];
  for (let i = 0; i < n; i++) fParticles.push(new FooterStar());
}
initFooterStars();

function animateFooter() {
  fctx.clearRect(0, 0, fW, fH);
  fParticles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateFooter);
}
animateFooter();
