import { studies } from "./content.js";

const studyMount = document.getElementById("study-mount");

const titles = {
  home: "Gavin Han",
  about: "About · Gavin Han",
  connect: "Connect · Gavin Han",
};

function currentPath() {
  return location.pathname.replace(/\/+$/, "") || "/";
}

function studyIdFromPath(path = currentPath()) {
  const match = path.match(/^\/work\/(meep|memento|cosi)$/);
  return match ? match[1] : null;
}

function routePage() {
  const path = currentPath();
  if (path === "/about") return "about";
  if (path === "/connect") return "connect";
  if (studyIdFromPath(path)) return "study";
  return "home";
}

function playEnter(element) {
  if (!element) return;
  element.classList.remove("is-entering");
  void element.offsetWidth;
  element.classList.add("is-entering");
}

function applyRoute() {
  const previous = document.body.dataset.page;
  const page = routePage();
  document.querySelectorAll(".view").forEach((view) => {
    view.hidden = view.dataset.page !== page;
  });
  document.body.dataset.page = page;
  const studyId = page === "study" ? studyIdFromPath() : null;
  document.title = studyId ? `${studies[studyId].title} · Gavin Han` : titles[page];
  document.querySelectorAll("[data-nav-page]").forEach((link) => {
    const target = link.dataset.navPage;
    const on = target === page || ((page === "home" || page === "study") && target === "work");
    link.classList.toggle("is-on", on);
    if (on) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (studyId) showStudy(studyId);
  else clearStudy();
  if (page === "study") {
    if (previous === "study") playEnter(studyMount);
    else {
      studyMount?.classList.remove("is-entering");
      playEnter(document.querySelector(".view.study-page"));
    }
  }
  setHudAway(false);
  if (page === "about") resetAboutStory();
  else placeConnectArrow();
  window.scrollTo(0, 0);
}

function goTo(href) {
  const url = new URL(href, location.origin);
  const next = url.pathname + url.hash;
  const now = location.pathname + location.hash;
  if (next === now) {
    applyRoute();
    return;
  }
  history.pushState({}, "", next);
  applyRoute();
}

function divider(label) {
  return `<div class="divider" aria-hidden="true"><span class="divider-rule"></span><span class="divider-label">${label}</span><span class="divider-rule"></span></div>`;
}

function iphone17(src) {
  return `<div class="iphone-17" aria-hidden="true">
    <div class="iphone-17-screen">
      <video src="${src}" muted loop playsinline autoplay></video>
    </div>
    <span class="iphone-17-island"></span>
  </div>`;
}

function renderProductMedia(block) {
  if (block.screenVideo) {
    return `<div class="media media-framed">
      <video class="media-under" src="${block.video}" muted loop playsinline autoplay></video>
      <span class="iphone-17-cover" aria-hidden="true"></span>
      ${iphone17(block.screenVideo)}
    </div>`;
  }
  return `<div class="media">
    <video src="${block.video}" muted loop playsinline autoplay></video>
  </div>`;
}

const studyIcons = {
  home: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 14.5 16 6l10 8.5V26a1 1 0 0 1-1 1h-6v-7h-6v7H7a1 1 0 0 1-1-1Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  chat: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 8h18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H14l-5 4v-4H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  check: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m11.5 16.2 3 3 6-6.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  clock: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 11.5V16l3 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  friends: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="12" cy="13" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="20.5" cy="13.5" r="2.4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M6.5 23.5c.6-3 2.8-4.6 5.5-4.6s4.9 1.6 5.5 4.6M18 19.2c1.6-.3 3.3.3 4.3 1.6.8 1.1 1.1 2.2 1.2 2.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  loop: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M10 12.5h9.2a4 4 0 0 1 0 8H12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="m13.2 9.4-3.4 3.1 3.4 3.1M18.8 22.6l3.4-3.1-3.4-3.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

function figureCaption(caption) {
  return `<figcaption class="figure-cap">${caption}</figcaption>`;
}

function renderProduct(study) {
  const blocks = study.product
    .map(
      (block) => `
      <section>
        <h3 class="heading">${block.heading}</h3>
        <p class="story">${block.story}</p>
      </section>
      ${renderProductMedia(block)}`
    )
    .join("");
  return `<div id="product">${divider("THE PRODUCT")}${blocks}</div>`;
}

function renderBlock(block, study) {
  if (block.type === "divider") return divider(block.label);
  if (block.type === "prose") return `<p class="story">${block.html}</p>`;
  if (block.type === "product") return renderProduct(study);
  if (block.type === "demo") {
    return `<figure class="figure">
      <div class="demo-stage demo-${block.layout}">
        <img class="demo-bg" src="${block.bg}" alt="" />
        <video src="${block.src}" controls playsinline preload="metadata"${block.rate ? ` data-rate="${block.rate}"` : ""}></video>
      </div>
      ${figureCaption(block.caption)}
    </figure>`;
  }
  if (block.type === "problem") {
    return `<section class="problem-wrap${block.alien ? " has-alien" : ""}">
      <p class="story">${block.html}</p>
      <p class="hmw">${block.hmw}</p>
      ${block.alien ? `<img class="problem-alien" src="${block.alien}" alt="" />` : ""}
    </section>`;
  }
  if (block.type === "cards") {
    const cards = block.items
      .map(
        (item) => `<article class="point-card">
          ${studyIcons[item.icon] || ""}
          <p>${item.html}</p>
          ${item.count ? `<p class="point-count">${item.count}</p>` : ""}
        </article>`
      )
      .join("");
    return `<div class="point-row">${cards}</div>`;
  }
  if (block.type === "pies") {
    const pies = block.items
      .map(
        (item) => `<article class="stat">
          <svg class="pie" viewBox="0 0 36 36" aria-hidden="true">
            <circle class="pie-track" cx="18" cy="18" r="15.9" pathLength="100" />
            <circle class="pie-value" cx="18" cy="18" r="15.9" pathLength="100" stroke-dasharray="${item.pct} ${100 - item.pct}" />
          </svg>
          <p>${item.html}</p>
        </article>`
      )
      .join("");
    return `<div class="stat-row${block.items.length === 2 ? " cols-2" : ""}">${pies}</div>`;
  }
  if (block.type === "figure") {
    return `<figure class="figure">
      <img src="${block.src}" alt="${block.caption}" />
      ${figureCaption(block.caption)}
    </figure>`;
  }
  if (block.type === "flow") {
    return `<figure class="figure">
      <div class="flow-map" data-flow tabindex="0">
        <div class="flow-stage">
          <img src="${block.src}" alt="${block.caption}" draggable="false" />
        </div>
      </div>
      ${figureCaption(block.caption)}
    </figure>`;
  }
  if (block.type === "lane") {
    return `<figure class="figure">
      <div class="lane">
        <img src="${block.still}" alt="Loading states we compared" />
        <div class="lane-phone">
          <video src="${block.video}" muted loop playsinline autoplay></video>
        </div>
      </div>
      ${figureCaption(block.caption)}
    </figure>`;
  }
  if (block.type === "compare") {
    return `<figure class="figure">
      <div class="compare">
        <img src="${block.left}" alt="" />
        <span class="process-arrow" aria-hidden="true">→</span>
        <img src="${block.right}" alt="" />
      </div>
      ${figureCaption(block.caption)}
    </figure>`;
  }
  if (block.type === "gifs") {
    const gifs = block.srcs.map((src) => `<img src="${src}" alt="" />`).join("");
    return `<figure class="figure">
      <div class="gif-row">${gifs}</div>
      ${figureCaption(block.caption)}
    </figure>`;
  }
  if (block.type === "pair") {
    const boxes = block.items
      .map(
        (item) => `<article class="pair-box">
          <h3 class="pair-title">${item.title}</h3>
          <ul class="pair-list">${item.lines.map((line) => `<li>${line}</li>`).join("")}</ul>
        </article>`
      )
      .join("");
    return `<div class="pair-row">${boxes}</div>`;
  }
  return "";
}

function renderStudy(id) {
  const study = studies[id];
  if (!study) return "";

  const meta = study.meta
    .map(
      (cell) => `
      <div>
        <div class="meta-label">${cell.label}</div>
        <div class="meta-value">${cell.value}</div>
      </div>`
    )
    .join("");

  return `
    <h2 class="study-title">${study.title}</h2>
    <p class="study-dek">${study.dek}</p>
    <div class="meta-row">${meta}</div>
    <div class="proto-wrap">
      <a class="proto-btn" href="${study.prototype}" target="_blank" rel="noopener noreferrer">VIEW THE PROTOTYPE  ↗</a>
      <a class="proto-btn" href="#product">JUMP TO THE PRODUCT</a>
    </div>
    ${study.blocks.map((block) => renderBlock(block, study)).join("")}
    <nav class="pager" aria-label="other projects">
      <button type="button" data-open="${study.prev.id}">${study.prev.label}</button>
      <a class="study-return" href="/" data-nav>Return to home</a>
      <button type="button" class="next" data-open="${study.next.id}">${study.next.label}</button>
    </nav>
  `;
}

function bindFlowMaps(root) {
  root.querySelectorAll("[data-flow]").forEach((map) => {
    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    map.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch" || event.button !== 0) return;
      if (event.offsetX > map.clientWidth || event.offsetY > map.clientHeight) return;
      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
      map.setPointerCapture(event.pointerId);
    });
    map.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      map.scrollLeft -= event.clientX - lastX;
      map.scrollTop -= event.clientY - lastY;
      lastX = event.clientX;
      lastY = event.clientY;
    });
    const endDrag = () => {
      dragging = false;
    };
    map.addEventListener("pointerup", endDrag);
    map.addEventListener("pointercancel", endDrag);
  });
}

