/**
 *
 *  This is used to grab and return an elements offset top Y coord
 *
 */

export default function ReturnElementTopPos(element, window) {
  const Y_OFFSET = -120;
  const ELEMENT = document.getElementById(element);
  const Y = ELEMENT.getBoundingClientRect().top + window.pageYOffset + Y_OFFSET;

  return Y;
}
