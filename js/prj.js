const modal = document.getElementById("project-modal");
const modalTitle = modal.querySelector("#modal-title");
const modalDesc = modal.querySelector("#modal-desc");
const modalGithub = modal.querySelector("#modal-github");
const modalDemo = modal.querySelector("#modal-demo");
const modalClose = modal.querySelector("#modal-close");

// mở modal khi click bất kỳ trong thẻ project-card
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    // chỉ mở khi nhấn vào card, không phân biệt link
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalDesc.textContent = card.querySelector("p").textContent;
    modalGithub.href = card.dataset.github || "#";
    modalDemo.href = card.dataset.demo || "#";
    modalDemo.dataset.isDemo = "true"; // đánh dấu là demo
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("active");
  });
});

// đóng modal
modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
});

// nhấn Live Demo
modalDemo.addEventListener("click", (e) => {
  if (modalDemo.dataset.isDemo === "true") {
    e.preventDefault(); // ngăn mở link
    alert("This is only a demo version."); // hiển thị thông báo
  }
});

// optional: click overlay để đóng modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
});
