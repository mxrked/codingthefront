/**
 *
 *  This is the mobile nav
 *
 */

import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";
import ReturnElementTopPos from "@/assets/functions/dom/returns/ReturnElementTopPos";

import styles from "../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  return (
    <nav id="mobileNav" className={`${styles.mobile_nav}`}>
      <div
        id="mobileNavInner"
        className={`${styles.mobile_nav_inner} fade-up full-second`}
      >
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <h1>codingthefront</h1>
            </div>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div>
                <span className="mobile-nav-links-toggler-span half-second" />
                <span className="mobile-nav-links-toggler-span half-second" />
                <span className="mobile-nav-links-toggler-span half-second" />

                <input
                  type="checkbox"
                  id="mobileNavLinksCB"
                  onChange={(e) => {
                    if (e.currentTarget.checked) {
                      const MOBILE_NAV_LINKS =
                        document.getElementById("mobileNavLinks");

                      MOBILE_NAV_LINKS.style.height = "150px";

                      document.querySelectorAll(
                        ".mobile-nav-links-toggler-span"
                      )[0].style.width = "50%";
                      document.querySelectorAll(
                        ".mobile-nav-links-toggler-span"
                      )[2].style.width = "50%";
                    } else {
                      CloseMobileNav();
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul id="mobileNavLinks" className="half-second">
        <li
          className="half-second"
          onClick={() => {
            CloseMobileNav();

            const Y = ReturnElementTopPos("info", window);
            window.scrollTo({ top: Y });
          }}
        >
          <span>Info</span>
        </li>
        <li
          className="half-second"
          onClick={() => {
            CloseMobileNav();

            const Y = ReturnElementTopPos("projects", window);
            window.scrollTo({ top: Y });
          }}
        >
          <span>Projects</span>
        </li>
        <li
          className="half-second"
          onClick={() => {
            CloseMobileNav();

            const Y = ReturnElementTopPos("contact", window);
            window.scrollTo({ top: Y });
          }}
        >
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
};
