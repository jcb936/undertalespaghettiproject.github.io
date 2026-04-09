import { handleTopBar, loadCreditsList } from "./common.js";
import ut_credits from "../assets/ut_credits.json" with { type: "json" };

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
      addClass(".staff-avatar", "animated-staff-avatar");
    }
  };

  window.addEventListener("scroll", callback);
}

// Do the JS - Should be done after DOMContentLoaded (e.g. loaded by the Cachebuster)

handleAppearingElements();
handleTopBar();
loadCreditsList(".staff-list", ut_credits.credits);
