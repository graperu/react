(function () {
  const wrapper = document.getElementById("avatarWrapper");
  const img = document.getElementById("avatarImg");
  if (!wrapper || !img) return;

  let bounds = wrapper.getBoundingClientRect();
  window.addEventListener(
    "resize",
    () => (bounds = wrapper.getBoundingClientRect())
  );

  let mouseDx = 0,
    mouseDy = 0;

  window.addEventListener("mousemove", (e) => {
    const cx = bounds.left + bounds.width / 2;
    const cy = bounds.top + bounds.height / 2;
    mouseDx = (e.clientX - cx) / bounds.width;
    mouseDy = (e.clientY - cy) / bounds.height;

    img.style.transform = `translateX(${mouseDx * 8}px) translateY(${
      mouseDy * 8
    }px) rotateY(${mouseDx * 6}deg) rotateX(${mouseDy * -6}deg) scale(1.02)`;
    // wrapper transform tạm thời bỏ float, float sẽ thêm sau
    wrapper.style.transform = `translateX(${mouseDx * 6}px) translateY(${
      mouseDy * 6
    }px)`;
  });

  // idle float
  let t = 0;
  function floatLoop() {
    t += 0.01;
    const floatY = Math.sin(t) * 3; // +/-3px nhẹ nhàng
    wrapper.style.transform = `translateX(${mouseDx * 6}px) translateY(${
      mouseDy * 6 + floatY
    }px)`;
    requestAnimationFrame(floatLoop);
  }
  floatLoop();
})();
