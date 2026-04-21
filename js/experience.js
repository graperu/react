const timelineProgress = document.querySelector(".timeline-progress");
const timelineWrapper = document.querySelector(".timeline-wrapper");

window.addEventListener("scroll", () => {
  const rect = timelineWrapper.getBoundingClientRect();
  const timelineHeight = timelineWrapper.offsetHeight;
  const windowHeight = window.innerHeight;

  // Scroll từ đầu timeline tới giữa màn hình
  let progressHeight;
  if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
    progressHeight = windowHeight / 2 - rect.top;
  } else if (rect.top >= windowHeight / 2) {
    progressHeight = 0;
  } else {
    progressHeight = timelineHeight;
  }

  timelineProgress.style.height = progressHeight + "px";
});
