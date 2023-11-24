/**
 *
 *  This is the Index Top
 *
 */

import { useRouter } from "next/router";

import { FaReact, FaSass } from "react-icons/fa";
import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import { PIC_OF_ME } from "@/assets/cdns/CDNImgs";

import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAbout = () => {
  const router = useRouter();

  return (
    <section id="indexAbout" className={`${styles.index_about}`}>
      <div className={`${styles.index_about_inner}`}>
        <div className={`${styles.index_about_inner_box} container-fluid`}>
          <div className={`${styles.index_about_inner_row} row`}>
            <div
              className={`${styles.index_about_inner_side} ${styles.index_about_L} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_about_inner_side_cnt}`}>
                <div className={`${styles.img_holder} half-second`}>
                  {/**
                  <LazyLoadImage
                    src={PIC_OF_ME}
                    alt="codingthefront: Image of Parker (Owner of codingthefront)."
                    title="codingthefront: Image of Parker (Owner of codingthefront)."
                    className="orientation-change-element half-second"
                  />
                  */}

                  <LazyLoadBackgroundImage
                    style_className_MAIN={styles.bg}
                    style_className_PLACEHOLDER={styles.bg_placeholder}
                    image_url={PIC_OF_ME}
                    image_alt={
                      "codingthefront: Image of Parker (Owner of codingthefront)."
                    }
                  />

                  <div
                    className={`${styles.icon_holder} ${styles.react_icon} half-second`}
                  >
                    <FaReact className={`${styles.icon}`} />
                  </div>

                  <div
                    className={`${styles.icon_holder} ${styles.sass_icon} half-second`}
                  >
                    <FaSass className={`${styles.icon}`} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.index_about_inner_side} ${styles.index_about_R} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_about_inner_side_cnt}`}>
                <h2 className="orientation-change-element half-second">
                  ABOUT PARKER.
                </h2>

                <span
                  className={`${styles.bottom_text} orientation-change-element half-second`}
                >
                  The Owner of codingthefront
                </span>

                <p className="orientation-change-element half-second">
                  Wondering about the mastermind behind your project? I am
                  Parker, your skilled web developer with a wealth of
                  experience. Explore my portfolio to witness how I transform
                  concepts into compelling digital realities.
                </p>

                <a
                  href="/info"
                  className="orientation-change-element half-second"
                  onClick={(e) => {
                    e.preventDefault();

                    TriggerPageExit();

                    setTimeout(() => {
                      router.push("/info");
                    }, 500);
                  }}
                >
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
