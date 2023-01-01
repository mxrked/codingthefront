/**
 *
 *  This is used to either hide/show a element based on its opacity and visibility properties
 *
 */

export default function ManipElementOpacVis(element, status) {
  if (status) {
    element.style.opacity = 1;
    element.style.visibility = "visible";
  }

  if (!status) {
    element.style.opacity = 0;
    element.style.visibility = "hidden";
  }
}
