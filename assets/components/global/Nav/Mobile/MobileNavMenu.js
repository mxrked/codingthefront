/**
 *
 *  This is the Mobile Nav Menu
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaTimes } from "react-icons/fa";

import { WHITE_LOGO } from "@/assets/cdns/CDNImgs";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  return (
    <nav id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div
        id="mobileNavMenuDarken"
        className={`${styles.darken} full-second`}
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
            >
              <FaTimes className={`${styles.icon}`} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
