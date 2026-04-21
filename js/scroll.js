// scroll.js - reveal sections + animate skill bars
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((ent) => {
        if (ent.isIntersecting) {
          ent.target.classList.add("show");
          obs.unobserve(ent.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((r) => io.observe(r));

  // skill bars animate
  const skillsSect = document.getElementById("skills");
  if (skillsSect) {
    const spans = skillsSect.querySelectorAll(".progress span");
    const sObs = new IntersectionObserver(
      (entries, ob) => {
        entries.forEach((ent) => {
          if (ent.isIntersecting) {
            spans.forEach((s, i) => {
              const target = s.dataset.target || 70;
              setTimeout(() => (s.style.width = target + "%"), i * 120);
            });
            ob.unobserve(ent.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    sObs.observe(skillsSect);
  }
});
