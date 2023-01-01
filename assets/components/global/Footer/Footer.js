/**
 *
 *  This is the desktop nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import { FADE_IN } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import TriggerExitAnimations from "../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../functions/routing/PageRouting";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = () => {
  const router = useRouter();

  let indexRouted,
    infoRouted,
    projectsRouted,
    contactRouted = false;

  // Scroll Fades
  const FOOTER_CONTROLS = useAnimation();
  const [FOOTER_REF, FOOTER_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (FOOTER_IN_VIEW) {
        FOOTER_CONTROLS.start("visible");
      }
    } else {
      FOOTER_CONTROLS.start("visible");
    }
  }, [FOOTER_CONTROLS, FOOTER_IN_VIEW]);

  return (
    <footer className={`${styles.footer}`}>
      <motion.div
        className={`${styles.footer_inner} fm-animate fade-in half-second`}
        initial="hidden"
        animate={FOOTER_CONTROLS}
        ref={FOOTER_REF}
        variants={FADE_IN}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div
          className={`${styles.logo} half-second index-link`}
          onClick={() => {
            TriggerExitAnimations();

            setTimeout(() => {
              PageRouting(router, "/", indexRouted);
            }, 1000);
          }}
        >
          <h1 className="half-second">
            codingthefront<span>.</span>
          </h1>
        </div>

        <ul className={styles.links}>
          <li
            className="half-second index-link"
            onClick={() => {
              TriggerExitAnimations();

              setTimeout(() => {
                PageRouting(router, "/", indexRouted);
              }, 1000);
            }}
          >
            <span className="half-second">Home</span>
          </li>
          <li
            className="half-second info-link"
            onClick={() => {
              TriggerExitAnimations();

              setTimeout(() => {
                PageRouting(router, "/info", infoRouted);
              }, 1000);
            }}
          >
            <span className="half-second">Info</span>
          </li>
          <li
            className="half-second projects-link"
            onClick={() => {
              TriggerExitAnimations();

              setTimeout(() => {
                PageRouting(router, "/projects", projectsRouted);
              }, 1000);
            }}
          >
            <span className="half-second">Projects</span>
          </li>
          <li
            className="half-second contact-link"
            onClick={() => {
              TriggerExitAnimations();

              setTimeout(() => {
                PageRouting(router, "/contact", contactRouted);
              }, 1000);
            }}
          >
            <span className="half-second">Contact</span>
          </li>
        </ul>

        <ul className={styles.socials}>
          <li>
            <a
              href="https://twitter.com/Parker101P"
              target={"_blank"}
              className="half-second"
            >
              <FaTwitter className={styles.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/parker.phelps.144"
              target={"_blank"}
              className="half-second"
            >
              <FaFacebook className={styles.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mxrked"
              target={"_blank"}
              className="half-second"
            >
              <FaGithub className={styles.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/parker-phelps-a121501b6/"
              target={"_blank"}
              className="half-second"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </li>
        </ul>

        <ul className={styles.contact}>
          <li className="half-second">pp101socials@gmail.com</li>
          <li className="half-second">codingthefront101@gmail.com</li>
          <li className="half-second">+1 (336) 831-3432</li>
        </ul>
      </motion.div>
    </footer>
  );
};
