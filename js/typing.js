// typing.js
(function () {
  function Typewriter(elId, phrases, opts = {}) {
    this.el = document.getElementById(elId);
    if (!this.el) return;
    this.phrases = phrases || [];
    this.loop = opts.loop ?? true;
    this.delay = opts.delay ?? 50;
    this.pause = opts.pause ?? 1400;
    this.idx = 0;
    this.isDeleting = false;
    this.text = "";
    this.tick();
  }
  Typewriter.prototype.tick = function () {
    const i = this.idx % this.phrases.length;
    const full = this.phrases[i];
    if (this.isDeleting) this.text = full.substring(0, this.text.length - 1);
    else this.text = full.substring(0, this.text.length + 1);
    this.el.innerHTML = `<span class="tw-text">${this.text}</span><span class="cursor">|</span>`;
    let delta = this.delay + Math.random() * 80;
    if (!this.isDeleting && this.text === full) {
      delta = this.pause;
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === "") {
      this.isDeleting = false;
      this.idx++;
      delta = 300;
    }
    setTimeout(() => this.tick(), delta);
  };
  window.Typewriter = Typewriter;
})();
