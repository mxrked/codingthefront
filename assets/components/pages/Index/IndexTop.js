/**
 *
 *  This is the Index Top
 *
 */

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import { TOP_VIDEO, TOP_VIDEO_POSTER } from "@/assets/cdns/CDNVideos";
import { DIVIDER_TOP_WAVE_WHITE } from "@/assets/cdns/CDNSVGs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  return (
    <section id="indexTop" className={`${styles.index_top}`}>
      <div className={`${styles.index_top_main}`}>
        <video
          // controls
          autoPlay
          loop
          muted
          src={TOP_VIDEO}
          poster={TOP_VIDEO_POSTER}
          className={styles.video}
        />

        <div className={`${styles.index_top_main_overlay}`}>
          <div className={`${styles.index_top_main_overlay_cnt}`}>
            <span
              className={`${styles.top_text} orientation-change-element half-second`}
            >
              Winston-Salem, Greensboro, High Point, Mt. Airy
            </span>
            <h1 className="orientation-change-element half-second">
              WEB DEVELOPER/DESIGNER.
            </h1>

            <p className="orientation-change-element half-second">
              Hey, I'm Parker, the force behind Codingthefront. Your top-rated
              web developer in Winston-Salem, Greensboro, High Point, and Mt.
              Airy. Need Affordable Web Design?
              <br />
              Look no further—I'll bring your digital dreams to life.
            </p>

            <ul>
              <li
                className={`${styles.contact_link} orientation-change-element half-second`}
              >
                <span>Book A Project</span>
              </li>
              <li
                className={`${styles.projects_link} orientation-change-element half-second`}
              >
                <span>My Projects</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.divider_holder}`}>
        <LazyLoadBackgroundImage
          image_url={DIVIDER_TOP_WAVE_WHITE}
          image_alt={"codingthefront: SVG of a white wave."}
          style_className_MAIN={styles.bg}
          style_className_PLACEHOLDER={styles.bg_placeholder}
        />
      </div>
    </section>
  );
};
