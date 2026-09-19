document.getElementById("year").textContent = new Date().getFullYear();

const screen = document.getElementById("screen");
const track = document.getElementById("track");
const viewport = document.querySelector(".content-viewport");

const SECTIONS = ["home", "projects", "tech"];
const WHEEL_THRESHOLD = 12;
const SWIPE_THRESHOLD = 40;
const LOCK_MS = 900;
let index = 0;
let locked = false;

function render() {
  const panelWidth = viewport.clientWidth;
  track.style.transform = `translateX(${-index * panelWidth}px)`;
  screen.dataset.view = SECTIONS[index];
}

window.addEventListener("resize", render);

function step(delta) {
  const next = index + delta;
  if (locked || next < 0 || next >= SECTIONS.length) return;
  locked = true;
  index = next;
  render();
  setTimeout(() => {
    locked = false;
  }, LOCK_MS);
}

render();

window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
    step(e.deltaY > 0 ? 1 : -1);
  },
  { passive: false }
);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") step(1);
  if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") step(-1);
});

let touchStartY = null;

window.addEventListener(
  "touchstart",
  (e) => {
    touchStartY = e.touches[0].clientY;
  },
  { passive: true }
);

window.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
  },
  { passive: false }
);

window.addEventListener(
  "touchend",
  (e) => {
    if (touchStartY === null) return;
    const deltaY = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(deltaY) > SWIPE_THRESHOLD) {
      step(deltaY > 0 ? 1 : -1);
    }
    touchStartY = null;
  },
  { passive: true }
);
