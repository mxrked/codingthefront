/**
 *
 *  This is used to check the b2t button
 *
 */

export default function CheckPageB2TStatus() {
  const PAGE_B2T = document.querySelector(".page-b2t");

  if (window.scrollY <= 100) {
    PAGE_B2T.style.bottom = "-100px";
  }

  if (window.scrollY > 100) {
    PAGE_B2T.style.bottom = "15px";
  }
}
