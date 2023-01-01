/**
 *
 *  This is the page B2T button
 *
 */

import { useEffect } from "react";

import { FaCaretUp } from "react-icons/fa";

import CheckPageB2TStatus from "../../../functions/dom/checkers/CheckPageB2TStatus";

import styles from "../../../styles/modules/Misc/Misc.module.css";

export const PageB2T = () => {
  useEffect(() => {
    window.addEventListener("load", CheckPageB2TStatus);
    window.addEventListener("scroll", CheckPageB2TStatus);
  }, []);

  return (
    <button className={`${styles.page_b2t} half-second page-b2t`}>
      <div
        id="pageB2T"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FaCaretUp className={styles.icon} />
      </div>
    </button>
  );
};
