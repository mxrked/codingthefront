/**
 *
 *  This is the resume toggler
 *
 */

import DeclareStorageValue from "../../../../functions/data/storages/DeclareStorageValue";
import ManipElementOpacVis from "../../../../functions/dom/manip/ManipElementOpacVis";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const ResumeToggler = () => {
  return (
    <button
      id="resumeToggler"
      className={`${styles.resume_toggler} resume-toggler half-second`}
      onClick={() => {
        DeclareStorageValue("session", "Resume Opened", true);

        document.body.style.overflowY = "hidden";
        document.body.style.pointerEvents = "none";

        document.querySelector(".page-main-cnt").style.opacity = 0.3;

        setTimeout(() => {
          // document.getElementById("resume").style.opacity = 1;
          // document.getElementById("resume").style.visibility = "visible";

          ManipElementOpacVis(document.getElementById("resume"), true);
        }, 400);

        setTimeout(() => {
          ManipElementOpacVis(document.getElementById("resumeCnt"), true);
        }, 950);

        setTimeout(() => {
          document.getElementById("resume").style.overflowY = "auto";
          document.getElementById("resume").style.pointerEvents = "auto";
        }, 1100);
      }}
    >
      <span className="half-second">Resume</span>
    </button>
  );
};
