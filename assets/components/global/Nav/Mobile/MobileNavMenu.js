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
                  <span
                    className="orientation-change-element half-second"
                    onClick={() => {
                      CloseMobileNav();

                      setTimeout(() => {
                        TriggerPageExit();
                      }, 1500);

                      setTimeout(() => {
                        router.push("/");
                      }, 1900);
                    }}
                  >
                    Home
                    <span className="half-second" />
                  </span>
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
                  <span
                    className="orientation-change-element half-second"
                    onClick={() => {
                      CloseMobileNav();

                      setTimeout(() => {
                        TriggerPageExit();
                      }, 1500);

                      setTimeout(() => {
                        router.push("/projects");
                      }, 1900);
                    }}
                  >
                    Projects
                    <span className="half-second" />
                  </span>
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
                  <span
                    className="orientation-change-element half-second"
                    onClick={() => {
                      CloseMobileNav();

                      setTimeout(() => {
                        TriggerPageExit();
                      }, 1500);

                      setTimeout(() => {
                        router.push("/services");
                      }, 1900);
                    }}
                  >
                    Services
                    <span className="half-second" />
                  </span>
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
                  <span
                    className="orientation-change-element half-second"
                    onClick={() => {
                      CloseMobileNav();

                      setTimeout(() => {
                        TriggerPageExit();
                      }, 1500);

                      setTimeout(() => {
                        router.push("/info");
                      }, 1900);
                    }}
                  >
                    About
                    <span className="half-second" />
                  </span>
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
                  <span
                    className="orientation-change-element half-second"
                    onClick={() => {
                      CloseMobileNav();

                      setTimeout(() => {
                        TriggerPageExit();
                      }, 1500);

                      setTimeout(() => {
                        router.push("/contact");
                      }, 1900);
                    }}
                  >
                    Contact
                    <span className="half-second" />
                  </span>
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
