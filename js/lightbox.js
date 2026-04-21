const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

// mở lightbox khi click ảnh
document.querySelectorAll(".img-wrapper img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("show");
  });
});

// đóng lightbox
function closeLightbox() {
  lightbox.classList.remove("show");
  setTimeout(() => {
    lightboxImg.src = "";
  }, 400); // đồng bộ với transition
}

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeLightbox();
});

// click nền cũng đóng
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
