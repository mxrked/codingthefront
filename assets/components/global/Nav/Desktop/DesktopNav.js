/**
 *
 *  This is the Desktop Nav
 *
 */

import { useRouter } from "next/router";

import { BLUE_LOGO } from "@/assets/cdns/CDNImgs";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav}`}>
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                {router.pathname !== "/" ? (
                  <div
                    style={{ cursor: "pointer" }}
                    className={`${styles.logo} half-second`}
                  >
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();

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
                    </a>
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
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <ul className={`${styles.links}`}>
                  <li>
                    {router.pathname !== "/" ? (
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();

                          TriggerPageExit();

                          setTimeout(() => {
                            router.push("/");
                          }, 600);
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

                          TriggerPageExit();

                          setTimeout(() => {
                            router.push("/projects");
                          }, 600);
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

                          TriggerPageExit();

                          setTimeout(() => {
                            router.push("/services");
                          }, 600);
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

                          TriggerPageExit();

                          setTimeout(() => {
                            router.push("/info");
                          }, 600);
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

                          TriggerPageExit();

                          setTimeout(() => {
                            router.push("/contact");
                          }, 600);
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
