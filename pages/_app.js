// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import NProgress from "nprogress";

// Data/Functions/Images Imports

// Component Imports

// Style Imports
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  //! Session/Local Storage Clearing
  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
  }, [router]);

  //! NProgress Init
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      NProgress.start();
    });

    window.addEventListener("load", () => {
      setTimeout(() => {
        NProgress.done();
      }, 500);
    });

    if (document.readyState === "complete") {
      NProgress.done();
      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";
    }

    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";
    });
  }, [router, router.events]);

  return (
    <AnimatePresence mode="wait" key={router.asPath}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
