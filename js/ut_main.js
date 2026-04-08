import { handlePageScroll, handleTopBar } from "./common.js";

function handleAppearingElements() {
  var viewportHeight = $(window).height();
  window.addEventListener("scroll", throttle(callback, 400));

  function callback() {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var viewportHeight = $(window).height();

      if (scroll >= viewportHeight * 0.5) {
        $(".title1").addClass("moved-title1");
        $(".description1").addClass("moved-description1");
        $(".top-bar").addClass("visible-top-bar");
      }

      if (scroll < viewportHeight * 0.5) {
        $(".top-bar").removeClass("visible-top-bar");
      }

      if (scroll >= viewportHeight * 1.2) {
        $(".title2").addClass("moved-title2");
        $(".slider-immagini").addClass("moved-slider-immagini");
      }

      if (scroll >= viewportHeight * 1.2) {
        $(".title3").addClass("moved-title3");
        $(".download-icon").addClass("animated-download-icon");
        $(".download-button").addClass("animated-download-button");
      }

      if (scroll >= viewportHeight * 1.7) {
        $(".title4").addClass("moved-title4");
        $(".social-fb").addClass("moved-social-fb");
        $(".social-discord").addClass("moved-social-discord");
        $(".social-bluesky").addClass("moved-social-bluesky");
        $(".social-email").addClass("moved-social-email");
      }

      if (scroll >= viewportHeight * 1.7) {
        $(".title5").addClass("moved-title5");
        $(".staff-list").addClass("animated-staff-list");
        $(".staff-avatar").addClass("animated-staff-avatar");
      }
    });
  }

  function throttle(callback, limit) {
    var wait = false;
    return function () {
      if (!wait) {
        callback.call();
        wait = true;
        setTimeout(function () {
          wait = false;
        }, limit);
      }
    };
  }
}

// Do the JS - Should be done after DOMContentLoaded (e.g. loaded by the Cachebuster)

handleAppearingElements();
handlePageScroll();
handleTopBar();
