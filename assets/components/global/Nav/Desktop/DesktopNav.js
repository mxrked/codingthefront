/**
 *
 *  This is the Desktop Nav
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaCode } from "react-icons/fa";

import { BG_GRADIENT } from "@/assets/cdns/CDNBgs";
import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  //! Adding background gradient and setting position to relative on certain pages
  useEffect(() => {
    if (
      router.pathname == "/info" ||
      router.pathname == "/projects" ||
      router.pathname == "/contact"
    ) {
      document.getElementById("desktopNav").style.position = "relative";
      document.getElementById("desktopNavInner").style.backgroundImage =
        "url(" + BG_GRADIENT + ")";
    }
  }, [router]);

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav} desktop-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.desktop_nav_inner}`} id="desktopNavInner">
          <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
            <div className={`${styles.desktop_nav_inner_row} row`}>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <div className={`${styles.logo}`}>
                    <a href="/" className="half-second index-link">
                      <FaCode className={`${styles.icon}`} />

                      <span>codingthefront</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <ul>
                    <li>
                      <a href="/" className="index-link half-second">
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="/projects" className="projects-link half-second">
                        <span>Projects</span>
                      </a>
                    </li>
                    <li>
                      <a href="/info" className="info-link half-second">
                        <span>Info</span>
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="contact-link half-second">
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
