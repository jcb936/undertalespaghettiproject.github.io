import { handleTopBar, loadCreditsList } from "./common.js";
import dr_credits from "../assets/dr_credits.json" with { type: "json" };

function addClass(selector, className) {
  document.querySelectorAll(selector).forEach((el) => el.classList.add(className));
}

function removeClass(selector, className) {
  document.querySelectorAll(selector).forEach((el) => el.classList.remove(className));
}

function handleAppearingElements() {
  const callback = () => {
    const scroll = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scroll < viewportHeight * 0.4) {
      removeClass(".top-bar", "visible-top-bar");
    }

    if (scroll >= viewportHeight * 0.1) {
      addClass(".title1", "moved-title1");
      addClass(".description1", "moved-description1");
      addClass(".top-bar", "visible-top-bar");
    }

    if (scroll >= viewportHeight * 1.0) {
      addClass(".title5", "moved-title5");
      addClass(".staff-listRune", "animated-staff-list");
      addClass(".staff-avatar", "animated-staff-avatar");
    }

    if (scroll >= viewportHeight * 1.5) {
      addClass(".title4", "moved-title4");
      addClass(".social-fb", "moved-social-fb");
      addClass(".social-discord", "moved-social-discord");
      addClass(".social-bluesky", "moved-social-bluesky");
      addClass(".social-email", "moved-social-email");
    }

    if (scroll >= viewportHeight * 1.8) {
      addClass(".download-icon", "animated-download-icon");
      addClass(".download-button", "animated-download-button");
    }
  };

  window.addEventListener("scroll", callback);
}

function loadCredits() {
  loadCreditsList(".staff-listRune", dr_credits.credits);
  loadCreditsList(".staff-listRune.pt", dr_credits.playtesters);
  loadCreditsList(".staff-listRune.ty", dr_credits.prevCredits);
}

// Do the JS - Should be done after DOMContentLoaded (e.g. loaded by the Cachebuster)

handleAppearingElements();
handleTopBar();
loadCredits();
