/**
 *
 *  This is to close the mobile nav
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseMobileNav() {
  const MENU = document.getElementById("mobileNavMenu");
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MENU_MAIN = document.getElementById("mobileNavMenuMain");
  const MENU_MAIN_CNT = document.getElementById("mobileNavMenuMainCnt");

  MENU.style.pointerEvents = "none";
  MENU.style.overflowY = "hidden";

  setTimeout(() => {
    MENU_MAIN_CNT.style.opacity = 0;
    MENU_MAIN_CNT.style.visibility = "hidden";
  }, 600);

  setTimeout(() => {
    MENU_MAIN.style.transform = "translateX(100%)";
    DARKEN.style.opacity = 0;
    DARKEN.style.visibility = "hidden";
  }, 800);

  setTimeout(() => {
    RemoveStorageVariable("session", "Mobile Nav Opened");
    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  }, 1100);
}
