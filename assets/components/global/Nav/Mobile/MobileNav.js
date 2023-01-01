/**
 *
 *  This is the mobile nav
 *
 */

import { useRouter } from "next/router";

import { motion } from "framer-motion";

import TriggerExitAnimations from "../../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../../functions/routing/PageRouting";
import ToggleMobileNavLinks from "../../../../functions/dom/togglers/ToggleMobileNavLinks";
import CloseMobileNavLinks from "../../../../functions/dom/closers/CloseMobileNavLinks";

import { NavLogo } from "../Both/NavLogo";
import { ResumeToggler } from "../Both/ResumeToggler";

import { FADE_DOWN } from "../../../../animations/FRAMER_MOTION_ANIMATIONS";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  let indexRouted,
    infoRouted,
    projectsRouted,
    contactRouted = false;

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav} nav`}>
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
              <ResumeToggler />

              <div>
                <input
                  type="checkbox"
                  id="mobileNavToggler"
                  onChange={(e) => {
                    if (e.currentTarget.checked) {
                      ToggleMobileNavLinks("200px");
                    }

                    if (!e.currentTarget.checked) {
                      CloseMobileNavLinks();
                    }
                  }}
                />

                <span className="half-second" />
                <span className="half-second" />
                <span className="half-second" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <ul
        id="mobileNavLinks"
        className={`${styles.mobile_nav_links} half-second`}
      >
        <li
          className="half-second index-link"
          onClick={() => {
            CloseMobileNavLinks();
            setTimeout(() => {
              TriggerExitAnimations();
            }, 220);
            setTimeout(() => {
              PageRouting(router, "/", indexRouted);
            }, 1000);
          }}
        >
          <span>Home</span>
        </li>
        <li
          className="half-second info-link"
          onClick={() => {
            CloseMobileNavLinks();
            setTimeout(() => {
              TriggerExitAnimations();
            }, 220);
            setTimeout(() => {
              PageRouting(router, "/info", infoRouted);
            }, 1000);
          }}
        >
          <span>Info</span>
        </li>
        <li
          className="half-second projects-link"
          onClick={() => {
            CloseMobileNavLinks();
            setTimeout(() => {
              TriggerExitAnimations();
            }, 220);
            setTimeout(() => {
              PageRouting(router, "/projects", projectsRouted);
            }, 1000);
          }}
        >
          <span>Projects</span>
        </li>
        <li
          className="half-second contact-link"
          onClick={() => {
            CloseMobileNavLinks();
            setTimeout(() => {
              TriggerExitAnimations();
            }, 220);
            setTimeout(() => {
              PageRouting(router, "/contact", contactRouted);
            }, 1000);
          }}
        >
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
};
