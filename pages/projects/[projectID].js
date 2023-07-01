/**
 *
 *  This is the samples page
 *
 */

// React/Next Imports
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Library Imports

// Data/Functions/Images Imports

// Component Imports

// Style Imports

export async function getStaticPaths() {
  try {
    const ALL_PROJECTS = await fetch(
      "https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/main/files/json/PROJECTS.json"
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
      "https://raw.githubusercontent.com/mxrked/codingthefront_2023_CDN/main/files/json/PROJECTS.json"
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
      <main id="PAGE_CNT"></main>
    </div>
  );
}
