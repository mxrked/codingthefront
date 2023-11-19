/**
 *
 *  This is used to toggle the mobile nav menu
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleMobileNav() {
  const MENU = document.getElementById("mobileNavMenu");
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MENU_MAIN = document.getElementById("mobileNavMenuMain");
  const MENU_MAIN_CNT = document.getElementById("mobileNavMenuMainCnt");

  DeclareStorageVariable("session", "Mobile Nav Opened", true);

  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";

  MENU.style.display = "block";

  setTimeout(() => {
    DARKEN.style.opacity = 1;
    DARKEN.style.visibility = "visible";
  }, 400);

  setTimeout(() => {
    MENU_MAIN.style.transform = "translateX(0)";
  }, 650);

  setTimeout(() => {
    MENU_MAIN_CNT.style.opacity = 1;
    MENU_MAIN_CNT.style.visibility = "visible";
  }, 1200);

  setTimeout(() => {
    MENU.style.pointerEvents = "auto";
    MENU.style.overflowY = "auto";
  }, 1700);
}
