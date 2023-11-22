/**
 *
 *  This is used to trigger the page exit
 *
 */

export default function TriggerPageExit() {
  if (!sessionStorage.getItem("Mobile Device")) {
    if (document.querySelector(".fm-element")) {
      document.querySelectorAll(".fm-element").forEach((fm) => {
        fm.classList.add("half-second");
      });
    }

    if (document.querySelector(".fade-left-FM")) {
      const FADE_LEFTS = document.querySelectorAll(".fade-left-FM");

      FADE_LEFTS.forEach((fade) => {
        fade.style.opacity = 0;
        fade.style.transform = "translateX(-50px)";
      });
    }

    if (document.querySelector(".fade-right-FM")) {
      const FADE_RIGHTS = document.querySelectorAll(".fade-right-FM");

      FADE_RIGHTS.forEach((fade) => {
        fade.style.opacity = 0;
        fade.style.transform = "translateX(50px)";
      });
    }

    if (document.querySelector(".fade-up-FM")) {
      const FADE_UPS = document.querySelectorAll(".fade-up-FM");

      FADE_UPS.forEach((fade) => {
        fade.style.opacity = 0;
        fade.style.transform = "translateY(50px)";
      });
    }

    if (document.querySelector(".fade-down-FM")) {
      const FADE_DOWNS = document.querySelectorAll(".fade-down-FM");

      FADE_DOWNS.forEach((fade) => {
        fade.style.opacity = 0;
        fade.style.transform = "translateY(-50px)";
      });
    }
  }

  document.querySelectorAll(".page").forEach((page) => {
    page.style.overflowY = "hidden";
    page.style.pointerEvents = "none";
    page.style.opacity = 0;
    page.style.visibility = "hidden";
  });
}
