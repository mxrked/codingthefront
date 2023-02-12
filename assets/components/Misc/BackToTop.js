/**
 *
 *  This is the page back to top btn
 *
 */

import { useEffect } from "react";

import { FaChevronUp } from "react-icons/fa";

import CheckB2TStatus from "@/assets/functions/dom/checkers/CheckB2TStatus";

import styles from "../../styles/modules/Misc/Misc.module.css";

export const BackToTop = () => {
  //! Checking status
  useEffect(() => {
    window.addEventListener("scroll", () => {
      CheckB2TStatus();
    });

    window.addEventListener("load", () => {
      CheckB2TStatus();
    });
  }, []);

  return (
    <div id="b2T" className={`${styles.backToTop} full-second`}>
      <button
        className="half-second"
        onClick={(e) => {
          window.scrollTo(0, 0);
        }}
      >
        <FaChevronUp className={styles.icon} />
      </button>
    </div>
  );
};
