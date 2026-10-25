const screen = document.getElementById("screen");
const track = document.getElementById("track");
const panels = Array.from(track.children);

const SECTIONS = ["home", "projects", "tech"];
const LAST = SECTIONS.length - 1;
const EASE = 0.14;

let target = 0; // where the input wants to be (in slides)
let current = 0; // what is drawn, eased towards target
let touchY = null;

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

function draw() {
  panels.forEach((panel, i) => {
    panel.style.setProperty("--p", clamp(current - i + 1, 0, 1).toFixed(4));
    panel.style.setProperty("--cover", clamp(current - i, 0, 1).toFixed(4));
  });
  screen.dataset.view = SECTIONS[Math.round(current)];
}

function tick() {
  current += (target - current) * EASE;
  if (Math.abs(target - current) < 0.0005) current = target;
  draw();
  requestAnimationFrame(tick);
}

function nudge(slides) {
  target = clamp(target + slides, 0, LAST);
}

window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    nudge(e.deltaY / (window.innerHeight * 0.9));
  },
  { passive: false }
);

window.addEventListener("keydown", (e) => {
  if (["ArrowDown", "ArrowRight", "PageDown"].includes(e.key)) snapBy(1);
  if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) snapBy(-1);
});

function snapBy(delta) {
  target = clamp(Math.round(target) + delta, 0, LAST);
}

window.addEventListener(
  "touchstart",
  (e) => {
    touchY = e.touches[0].clientY;
  },
  { passive: true }
);

window.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    if (touchY === null) return;
    const y = e.touches[0].clientY;
    nudge((touchY - y) / (window.innerHeight * 0.9));
    touchY = y;
  },
  { passive: false }
);

window.addEventListener(
  "touchend",
  () => {
    touchY = null;
  },
  { passive: true }
);

draw();
requestAnimationFrame(tick);
