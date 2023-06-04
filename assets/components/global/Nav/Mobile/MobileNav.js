/**
 *
 *  This is the Mobile Nav
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaCode } from "react-icons/fa";

import { BG_GRADIENT } from "@/assets/cdns/CDNBgs";
import { FADE_IN } from "@/assets/animations/FADES";

import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
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
      document.getElementById("mobileNav").style.position = "relative";
      document.getElementById("mobileNavInner").style.backgroundImage =
        "url(" + BG_GRADIENT + ")";
    }
  }, [router]);

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav} mobile-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.mobile_nav_inner}`} id="mobileNavInner">
          <div className={`${styles.mobile_nav_inner_cnt}`}>
            <div className={`${styles.logo}`}>
              <a href="/" className="index-link half-second">
                <FaCode className={`${styles.icon}`} />

                <span>codingthefront</span>
              </a>
            </div>

            <button
              id="mobileNavToggler"
              onClick={() => {
                const DARKEN = document.getElementById("mobileNavDarken");
                const MAIN = document.getElementById("mobileNavMain");
                const CNT = document.getElementById("mobileNavMainCnt");

                DeclareStorageVariable("session", "Mobile Nav Opened", true);

                document.body.style.pointerEvents = "none";
                document.body.style.overflowY = "hidden";

                setTimeout(() => {
                  DARKEN.style.opacity = 1;
                  DARKEN.style.visibility = "visible";
                }, 500);

                setTimeout(() => {
                  MAIN.style.transform = "translateX(0)";
                }, 850);

                setTimeout(() => {
                  CNT.style.opacity = 1;
                  CNT.style.visibility = "visible";
                }, 1600);

                setTimeout(() => {
                  DARKEN.style.pointerEvents = "auto";
                  MAIN.style.pointerEvents = "auto";
                  MAIN.style.overflowY = "auto";
                }, 2000);
              }}
            >
              <span className="half-second" />
              <span className="half-second" />
              <span className="half-second" />
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
