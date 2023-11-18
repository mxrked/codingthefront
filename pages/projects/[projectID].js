// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { LoadingScreen } from "@/assets/components/global/All/LoadingScreen";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

// Style Imports
import "../../assets/styles/modules/Projects/Projects.module.css";

export async function getServerSideProps() {
  // Connecting to DB
  try {
    const DB = await connectDatabase();

    if (!DB) {
      console.log("NO DATA!");

      return {
        props: {
          TOTAL_NUMBER_OF_IPS: 0,
        },
      };
    }

    // Checking if DB was connected
    if (DB) {
      console.log("Connected to DB!");
    }

    const TOTAL_NUMBER_OF_IPS = await DB.collection("ips").countDocuments();

    return {
      props: {
        TOTAL_NUMBER_OF_IPS,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
      },
    };
  }
}

export default function Project({ TOTAL_NUMBER_OF_IPS }) {
  const router = useRouter();

  const TITLE = "";
  const DESC = "";
  const KEYWORDS = [];
  const ROBOTS = "";
  const PARENT = "";

  useEffect(() => {
    console.log("Website Visits: " + TOTAL_NUMBER_OF_IPS);
  }, []);

  return (
    <div id="PAGE" className="page">
      <Head>
        <title>{TITLE}</title>

        <meta name="keywords" content={KEYWORDS} />
        <meta name="description" content={DESC} />
        <meta name="robots" content={ROBOTS} />
        <link rel="canonical" href={PARENT} />

        <link
          rel="icon"
          type="image/x-icon"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/favicon/favicon.ico"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/favicon/favicon-16x16.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/favicon/favicon-32x32.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/favicon/favicon-48x48.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/favicon/favicon-64x64.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/favicon/favicon-96x96.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/favicon/favicon-128x128.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/favicon/favicon-192x192.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/favicon/favicon-512x512.png"
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/apple-touch/apple-touch-icon-57x57.png"
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/apple-touch/apple-touch-icon-76x76.png"
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/apple-touch/apple-touch-icon-120x120.png"
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/apple-touch/apple-touch-icon-152x152.png"
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/apple-touch/apple-touch-icon-180x180.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/android/android-icon-72x72.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/android/android-icon-96x96.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/android/android-icon-144x144.png"
          }
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/android/android-icon-192x192.png"
          }
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/ms-app/ms-app-icon-32x32.png"
          }
        />
        <meta
          name="msapplication-square70x70logo"
          content={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/ms-app/ms-app-icon-70x70.png"
          }
        />
        <meta
          name="msapplication-square150x150logo"
          content={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/ms-app/ms-app-icon-150x150.png"
          }
        />
        <meta
          name="msapplication-wide310x150logo"
          content={
            "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/icons/tab-icons/ms-app/ms-app-icon-310x150.png"
          }
        />
      </Head>
      <LoadingScreen />

      <div id="PAGE_CNT" className="page-cnt">
        <DesktopNav />
        <MobileNav />
        <MobileNavMenu />
      </div>
    </div>
  );
}
