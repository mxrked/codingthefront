/**
 *
 *  This is used to trigger the page enter animations
 *
 */

function TriggerV_HAnimation(type, element) {
  // Y animations
  if (type == "V" || type == "v" || type == "Y" || type == "y") {
    // Making sure it isnt a scroll animation
    if (!element.classList.contains("scroll-fade")) {
      element.style.opacity = 1;
      element.style.visibility = "visible";
      element.style.transform = "translateY(0)";
    }
  }

  // X animations
  if (type == "H" || type == "h" || type == "X" || type == "x") {
    // Making sure it isnt a scroll animation
    if (!element.classList.contains("scroll-fade")) {
      element.style.opacity = 1;
      element.style.visibility = "visible";
      element.style.transform = "translateX(0)";
    }
  }
}

export default function TriggerEnterAnimations(rooter) {
  // Global elements
  TriggerV_HAnimation("V", document.getElementById("desktopNavInner"));
  TriggerV_HAnimation("V", document.getElementById("mobileNavInner"));

  // This will detect the index page elements. This is to prevent NULL errors on other pages (if there are going to be more..)
  if (rooter.asPath == "/") {
    TriggerV_HAnimation("V", document.getElementById("topCnt"));
  }

  // Allows the user to scroll once the enter animations trigger
  setTimeout(() => {
    document.body.style.overflowY = "auto";
  }, 800);
}
