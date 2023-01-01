/**
 *
 *  This is the nav logo
 *
 */

import { useRouter } from "next/router";

import TriggerExitAnimations from "../../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../../functions/routing/PageRouting";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const NavLogo = () => {
  const router = useRouter();

  let indexRouted = false;

  return (
    <div
      id="navLogo"
      className={`${styles.nav_logo} nav-logo index-link half-second`}
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
  );
};