function clearStudy() {
  if (studyMount) studyMount.innerHTML = "";
}

function showStudy(id) {
  if (!studyMount || !studies[id]) return;
  studyMount.innerHTML = renderStudy(id);
  bindFlowMaps(studyMount);
  studyMount.querySelectorAll("video").forEach((video) => {
    const rate = Number(video.dataset.rate);
    if (rate) {
      const applyRate = () => {
        video.playbackRate = rate;
      };
      applyRate();
      video.addEventListener("loadedmetadata", applyRate, { once: true });
    }
    if (video.hasAttribute("controls")) return;
    video.play().catch(() => {});
  });
}

document.querySelectorAll(".card[data-open]").forEach((card) => {
  const video = card.querySelector("video");
  card.addEventListener("mouseenter", () => video?.play().catch(() => {}));
  card.addEventListener("mouseleave", () => {
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  });
});

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  if (nav) {
    event.preventDefault();
    goTo(nav.getAttribute("href"));
    return;
  }
  const open = event.target.closest("[data-open]");
  if (open) {
    event.preventDefault();
    goTo(`/work/${open.dataset.open}`);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || routePage() !== "study") return;
  goTo("/");
});

let aboutIndex = 0;
let aboutLocked = false;
let aboutChapters = [];

function aboutPageOn() {
  return document.body.dataset.page === "about";
}

