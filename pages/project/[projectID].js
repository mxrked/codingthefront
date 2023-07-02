/**
 *
 *  This is the samples page
 *
 */

// React/Next Imports
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

// Library Imports

// Data/Functions/Images Imports

// Component Imports

// Style Imports
import "../../assets/styles/modules/Project/Project.module.css";

export async function getStaticPaths() {
  try {
    const ALL_PROJECTS = await fetch(
      "https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/master/files/json/PROJECTS.json"
    );

    if (!ALL_PROJECTS.ok) {
      throw new Error("Failed to fetch data from the JSON endpoint");
    }

    // Parsing the data
    const ALL_PROJECTS_DATA = await ALL_PROJECTS.json();

    // Generating all sample pages/paths
    const paths = ALL_PROJECTS_DATA.map((item) => ({
      params: { projectID: item.projectID.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching index browse data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps(context) {
  const { params } = context;

  // Getting the link for the JSON
  try {
    const ALL_PROJECTS = await fetch(
      "https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/master/files/json/PROJECTS.json"
    );

    if (!ALL_PROJECTS.ok) {
      throw new Error("Failed to fetch data from the JSON endpoint");
    }

    // Parsing the data
    const ALL_PROJECTS_DATA = await ALL_PROJECTS.json();

    // Finding the specific item using projectID
    const PROJECT = ALL_PROJECTS_DATA.find(
      (item) => item.projectID === params.projectID
    );

    // If no sample, throw error
    if (!PROJECT) {
      throw new Error(`Sample with ID "${params.projectID}" not found`);
    }

    // Returning the props
    return {
      props: {
        PROJECT,
      },
    };
  } catch (error) {
    console.error("Error fetching index browse data:", error);
    return {
      props: {
        PROJECT: null,
      },
    };
  }
}

export default function Project({ PROJECT }) {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Project full-second">
      <Head id="pageHead">
        <title>codingthefront - {PROJECT.projectName}</title>

        <meta
          property="og:title"
          content={`codingthefront - ${PROJECT.projectName}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          name="google-site-verification"
          content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
        />

        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/master/icons/tab-icons-2023/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/master/icons/tab-icons-2023/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/master/icons/tab-icons-2023/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/master/icons/tab-icons-2023/favicon-16x16.png"
        />
      </Head>

      <main id="PAGE_CNT">
        <h1>{PROJECT.projectID}</h1>
        <h1>{PROJECT.projectName}</h1>
        <img data-src={PROJECT.projectImg} className="lazyload" />
        <h1>{PROJECT.projectClient}</h1>
        <h1>{PROJECT.projectPrice}</h1>
        <h1>{PROJECT.projectDesc}</h1>

        {PROJECT.projectTechs.map((tech) => (
          <img data-src={tech} className="lazyload" />
        ))}

        <br />
        <br />
        <br />

        {PROJECT.projectDemo !== "undefined" && (
          <iframe src={PROJECT.projectDemo} width="1700" height="1700" />
        )}

        <br />
        <br />
        <br />

        {PROJECT.projectDemo !== "undefined" && <h1>{PROJECT.projectDemo}</h1>}
        <h1>{PROJECT.projectCode}</h1>
      </main>
    </div>
  );
}
