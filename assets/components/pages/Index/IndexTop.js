/**
 *
 *  This is the Index Top
 *
 */

import { useRouter } from "next/router";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import { TOP_VIDEO, TOP_VIDEO_POSTER } from "@/assets/cdns/CDNVideos";
import { DIVIDER_TOP_WAVE_WHITE } from "@/assets/cdns/CDNSVGs";

import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

import { LazyLoadVideo } from "../../global/All/LazyLoadVideo";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const router = useRouter();

  const OVERLAY_TITLE = "codingthefront: Blue polygon and triangles video.";

  return (
    <section id="indexTop" className={`${styles.index_top}`}>
      <div className={`${styles.index_top_main}`}>
        {/**
          <Suspense
          fallback={() => {
            <div>Loading..</div>;
          }}
        >
          <LazyLoadVideo />
        </Suspense>
        */}

        <LazyLoadVideo
          videoSrc={TOP_VIDEO}
          videoStyle={styles.video}
          videoID="indexTopVideo"
          // videoPoster={TOP_VIDEO_POSTER}
        />

        <div
          id="indexTopMainOverlay"
          className={`${styles.index_top_main_overlay}`}
          title="codingthefront: Blue polygon and triangles video."
        >
          <div className={`${styles.index_top_main_overlay_cnt}`}>
            <span
              className={`${styles.top_text} orientation-change-element half-second`}
            >
              Winston-Salem, Greensboro,
              <br /> High Point, Mt. Airy
            </span>
            <h1 className="orientation-change-element half-second">
              WEB DEVELOPER/
              <br />
              DESIGNER.
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
                onClick={() => {
                  TriggerPageExit();

                  setTimeout(() => {
                    router.push("/contact");
                  }, 500);
                }}
                onMouseEnter={() => {
                  document.getElementById("indexTopMainOverlay").title = "";
                }}
                onMouseLeave={() => {
                  document.getElementById("indexTopMainOverlay").title =
                    OVERLAY_TITLE;
                }}
              >
                <span>Book A Project</span>
              </li>
              <br />
              <li
                className={`${styles.projects_link} orientation-change-element half-second`}
                onClick={() => {
                  TriggerPageExit();

                  setTimeout(() => {
                    router.push("/projects");
                  }, 500);
                }}
                onMouseEnter={() => {
                  document.getElementById("indexTopMainOverlay").title = "";
                }}
                onMouseLeave={() => {
                  document.getElementById("indexTopMainOverlay").title =
                    OVERLAY_TITLE;
                }}
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