function setAboutChapter(next, dir = 1) {
  if (!aboutChapters.length) {
    aboutChapters = [...document.querySelectorAll(".about-chapter")];
  }
  const last = aboutChapters.length - 1;
  const target = Math.max(0, Math.min(last, next));
  if (target === aboutIndex && aboutChapters[target]?.classList.contains("is-on")) return;

  aboutChapters.forEach((chapter, index) => {
    chapter.classList.remove("is-on", "is-exit-up", "is-exit-down");
    if (index === aboutIndex && index !== target) {
      chapter.classList.add(dir > 0 ? "is-exit-up" : "is-exit-down");
    }
    const on = index === target;
    chapter.classList.toggle("is-on", on);
    chapter.setAttribute("aria-hidden", on ? "false" : "true");
  });
  aboutIndex = target;
  placeConnectArrow();
  document.querySelectorAll(".about-chapter").forEach((chapter) => {
    const on = chapter.classList.contains("is-on");
    chapter.querySelectorAll("video").forEach((video) => {
      if (on) video.play().catch(() => {});
      else video.pause();
    });
  });
}

function resetAboutStory() {
  aboutIndex = -1;
  aboutLocked = false;
  setAboutChapter(0, 1);
  setHudAway(false);
}

function stepAbout(dir) {
  if (!aboutPageOn() || aboutLocked) return;
  const next = aboutIndex + dir;
  if (next < 0 || next >= aboutChapters.length) return;
  aboutLocked = true;
  const last = aboutChapters.length - 1;
  setHudAway(false);
  setAboutChapter(next, dir);
  if (next === last) window.setTimeout(placeConnectArrow, 360);
  window.setTimeout(() => {
    aboutLocked = false;
  }, 720);
}

