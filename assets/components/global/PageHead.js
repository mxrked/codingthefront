/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

import {
  INDEX_KWS,
  INFO_KWS,
  CONTACT_KWS,
  PROJECTS_KWS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = () => {
  const router = useRouter();

  //! Descriptions
  const INDEX_DESC = "";
  const INFO_DESC = "";
  const CONTACT_DESC = "";
  const PROJECTS_DESC = "";

  const DESCS = [INDEX_DESC, INFO_DESC, CONTACT_DESC, PROJECTS_DESC];

  let desc;
  let kws;
  let title;
  let robots;
  let url;

  // Index Page
  if (router.pathname == "/") {
    title = "codingthefront - Home";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }

    kws = INDEX_KWS;
  }
  // Info Page
  if (router.pathname == "/info") {
    title = "codingthefront - About Me";
    robots = "index, follow";
    url = router.pathname;

    if (INFO_DESC.length > 0) {
      desc = DESCS[1];
    } else {
      desc = DESCS[1];
    }

    if (INFO_KWS.length > 0) {
      kws = INFO_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // Contact Page
  if (router.pathname == "/contact") {
    title = "codingthefront - Contact";
    robots = "index, follow";
    url = router.pathname;

    if (CONTACT_DESC.length > 0) {
      desc = DESCS[2];
    } else {
      desc = DESCS[2];
    }

    if (CONTACT_DESC.length > 0) {
      kws = CONTACT_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // Projects Page
  if (router.pathname == "/projects") {
    title = "codingthefront - My Projects";
    robots = "index, follow";
    url = router.pathname;

    if (PROJECTS_DESC.length > 0) {
      desc = DESCS[3];
    } else {
      desc = DESCS[3];
    }

    if (PROJECTS_DESC.length > 0) {
      kws = PROJECTS_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // 404 Page
  if (router.pathname == "/404") {
    title = "codingthefront - 404";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }

  return (
    <Head id="pageHead">
      <title>{title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />
      <meta
        name="google-site-verification"
        content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
      />

      <link rel="canonical" href={url} />

      <link
        rel="shortcut icon"
        href="https://raw.githubusercontent.com/mxrked/rtsyvisuals_cdn/main/icons/tab-icons/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://raw.githubusercontent.com/mxrked/rtsyvisuals_cdn/main/icons/tab-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://raw.githubusercontent.com/mxrked/rtsyvisuals_cdn/main/icons/tab-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://raw.githubusercontent.com/mxrked/rtsyvisuals_cdn/main/icons/tab-icons/favicon-16x16.png"
      />
    </Head>
  );
};
