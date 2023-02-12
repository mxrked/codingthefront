/**
 *
 *  This is to close the mobile nav
 *
 */

export default function CloseMobileNav() {
  const MOBILE_NAV_LINKS = document.getElementById("mobileNavLinks");
  const MOBILE_NAV_LINKS_CB = document.getElementById("mobileNavLinksCB");

  document
    .querySelectorAll(".mobile-nav-links-toggler-span")
    .forEach((span) => {
      span.style.width = "100%";
    });

  MOBILE_NAV_LINKS_CB.checked = false;
  MOBILE_NAV_LINKS.style.height = 0;
}