function placeConnectArrow() {
  const arrow = document.querySelector(".about-connect-arrow");
  const connect = document.querySelector("[data-nav-page='connect']");
  if (!arrow || !connect) return;
  const last = aboutPageOn() && aboutIndex === aboutChapters.length - 1;
  if (arrow.parentElement !== connect) {
    connect.appendChild(arrow);
  }
  arrow.classList.toggle("is-on", last);
}

function bindAboutCarousel(root) {
  const track = root.querySelector(".about-carousel-track");
  const slides = [...root.querySelectorAll("[data-about-slide]")];
  const faces = slides.map((slide) => slide.querySelector(".about-slide-face"));
  let index = 0;
  let locked = false;
  let accum = 0;
  let wheelDir = 0;
  let resetTimer = 0;
  let settleTimer = 0;
  let drag = null;

  function wrap(i) {
    let delta = i - index;
    const half = slides.length / 2;
    if (delta > half) delta -= slides.length;
    if (delta < -half) delta += slides.length;
    return delta;
  }

  function render(settling) {
    slides.forEach((slide, i) => {
      const delta = wrap(i);
      const slot = Math.max(-3, Math.min(3, delta));
      const hidden = Math.abs(delta) > 2;
      const active = delta === 0;
      const depth = Math.abs(delta);
      const sign = delta < 0 ? -1 : 1;
      const sharpening = active && settling;
      const blur = sharpening ? 1.4 : active ? 0 : Math.min(5, 2 + 1.25 * depth);
      const bright = sharpening ? 0.88 : active ? 1 : Math.max(0.56, 0.76 - 0.08 * depth);
      const contrast = sharpening ? 1.08 : active ? 1 : 1.22;
      const rot = sharpening ? -4 : active ? 0 : -(sign * 28);
      const scale = sharpening ? 0.975 : active ? 1 : Math.max(0.84, 0.94 - 0.04 * depth);
      const y = sharpening ? 4 : active ? 0 : 9 + 4 * depth;
      const z = sharpening ? -28 : active ? 0 : -96 - 40 * depth;
      slide.style.transform = `translateX(calc(-50% + ${slot} * (var(--about-card) + var(--about-gap))))`;
      slide.style.opacity = hidden ? "0" : "1";
      slide.style.zIndex = active ? "50" : String(20 - depth);
      slide.classList.toggle("is-front", active);
      slide.setAttribute("aria-hidden", active ? "false" : "true");
      const face = faces[i];
      face.style.transform = `translateY(${y}px) translateZ(${z}px) scale(${scale}) rotateY(${rot}deg)`;
      face.style.filter = `blur(${blur}px) brightness(${bright}) contrast(${contrast})`;
      face.style.opacity = String(active ? 1 : Math.max(0.45, 0.76 - 0.12 * depth));
    });
  }

  function step(direction, count = 1) {
    if (!slides.length || (locked && count < 2)) return;
    locked = true;
    index = (index + direction * count + slides.length * 4) % slides.length;
    render(true);
    window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(() => render(false), 430);
    window.setTimeout(() => {
      locked = false;
    }, 640);
  }

  function onWheel(event) {
    const unit = event.deltaMode === 1 ? 40 : event.deltaMode === 2 ? root.clientWidth : 1;
    const dx = event.deltaX * unit;
    const dy = event.deltaY * unit;
    if (Math.abs(dx) < 10 || Math.abs(dx) <= Math.abs(dy)) return false;
    event.preventDefault();
    const nextDir = dx > 0 ? 1 : -1;
    if (locked) return true;
    if (nextDir !== wheelDir) {
      accum = 0;
      wheelDir = nextDir;
    }
    accum += Math.min(Math.abs(dx), 160);
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      accum = 0;
      wheelDir = 0;
    }, 320);
    if (accum < 24) return true;
    accum = 0;
    step(nextDir, 1);
    return true;
  }

  root.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    drag = { x: event.clientX, y: event.clientY, t: performance.now() };
    track.classList.add("is-grabbing");
    root.setPointerCapture?.(event.pointerId);
  });

  function endDrag(event) {
    if (!drag) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    const dt = Math.max(1, performance.now() - drag.t);
    drag = null;
    track.classList.remove("is-grabbing");
    if (!aboutPageOn()) return;
    if (!root.closest(".about-chapter")?.classList.contains("is-on")) return;
    if (Math.abs(dx) < 28 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    const speed = Math.abs(dx) / dt;
    const steps = Math.min(slides.length - 1, speed > 1.1 || Math.abs(dx) > 180 ? 2 : 1);
    step(dx < 0 ? 1 : -1, steps);
  }

  function cancelDrag() {
    drag = null;
    track.classList.remove("is-grabbing");
  }

  render(false);
  requestAnimationFrame(() => root.classList.add("is-ready"));
  return { root, onWheel, endDrag, cancelDrag, step };
}

