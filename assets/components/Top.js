/**
 *
 *  This is the top
 *
 */

import styles from "../styles/modules/Index/Index.module.css";

import { BackgroundImage } from "react-image-and-background-image-fade";

import { TOP_BG } from "../cdns/CDNBgs";

export const Top = () => {
  return (
    <section id="top" className={`${styles.top}`}>
      <BackgroundImage
        src={TOP_BG}
        width="100%"
        height="100%"
        className={`${styles.bg}`}
      />

      <div className={`${styles.top_overlay}`}>
        <div
          id="topCnt"
          className={`${styles.top_overlay_cnt} fade-down full-second`}
        >
          <span className={`${styles.above_heading}`}>Hi there.</span>

          <h1 className={`${styles.heading_1}`}>My name is Parker Phelps.</h1>
          <h1 className={`${styles.heading_2}`}>
            I am a <span>Front End Developer</span>.
          </h1>

          <div className={`${styles.jumpers}`}>
            <div
              className={`${styles.jumper_1} half-second`}
              onClick={() => {
                document.getElementById("projects").scrollIntoView();
              }}
            >
              <span className="half-second">Current Projects</span>
            </div>
            <div
              className={`${styles.jumper_2} half-second`}
              onClick={() => {
                document.getElementById("info").scrollIntoView();
              }}
            >
              <span className="half-second">About Me</span>
            </div>
          </div>

          <div className={`${styles.scroll_hint}`}>
            <div />

            <span>SCROLL DOWN</span>

            <div />
          </div>
        </div>
      </div>
    </section>
  );
};
