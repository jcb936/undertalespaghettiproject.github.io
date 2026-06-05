import { handleTopBar, loadCreditsList } from "./common.js";
import headers from "../assets/header_info.json" with { type: "json" };

let currentCreditsIndex = 0;
let credits = [];

function addClass(selector, className) {
  document.querySelectorAll(selector).forEach((el) => el.classList.add(className));
}

function removeClass(selector, className) {
  document.querySelectorAll(selector).forEach((el) => el.classList.remove(className));
}

function updateAppearingElements() {
  const scroll = window.scrollY;
  const viewportHeight = window.innerHeight;

  if (scroll < viewportHeight * 0.5) {
    removeClass(".top-bar", "visible-top-bar");
  }

  if (scroll >= viewportHeight * 0.5) {
    addClass(".title1", "moved-title1");
    addClass(".description1", "moved-description1");
    addClass(".top-bar", "visible-top-bar");
  }

  if (scroll >= viewportHeight * 1.2) {
    addClass(".title2", "moved-title2");
    addClass(".slider-immagini", "moved-slider-immagini");
    addClass(".title3", "moved-title3");
    addClass(".download-icon", "animated-download-icon");
    addClass(".download-button", "animated-download-button");
  }

  if (scroll >= viewportHeight * 1.7) {
    addClass(".title4", "moved-title4");
    addClass(".social-fb", "moved-social-fb");
    addClass(".social-discord", "moved-social-discord");
    addClass(".social-bluesky", "moved-social-bluesky");
    addClass(".social-email", "moved-social-email");
    addClass(".title5", "moved-title5");
    addClass(".staff-list", "animated-staff-list");
    addClass(".staff-list-divider", "animated-staff-list");
    addClass(".staff-avatar", "animated-staff-avatar");
  }
}

function handleAppearingElements() {
  window.addEventListener("scroll", updateAppearingElements);
}

function handleRandomBackground() {
  const random = Math.floor(Math.random() * headers.length);
  let header = document.querySelector("header");
  header.style.backgroundImage = `url(${headers[random].path})`;
  let artistLabel = document.querySelector(".art-credit");
  artistLabel.textContent = `art by ${headers[random].artist}`;
  if (headers[random].link) artistLabel.href = headers[random].link;
}

function setCreditsTitleForCurrentIndex() {
  let title = document.querySelector("#staff-list-title");
  if (!title) return;

  switch (currentCreditsIndex) {
    case 0:
      title.textContent = "Crediti DELTARUNE Capitolo 3";
      return;
    case 1:
      title.textContent = "Crediti DELTARUNE Capitolo 2";
      return;
    case 2:
      title.textContent = "Crediti DELTARUNE Capitolo 1";
      return;
    case 3:
      title.textContent = "Crediti UNDERTALE";
      return;
  }
}

function loadCreditsForCurrentIndex() {
  const staffListID = "#staff";
  const thanksListID = "#thanks";
  const staffListDivider = ".staff-list-divider";
  const currentCredits = credits[currentCreditsIndex];

  loadCreditsList(staffListID, currentCredits.credits);

  let divider = document.querySelector(staffListDivider);
  if (!divider) return;

  if (!("thanks" in currentCredits) || !currentCredits.thanks) {
    divider.style.display = "none";
    loadCreditsList(thanksListID, []);
    return;
  }

  if (divider.style.display === "none") {
    divider.style.display = "";
  };

  loadCreditsList(thanksListID, currentCredits.thanks);
}

function hookCreditsButtonEvents() {
  let leftCreditsButton = document.querySelector("#toggle-credits-left");
  let rightCreditsButton = document.querySelector("#toggle-credits-right");

  leftCreditsButton.addEventListener("click", () => {
    if (--currentCreditsIndex < 0) currentCreditsIndex = 3;
    loadCreditsForCurrentIndex();
    setCreditsTitleForCurrentIndex();
    updateAppearingElements();
  });

  rightCreditsButton.addEventListener("click", () => {
    currentCreditsIndex = ++currentCreditsIndex % 4;
    loadCreditsForCurrentIndex();
    setCreditsTitleForCurrentIndex();
    updateAppearingElements();
  });
}

function handleGalleryScrolling() {
  document.querySelectorAll(".go-to-slide").forEach((elem) => {
    elem.addEventListener("click", (ev) => {
      const slide = document.querySelector(ev.target.getAttribute("href"));
      if (!slide) return;

      ev.preventDefault();
      slide.scrollIntoView({ block: "nearest", container: "nearest" });
    });
  });
}

async function readCredits() {
  const drCh1 = await import("../assets/dr_credits_ch1.json", {
    with: { type: "json" },
  });

  const drCh2 = await import("../assets/dr_credits_ch2.json", {
    with: { type: "json" },
  });

  const drCh3 = await import("../assets/dr_credits_ch3.json", {
    with: { type: "json" },
  });

  const ut = await import("../assets/ut_credits.json", {
    with: { type: "json" },
  });

  // Order is how they also will be showed
  credits.push(drCh3.default);
  credits.push(drCh2.default);
  credits.push(drCh1.default);
  credits.push(ut.default);
}

// Do the JS - Should be done after DOMContentLoaded (e.g. loaded by the Cachebuster)

await readCredits();
handleAppearingElements();
handleTopBar();
loadCreditsForCurrentIndex();
setCreditsTitleForCurrentIndex();
handleRandomBackground();
hookCreditsButtonEvents();
handleGalleryScrolling();
