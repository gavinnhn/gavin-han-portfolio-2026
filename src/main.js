import { studies } from "./content.js";

const studyRoot = document.getElementById("study-root");
const aboutRoot = document.getElementById("about-root");

function divider(label) {
  return `<div class="divider">${label}</div>`;
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

  const product = study.product
    .map(
      (block) => `
      <section>
        <h3 class="heading">${block.heading}</h3>
        <p class="story">${block.story}</p>
      </section>
      <div class="media">
        <video src="${block.video}" muted loop playsinline autoplay></video>
      </div>`
    )
    .join("");

  const decisions = study.decisions
    .map(
      (block) => `
      <section>
        <h3 class="heading">${block.heading}</h3>
        <p class="story">${block.story}</p>
      </section>
      <div class="process-board">
        <img src="${block.board}" alt="" />
      </div>`
    )
    .join("");

  const problem = study.problem
    ? `
      ${divider("THE PROBLEM")}
      <section>
        <h3 class="heading">${study.problem.heading}</h3>
        <p class="story">${study.problem.story}</p>
      </section>`
    : "";

  return `
    <div class="study-scrim" data-close-study></div>
    <article class="study-window" role="dialog" aria-modal="true" aria-label="${study.title}">
      <div class="window-chrome">
        <span>${study.exe}</span>
        <button type="button" data-close-study>ESC TO CLOSE</button>
      </div>
      <div class="study-body">
        <h2 class="study-title">${study.title}</h2>
        <p class="study-dek">${study.dek}</p>
        <div class="meta-row">${meta}</div>
        <div class="proto-wrap">
          <a class="proto-btn" href="${study.prototype}" target="_blank" rel="noopener noreferrer">VIEW THE PROTOTYPE  ↗</a>
        </div>
        ${divider("CONTEXT")}
        <p class="story">${study.context}</p>
        ${divider("DEMO")}
        <div class="media">
          <video src="${study.hero}" muted loop playsinline autoplay></video>
        </div>
        ${problem}
        ${divider("THE PRODUCT")}
        ${product}
        ${divider("DESIGN DECISIONS")}
        ${decisions}
        <nav class="pager" aria-label="other projects">
          <button type="button" data-open="${study.prev.id}">${study.prev.label}</button>
          <span class="pager-label">CHECK OUT OTHER PROJECTS</span>
          <button type="button" class="next" data-open="${study.next.id}">${study.next.label}</button>
        </nav>
      </div>
    </article>
  `;
}

function closeStudy() {
  studyRoot.hidden = true;
  studyRoot.innerHTML = "";
  document.body.classList.remove("study-open");
}

function openStudy(id) {
  if (!studies[id]) return;
  studyRoot.innerHTML = renderStudy(id);
  studyRoot.hidden = false;
  document.body.classList.add("study-open");
  studyRoot.querySelector(".study-window")?.scrollTo(0, 0);
  studyRoot.querySelectorAll("video").forEach((video) => {
    video.play().catch(() => {});
  });
}

function openAbout() {
  aboutRoot.hidden = false;
  document.body.classList.add("about-open");
}

function closeAbout() {
  aboutRoot.hidden = true;
  document.body.classList.remove("about-open");
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
  const open = event.target.closest("[data-open]");
  if (open) {
    event.preventDefault();
    closeAbout();
    openStudy(open.dataset.open);
    return;
  }
  if (event.target.closest("[data-close-study]")) {
    closeStudy();
    return;
  }
  if (event.target.closest("[data-open-about]")) {
    event.preventDefault();
    closeStudy();
    openAbout();
    return;
  }
  if (event.target.closest("[data-close-about]")) {
    closeAbout();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeStudy();
  closeAbout();
});
