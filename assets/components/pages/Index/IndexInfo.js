/**
 *
 *  This is the index info
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

// import { BITMOJI } from "../../../cdns/ICONS";
import { IMG_OF_ME } from "../../../cdns/IMGS";
import { FADE_LEFT } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import TriggerExitAnimations from "../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../functions/routing/PageRouting";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexInfo = () => {
  const router = useRouter();

  let infoRouted = false;

  // Scroll Fades
  const INDEX_INFO_CONTROLS = useAnimation();
  const [INDEX_INFO_REF, INDEX_INFO_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (INDEX_INFO_IN_VIEW) {
        INDEX_INFO_CONTROLS.start("visible");
      }
    } else {
      INDEX_INFO_CONTROLS.start("visible");
    }
  }, [INDEX_INFO_CONTROLS, INDEX_INFO_IN_VIEW]);

  return (
    <section id="indexInfo" className={`${styles.index_info}`}>
      <motion.div
        className={`${styles.index_info_inner} fm-animate fade-left half-second container-fluid`}
        initial="hidden"
        animate={INDEX_INFO_CONTROLS}
        ref={INDEX_INFO_REF}
        variants={FADE_LEFT}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className={`${styles.index_info_inner_row} row`}>
          <div
            className={`${styles.index_info_inner_side} ${styles.index_info_L} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
          >
            <div className={`${styles.index_info_side_cnt}`}>
              <span className={`${styles.above_major} half-second`}>
                Learn About
              </span>
              <h1 className="half-second">
                My Background<span>.</span>
              </h1>

              <p className="half-second">
                I am a passionate Front End Web Developer. During my years of
                learning the basics and mastering them, I have managed to create
                many wonderful projects for the user and I am always willing to
                start a project for anyone.
              </p>

              <div className={styles.links}>
                <div
                  className={`${styles.link} info-link half-second`}
                  onClick={() => {
                    TriggerExitAnimations();

                    setTimeout(() => {
                      PageRouting(router, "/info", infoRouted);
                    }, 1000);
                  }}
                >
                  <span>Learn More</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.index_info_inner_side} ${styles.index_info_R} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
          >
            <div className={`${styles.index_info_side_cnt}`}>
              {/**
                  <img
                data-src={BITMOJI}
                className="lazyload half-second"
                alt="Parker Phelps Snapchat Bitmoji"
              />
              */}

              <img
                data-src={IMG_OF_ME}
                className="lazyload half-second"
                alt="Image of Parker Phelps"
              />

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
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
