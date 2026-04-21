const revealCards = document.querySelectorAll(".reveal-card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
