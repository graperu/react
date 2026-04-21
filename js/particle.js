// particle.js - performant small particles for galaxy vibe
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let W,
  H,
  particles = [];
function resize() {
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
}
window.addEventListener("resize", resize);
resize();
function R(a, b) {
  return Math.random() * (b - a) + a;
}
class P {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = R(0, W);
    this.y = R(-H, H);
    this.vx = R(-0.25, 0.25);
    this.vy = R(0.1, 0.7);
    this.r = R(0.6, 2.2);
    this.a = R(0.3, 1);
    this.h = R(180, 260);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y > H + 10) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = `hsla(${this.h},80%,68%,${this.a})`;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}
function init(n = 140) {
  particles = [];
  for (let i = 0; i < n; i++) particles.push(new P());
}
init(160);
function loop() {
  ctx.clearRect(0, 0, W, H);
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, "rgba(139,92,246,0.02)");
  g.addColorStop(1, "rgba(110,231,183,0.01)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  for (const p of particles) {
    p.update();
    p.draw();
  }
  requestAnimationFrame(loop);
}
loop();
