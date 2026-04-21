// demo-cv.js
document.addEventListener("DOMContentLoaded", () => {
  const cvBtn = document.getElementById("themeBtn");

  if (cvBtn) {
    cvBtn.addEventListener("click", (e) => {
      e.preventDefault(); // tránh link hoặc submit nếu có
      alert("Xin lỗi, đây chỉ là bản demo CV.");
    });
  }
});
