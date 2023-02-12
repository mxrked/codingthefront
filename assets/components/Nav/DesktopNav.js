/**
 *
 *  This is the desktop nav
 *
 */

import styles from "../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  return (
    <nav id="desktopNav" className={`${styles.desktop_nav}`}>
      <div
        id="desktopNavInner"
        className={`${styles.desktop_nav_inner} fade-up full-second`}
      >
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <h1 className="half-second">codingthefront</h1>
            </div>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <ul>
                <li
                  className="desktop-nav-link half-second"
                  onClick={() => {
                    document.getElementById("info").scrollIntoView();
                  }}
                  onMouseEnter={(e) => {
                    document
                      .querySelectorAll(".desktop-nav-link")
                      .forEach((link) => {
                        link.style.opacity = 0.5;
                      });

                    e.currentTarget.style.opacity = 1;
                  }}
                  onMouseLeave={() => {
                    document
                      .querySelectorAll(".desktop-nav-link")
                      .forEach((link) => {
                        link.style.opacity = 1;
                      });
                  }}
                >
                  <span>Info</span>
                </li>
                <li
                  className="desktop-nav-link half-second"
                  onClick={() => {
                    document.getElementById("projects").scrollIntoView();
                  }}
                  onMouseEnter={(e) => {
                    document
                      .querySelectorAll(".desktop-nav-link")
                      .forEach((link) => {
                        link.style.opacity = 0.5;
                      });

                    e.currentTarget.style.opacity = 1;
                  }}
                  onMouseLeave={() => {
                    document
                      .querySelectorAll(".desktop-nav-link")
                      .forEach((link) => {
                        link.style.opacity = 1;
                      });
                  }}
                >
                  <span>Projects</span>
                </li>
                <li
                  className="desktop-nav-link half-second"
                  onClick={() => {
                    document.getElementById("contact").scrollIntoView();
                  }}
                  onMouseEnter={(e) => {
                    document
                      .querySelectorAll(".desktop-nav-link")
                      .forEach((link) => {
                        link.style.opacity = 0.5;
                      });

                    e.currentTarget.style.opacity = 1;
                  }}
                  onMouseLeave={() => {
                    document
                      .querySelectorAll(".desktop-nav-link")
                      .forEach((link) => {
                        link.style.opacity = 1;
                      });
                  }}
                >
                  <span>Contact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
