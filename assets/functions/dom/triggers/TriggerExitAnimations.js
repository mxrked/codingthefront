/**
 *
 *  This is used to trigger the exit animations
 *
 *  ! This is made due to the framer motion exit element properties not working correctly
 *  ! and this was the easiest fix i could come up with
 *
 */

function exitAnimationType(els, xYDirect, xYNum) {
  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";
  document.getElementById("PAGE").style.opacity = 0; // This is used to hide the page and to not make hidden elements pop up again

  document.querySelectorAll(els).forEach((el) => {
    if (xYDirect == "x") {
      if (xYNum == -1) {
        // Right
        el.style.visibility = "hidden";
        el.style.opacity = 0;
        el.style.transform = "translateX(-200px)";
      }

      if (xYNum == 1) {
        // Left
        el.style.visibility = "hidden";
        el.style.opacity = 0;
        el.style.transform = "translateX(200px)";
      }
    }

    if (xYDirect == "y") {
      if (xYNum == -1) {
        // Up
        el.style.visibility = "hidden";
        el.style.opacity = 0;
        el.style.transform = "translateY(-200px)";
      }

      if (xYNum == 1) {
        // Down
        el.style.visibility = "hidden";
        el.style.opacity = 0;
        el.style.transform = "translateY(200px)";
      }
    }
  });
}

export default function TriggerExitAnimations() {
  document.querySelectorAll(".fade-in").forEach((fade) => {
    fade.style.opacity = 0;
    fade.style.visibility = "hidden";
  });

  exitAnimationType(".fade-left", "x", 1);
  exitAnimationType(".fade-right", "x", -1);
  exitAnimationType(".fade-down", "y", -1);
  exitAnimationType(".fade-up", "y", 1);
}
