// skills.js
document.addEventListener("DOMContentLoaded", () => {
  const skillPills = document.querySelectorAll(".skill-pill");

  function revealSkills() {
    const triggerBottom = window.innerHeight * 0.85;

    skillPills.forEach((pill) => {
      const pillTop = pill.getBoundingClientRect().top;
      if (pillTop < triggerBottom) {
        pill.classList.add("visible");
        const progress = pill.querySelector("span");
        const target = progress.getAttribute("data-target");
        progress.style.width = target + "%";
      }
    });
  }

  window.addEventListener("scroll", revealSkills);
  window.addEventListener("load", revealSkills);
});
