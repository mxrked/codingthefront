/**
 *
 *  This is the contact top
 *
 */

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import { FADE_LEFT } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactTop = () => {
  // Scroll Fades
  const CONTACT_TOP_CONTROLS = useAnimation();
  const [CONTACT_TOP_REF, CONTACT_TOP_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (CONTACT_TOP_IN_VIEW) {
        CONTACT_TOP_CONTROLS.start("visible");
      }
    } else {
      CONTACT_TOP_CONTROLS.start("visible");
    }
  }, [CONTACT_TOP_CONTROLS, CONTACT_TOP_IN_VIEW]);

  return (
    <section id="contactTop" className={`${styles.contact_top}`}>
      <motion.div
        className={`fm-animate fade-left half-second`}
        initial="hidden"
        animate={CONTACT_TOP_CONTROLS}
        ref={CONTACT_TOP_REF}
        variants={FADE_LEFT}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className={`${styles.above_major} half-second`}>Want To</span>
        <h1 className="half-second">
          Contact Me<span>?</span>
        </h1>
        <p className="half-second">
          There are many different ways you can reach out to me, but the easiest
          and most straight-forward would be by using the contact form. You can
          also contact me via my social links.
        </p>

        <ul>
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
      </motion.div>
    </section>
  );
};
