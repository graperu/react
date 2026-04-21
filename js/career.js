const careerCard = document.querySelector(".career-goal-card");

function revealCareer() {
  const top = careerCard.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (top < windowHeight - 100) {
    careerCard.classList.add("active");
  }
}

window.addEventListener("scroll", revealCareer);
window.addEventListener("load", revealCareer);
