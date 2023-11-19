/**
 *
 *  This is the Mobile Nav
 *
 */

import { useRouter } from "next/router";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import { BLUE_LOGO } from "@/assets/cdns/CDNImgs";

import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";
import ToggleMobileNav from "@/assets/functions/dom/togglers/ToggleMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav}`}>
      <div className={`${styles.mobile_nav_inner}`}>
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                {router.pathname !== "/" ? (
                  <div
                    style={{ cursor: "pointer" }}
                    className={`${styles.logo} half-second`}
                    onClick={() => {
                      TriggerPageExit();

                      setTimeout(() => {
                        router.push("/");
                      }, 600);
                    }}
                  >
                    <LazyLoadImage
                      alt="codingthefront: Company Logo."
                      title="codingthefront: Company Logo."
                      src={BLUE_LOGO}
                    />
                  </div>
                ) : (
                  <div
                    className={`${styles.logo} half-second`}
                    style={{ opacity: 0.5, pointerEvents: "none" }}
                  >
                    <LazyLoadImage
                      alt="codingthefront: Company Logo."
                      title="codingthefront: Company Logo."
                      src={BLUE_LOGO}
                    />
                  </div>
                )}
              </div>
            </div>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <ul className={`${styles.socials}`}>
                  <li>
                    <a
                      href="tel:+13368313432"
                      className="orientation-change-element half-second"
                    >
                      <FaPhoneAlt className={`${styles.icon}`} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailTo:codingthefront@gmail.com"
                      className="orientation-change-element half-second"
                    >
                      <MdMail className={`${styles.icon}`} />
                    </a>
                  </li>
                </ul>

                <button
                  id="mobileNavToggler"
                  onClick={() => {
                    ToggleMobileNav();
                  }}
                >
                  <span className="half-second orientation-change-element" />
                  <span className="half-second orientation-change-element" />
                  <span className="half-second orientation-change-element" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
