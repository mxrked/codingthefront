/**
 *
 *  This is the desktop nav
 *
 */

import { useRouter } from "next/router";

import { motion } from "framer-motion";

import { NavLogo } from "../Both/NavLogo";
import { ResumeToggler } from "../Both/ResumeToggler";

import TriggerExitAnimations from "../../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../../functions/routing/PageRouting";

import { FADE_DOWN } from "../../../../animations/FRAMER_MOTION_ANIMATIONS";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  let indexRouted,
    infoRouted,
    projectsRouted,
    contactRouted = false;

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav} nav`}>
      <motion.div
        className={`${styles.nav_box} fm-animate fade-down half-second container-fluid`}
        initial="hidden"
        animate="visible"
        variants={FADE_DOWN}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <div className={`${styles.nav_row} row`}>
          <div
            className={`${styles.nav_side} ${styles.nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
          >
            <div className={styles.nav_side_cnt}>
              <NavLogo />
            </div>
          </div>
          <div
            className={`${styles.nav_side} ${styles.nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
          >
            <div className={styles.nav_side_cnt}>
              <ul>
                <li
                  className="index-link half-second"
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/", indexRouted);
                    }, 1000);
                  }}
                >
                  <span className="half-second">Home</span>
                  <div className="half-second" />
                </li>
                <li
                  className="info-link half-second"
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/info", infoRouted);
                    }, 1000);
                  }}
                >
                  <span className="half-second">Info</span>
                  <div className="half-second" />
                </li>
                <li
                  className="projects-link half-second"
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/projects", projectsRouted);
                    }, 1000);
                  }}
                >
                  <span className="half-second">Projects</span>
                  <div className="half-second" />
                </li>
                <li
                  className="contact-link half-second"
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/contact", contactRouted);
                    }, 1000);
                  }}
                >
                  <span className="half-second">Contact</span>
                  <div className="half-second" />
                </li>
              </ul>

              <ResumeToggler />
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