function initAboutCarousel() {
  const carousels = [...document.querySelectorAll("[data-about-carousel]")].map(bindAboutCarousel);
  const active = () => carousels.find((carousel) => carousel.root.closest(".about-chapter")?.classList.contains("is-on"));

  window.addEventListener("pointerup", (event) => {
    carousels.forEach((carousel) => carousel.endDrag(event));
  });
  window.addEventListener("pointercancel", () => {
    carousels.forEach((carousel) => carousel.cancelDrag());
  });
  document.addEventListener("keydown", (event) => {
    if (!aboutPageOn()) return;
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    active()?.step(event.key === "ArrowRight" ? 1 : -1);
  });

  return {
    onWheel(event) {
      if (!aboutPageOn()) return false;
      const carousel = active();
      if (!carousel) return false;
      return carousel.onWheel(event);
    },
    step(dir) {
      active()?.step(dir);
    },
  };
}

function initAboutStory() {
  aboutChapters = [...document.querySelectorAll(".about-chapter")];
  const aboutCarousel = initAboutCarousel();
  let downAccum = 0;
  let downTimer = 0;
  window.addEventListener("resize", placeConnectArrow);
  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-about-next]")) return;
    stepAbout(1);
  });

  window.addEventListener(
    "wheel",
    (event) => {
      if (!aboutPageOn()) return;
      if (aboutCarousel.onWheel(event)) return;
      event.preventDefault();
      const unit = event.deltaMode === 1 ? 40 : 1;
      downAccum += event.deltaY * unit;
      window.clearTimeout(downTimer);
      downTimer = window.setTimeout(() => {
        downAccum = 0;
      }, 280);
      if (Math.abs(downAccum) < 36) return;
      const dir = downAccum > 0 ? 1 : -1;
      downAccum = 0;
      stepAbout(dir);
    },
    { passive: false, capture: true },
  );

  let touchY = null;
  let touchX = null;
  window.addEventListener(
    "touchstart",
    (event) => {
      if (!aboutPageOn()) return;
      touchY = event.touches[0].clientY;
      touchX = event.touches[0].clientX;
    },
    { passive: true },
  );
  window.addEventListener(
    "touchend",
    (event) => {
      if (!aboutPageOn() || touchY == null) return;
      const dy = touchY - event.changedTouches[0].clientY;
      const dx = touchX - event.changedTouches[0].clientX;
      touchY = null;
      touchX = null;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 28) {
        aboutCarousel.step(dx > 0 ? 1 : -1);
        return;
      }
      if (Math.abs(dy) < 28) return;
      stepAbout(dy > 0 ? 1 : -1);
    },
    { passive: true },
  );

  document.addEventListener("keydown", (event) => {
    if (!aboutPageOn()) return;
    if (["ArrowDown", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      stepAbout(1);
    }
    if (["ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      stepAbout(-1);
    }
  });
}

let hudIgnoreUntil = 0;

function setHudAway(away) {
  document.querySelector(".hud")?.classList.toggle("is-away", away);
  hudIgnoreUntil = Date.now() + 800;
}

function initHudHide() {
  const hud = document.querySelector(".hud");
  if (!hud) return;
  let lastY = window.scrollY;

  window.addEventListener(
    "scroll",
    () => {
      if (aboutPageOn()) return;
      if (Date.now() < hudIgnoreUntil) {
        lastY = window.scrollY;
        return;
      }
      const y = window.scrollY;
      if (y > lastY + 4 && y > 16) hud.classList.add("is-away");
      else if (y < lastY - 4) hud.classList.remove("is-away");
      lastY = y;
    },
    { passive: true },
  );
}

window.addEventListener("popstate", applyRoute);
applyRoute();

function initStars() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const field = document.createElement("div");
  field.className = "starfield";
  field.setAttribute("aria-hidden", "true");
  document.body.prepend(field);

  const colors = ["#ffffff", "#f9d0dd", "#ffe8a3", "#c8f0ff"];
  const count = window.matchMedia("(max-width: 700px)").matches ? 7 : 11;
  const spots = [];

  function farSpot() {
    for (let n = 0; n < 24; n += 1) {
      const x = 3 + Math.random() * 94;
      const y = 4 + Math.random() * 92;
      const clear = spots.every((spot) => {
        const dx = spot.x - x;
        const dy = spot.y - y;
        return dx * dx + dy * dy > 160;
      });
      if (clear) return { x, y };
    }
    return { x: 3 + Math.random() * 94, y: 4 + Math.random() * 92 };
  }

  function dress(wrap) {
    const spot = farSpot();
    const found = spots.find((entry) => entry.el === wrap);
    if (found) {
      found.x = spot.x;
      found.y = spot.y;
    } else {
      spots.push({ ...spot, el: wrap });
    }
    wrap.style.left = `${spot.x}%`;
    wrap.style.top = `${spot.y}%`;
    const star = wrap.firstElementChild;
    star.style.setProperty("--star", colors[Math.floor(Math.random() * colors.length)]);
    star.style.setProperty("--px", Math.random() < 0.22 ? "3px" : "2px");
    star.style.setProperty("--twinkle", `${(2.6 + Math.random() * 2.8).toFixed(2)}s`);
    star.style.setProperty("--delay", `${(-Math.random() * 5).toFixed(2)}s`);
  }

  function cycle(wrap) {
    window.setTimeout(() => {
      wrap.classList.remove("is-live");
      window.setTimeout(() => {
        dress(wrap);
        void wrap.offsetWidth;
        wrap.classList.add("is-live");
        cycle(wrap);
      }, 720);
    }, 4500 + Math.random() * 7000);
  }

  for (let i = 0; i < count; i += 1) {
    const wrap = document.createElement("span");
    wrap.className = "pixel-star-wrap";
    const star = document.createElement("span");
    star.className = "pixel-star";
    wrap.appendChild(star);
    dress(wrap);
    field.appendChild(wrap);
    wrap.classList.add("is-live");
    if (!reduce) cycle(wrap);
  }
}

