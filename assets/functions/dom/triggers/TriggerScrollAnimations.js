/**
 *
 *  This is used to trigger the scroll animations
 *
 */

export default function TriggerScrollAnimations() {
  if (document.querySelector(".scroll-fade")) {
    const SCROLL_FADES = document.querySelectorAll(".scroll-fade");

    for (let i = 0; i < SCROLL_FADES.length; i++) {
      const W_H = window.innerHeight;
      const REVEAL_TOP = SCROLL_FADES[i].getBoundingClientRect().top; // Gets the top of each scroll-fade element
      let revealPoint; // This is used to determine how soon the element will be shown

      if (window.innerWidth <= 991) {
        // Smaller devices
        revealPoint = 150;
      }
      if (window.innerWidth > 991) {
        // Larger devices
        revealPoint = 550;
      }

      if (REVEAL_TOP < W_H - revealPoint) {
        // Checking for a particular scroll style class
        if (SCROLL_FADES[i].classList.contains("fade-up")) {
          SCROLL_FADES[i].style.opacity = 1;
          SCROLL_FADES[i].style.visibility = "visible";
          SCROLL_FADES[i].style.transform = "translateY(0)";
        }
        if (SCROLL_FADES[i].classList.contains("fade-down")) {
          SCROLL_FADES[i].style.opacity = 1;
          SCROLL_FADES[i].style.visibility = "visible";
          SCROLL_FADES[i].style.transform = "translateY(0)";
        }
        if (SCROLL_FADES[i].classList.contains("fade-left")) {
          SCROLL_FADES[i].style.opacity = 1;
          SCROLL_FADES[i].style.visibility = "visible";
          SCROLL_FADES[i].style.transform = "translateX(0)";
        }
        if (SCROLL_FADES[i].classList.contains("fade-right")) {
          SCROLL_FADES[i].style.opacity = 1;
          SCROLL_FADES[i].style.visibility = "visible";
          SCROLL_FADES[i].style.transform = "translateX(0)";
        }
        if (SCROLL_FADES[i].classList.contains("fade-in")) {
          SCROLL_FADES[i].style.opacity = 1;
          SCROLL_FADES[i].style.visibility = "visible";
        }
      }
    }
  }
}
