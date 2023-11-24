/**
 *
 *  This is the Mobile Nav Menu
 *
 */

import { useRouter } from "next/router";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaTimes } from "react-icons/fa";

import { WHITE_LOGO } from "@/assets/cdns/CDNImgs";

import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";
import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  const router = useRouter();

  return (
    <nav id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div
        id="mobileNavMenuDarken"
        className={`${styles.darken} full-second`}
        onClick={() => {
          CloseMobileNav();
        }}
      />

      <div
        id="mobileNavMenuMain"
        className={`${styles.mobile_nav_menu_main} full-second`}
      >
        <div
          id="mobileNavMenuMainCnt"
          className={`${styles.mobile_nav_menu_main_cnt} half-second`}
        >
          <div className={`${styles.mobile_nav_menu_main_cnt_top}`}>
            {/**
             */}

            <LazyLoadImage
              alt="codingthefront: Company Logo."
              title="codingthefront: Company Logo."
              className="orientation-change-element half-second"
              src={WHITE_LOGO}
            />

            <button
              id="mobileNavMenuCloser"
              className="orientation-change-element half-second"
              onClick={() => {
                CloseMobileNav();
              }}
            >
              <FaTimes className={`${styles.icon}`} />
            </button>
          </div>

          <div className={`${styles.mobile_nav_menu_main_cnt_main}`}>
            <ul>
              <li>
                {router.pathname !== "/" ? (
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();

                      CloseMobileNav();

                      setTimeout(() => {
                        TriggerPageExit();
                      }, 1500);

                      setTimeout(() => {
                        router.push("/");
                      }, 1800);
                    }}
                  >
                    <span className="orientation-change-element half-second">
                      Home
                      <span className="half-second" />
                    </span>
                  </a>
                ) : (
                  <span
                    className="orientation-change-element half-second"
                    style={{ opacity: 0.5, pointerEvents: "none" }}
                  >
                    Home
                  </span>
                )}
              </li>
              <li className={`${styles.mobile_nav_menu_projects_li}`}>
                {router.pathname !== "/projects" ? (
                  <a
                    href="/projects"
                    onClick={(e) => {
                      e.preventDefault();

                      CloseMobileNav();

                      setTimeout(() => {
                        TriggerPageExit();
                      }, 1500);

                      setTimeout(() => {
                        router.push("/projects");
                      }, 1800);
                    }}
                  >
                    <span className="orientation-change-element half-second">
                      Projects
                      <span className="half-second" />
                    </span>
                  </a>
                ) : (
                  <span
                    className="orientation-change-element half-second"
                    style={{ opacity: 0.5, pointerEvents: "none" }}
                  >
                    Projects
                  </span>
                )}
              </li>
              <li>
                {router.pathname !== "/services" ? (
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();

                      CloseMobileNav();

                      setTimeout(() => {
                        TriggerPageExit();
                      }, 1500);

                      setTimeout(() => {
                        router.push("/services");
                      }, 1800);
                    }}
                  >
                    <span>
                      Services
                      <span className="half-second" />
                    </span>
                  </a>
                ) : (
                  <span
                    className="orientation-change-element half-second"
                    style={{ opacity: 0.5, pointerEvents: "none" }}
                  >
                    Services
                  </span>
                )}
              </li>
              <li>
                {router.pathname !== "/info" ? (
                  <a
                    href="/info"
                    onClick={(e) => {
                      e.preventDefault();

                      CloseMobileNav();

                      setTimeout(() => {
                        TriggerPageExit();
                      }, 1500);

                      setTimeout(() => {
                        router.push("/info");
                      }, 1800);
                    }}
                  >
                    <span className="orientation-change-element half-second">
                      About
                      <span className="half-second" />
                    </span>
                  </a>
                ) : (
                  <span
                    className="orientation-change-element half-second"
                    style={{ opacity: 0.5, pointerEvents: "none" }}
                  >
                    About
                  </span>
                )}
              </li>
              <li>
                {router.pathname !== "/contact" ? (
                  <a
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();

                      CloseMobileNav();

                      setTimeout(() => {
                        TriggerPageExit();
                      }, 1500);

                      setTimeout(() => {
                        router.push("/contact");
                      }, 1800);
                    }}
                  >
                    <span className="orientation-change-element half-second">
                      Contact
                      <span className="half-second" />
                    </span>
                  </a>
                ) : (
                  <span
                    className="orientation-change-element half-second"
                    style={{ opacity: 0.5, pointerEvents: "none" }}
                  >
                    Contact
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