function initNyanCursor() {
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduce) return;

  document.documentElement.classList.add("nyan-on");

  const trailCanvas = document.createElement("canvas");
  trailCanvas.className = "nyan-trail";
  trailCanvas.setAttribute("aria-hidden", "true");
  const catCanvas = document.createElement("canvas");
  catCanvas.className = "nyan-canvas";
  catCanvas.setAttribute("aria-hidden", "true");
  document.body.append(trailCanvas, catCanvas);
  const trailCtx = trailCanvas.getContext("2d");
  const catCtx = catCanvas.getContext("2d");

  const TILE = 3;
  const DELAY = 0.1;
  const FADE = 0.7;
  const rainbow = ["#ff0000", "#ff9900", "#ffff00", "#33cc00", "#0099ff", "#6633ff"];
  const tiles = new Map();
  const mouse = { x: -80, y: -80 };
  const cat = { x: -80, y: -80 };
  const sprite = new Image();
  sprite.src = "/brand/nyan.svg";
  let facing = 1;
  let lastCol = null;
  let lastRow = null;
  let dpr = 1;
  let lastMove = 0;
  let trailHold = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    catCanvas.width = window.innerWidth * dpr;
    catCanvas.height = window.innerHeight * dpr;
    catCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    trailCanvas.width = Math.ceil(window.innerWidth / TILE);
    trailCanvas.height = Math.ceil(window.innerHeight / TILE);
    trailCtx.imageSmoothingEnabled = false;
  }

  function rear() {
    return {
      x: cat.x - facing * 10,
      y: cat.y + 1,
    };
  }

  function stampColumn(col, row) {
    const now = performance.now() / 1000;
    rainbow.forEach((color, r) => {
      tiles.set(`${col},${row + r - 3}`, { color, born: now });
    });
  }

  function lineStamp(c0, r0, c1, r1) {
    let x = c0;
    let y = r0;
    const dx = Math.abs(c1 - c0);
    const dy = Math.abs(r1 - r0);
    const sx = c0 < c1 ? 1 : -1;
    const sy = r0 < r1 ? 1 : -1;
    let err = dx - dy;
    for (let i = 0; i < 240; i += 1) {
      stampColumn(x, y);
      if (x === c1 && y === r1) break;
      const e2 = err * 2;
      if (e2 > -dy) {
        err -= dy;
        x += sx;
      }
      if (e2 < dx) {
        err += dx;
        y += sy;
      }
    }
  }

  function fadeAlpha(age) {
    if (age < DELAY) return 1;
    const t = Math.min(1, (age - DELAY) / FADE);
    return 1 - t * t * (3 - 2 * t);
  }

  function drawCat(x, y, trailAlpha) {
    if (!sprite.complete || !sprite.naturalWidth) return;
    catCtx.save();
    catCtx.imageSmoothingEnabled = false;
    catCtx.translate(Math.round(x), Math.round(y));
    catCtx.scale(facing, 1);
    if (trailAlpha > 0.02) {
      catCtx.globalAlpha = trailAlpha;
      rainbow.forEach((color, r) => {
        catCtx.fillStyle = color;
        catCtx.fillRect(-16, -8 + r * 3, 8, 3);
      });
      catCtx.globalAlpha = 1;
    }
    catCtx.drawImage(sprite, -17, -10, 34, 21);
    catCtx.restore();
  }

  function tick() {
    const nowMs = performance.now();
    const vx = mouse.x - cat.x;
    const vy = mouse.y - cat.y;
    const pointerFresh = lastMove > 0 && nowMs - lastMove < 140;
    const chasing = vx * vx + vy * vy > 4;
    const moving = pointerFresh || chasing;
    if (moving) trailHold = nowMs;
    const trailAlpha = moving ? 1 : fadeAlpha(trailHold ? (nowMs - trailHold) / 1000 : 99);

    if (vx > 1.4) facing = 1;
    else if (vx < -1.4) facing = -1;
    cat.x += vx * 0.42;
    cat.y += vy * 0.42;

    const back = rear();
    const col = Math.floor(back.x / TILE);
    const row = Math.floor(back.y / TILE);
    if (moving) {
      if (lastCol === null) stampColumn(col, row);
      else if (col !== lastCol || row !== lastRow) lineStamp(lastCol, lastRow, col, row);
      lastCol = col;
      lastRow = row;
    }

    const now = performance.now() / 1000;
    trailCtx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
    tiles.forEach((tile, key) => {
      const alpha = fadeAlpha(now - tile.born);
      if (alpha <= 0.02) {
        tiles.delete(key);
        return;
      }
      const [c, r] = key.split(",").map(Number);
      trailCtx.globalAlpha = alpha;
      trailCtx.fillStyle = tile.color;
      trailCtx.fillRect(c, r, 1, 1);
    });
    trailCtx.globalAlpha = 1;

    catCtx.clearRect(0, 0, catCanvas.width, catCanvas.height);
    drawCat(cat.x, cat.y, trailAlpha);
    requestAnimationFrame(tick);
  }

  window.addEventListener("mousemove", (event) => {
    if (event.clientX === mouse.x && event.clientY === mouse.y) return;
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    lastMove = performance.now();
  });
  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(tick);
}

initStars();
initNyanCursor();
initAboutStory();
initHudHide();
