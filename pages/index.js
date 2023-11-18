// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import { connectDatabase } from "@/db/connections/connectToDB";

// Component Imports

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export async function getServerSideProps() {
  const PH_ICONS_FILE_PATH = path.join(
    process.cwd(),
    "public/data/json/page-head/",
    "PH_Icons.json"
  );
  const PH_INDEX_FILE_PATH = path.join(
    process.cwd(),
    "public/data/json/page-head/",
    "PH_Index.json"
  );

  const PH_ICONS_FILE_CONTENTS = fs.readFileSync(PH_ICONS_FILE_PATH, "utf-8");
  const PH_INDEX_FILE_CONTENTS = fs.readFileSync(PH_INDEX_FILE_PATH, "utf-8");

  let PH_ICONS = undefined;
  let PH_INDEX = undefined;

  // Connecting to DB
  try {
    const DB = await connectDatabase();

    PH_ICONS = JSON.parse(PH_ICONS_FILE_CONTENTS);
    PH_INDEX = JSON.parse(PH_INDEX_FILE_CONTENTS);

    if (!DB) {
      console.log("NO DATA!");

      return {
        props: {
          TOTAL_NUMBER_OF_IPS: 0,
          PH_ICONS,
          PH_INDEX,
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
        PH_ICONS,
        PH_INDEX,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        PH_ICONS,
        PH_INDEX,
      },
    };
  }
}

export default function Home({ PH_INDEX, PH_ICONS, TOTAL_NUMBER_OF_IPS }) {
  const router = useRouter();

  return "";
}
