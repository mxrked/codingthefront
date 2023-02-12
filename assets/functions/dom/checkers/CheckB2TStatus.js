/**
 *
 *  This is used to check the back to top btn status based on window.scrollY
 *
 */

export default function CheckB2TStatus() {
  const B2T = document.getElementById("b2T");

  if (window.scrollY <= 500) {
    B2T.style.bottom = "-100%"; // Hide B2T
  } else {
    B2T.style.bottom = "20px"; // Show B2T
  }
}
