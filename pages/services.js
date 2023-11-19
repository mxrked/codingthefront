// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import { connectDatabase } from "@/db/connections/connectToDB";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { LoadingScreen } from "@/assets/components/global/All/LoadingScreen";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

// Style Imports
import "../assets/styles/modules/Services/Services.module.css";

export async function getServerSideProps() {
  const PH_ICONS_FILE_PATH = path.join(
    process.cwd(),
    "public/data/json/page-head/",
    "PH_Icons.json"
  );
  const PH_SERVICES_FILE_PATH = path.join(
    process.cwd(),
    "public/data/json/page-head/",
    "PH_Index.json"
  );

  const PH_ICONS_FILE_CONTENTS = fs.readFileSync(PH_ICONS_FILE_PATH, "utf-8");
  const PH_SERVICES_FILE_CONTENTS = fs.readFileSync(
    PH_SERVICES_FILE_PATH,
    "utf-8"
  );

  let PH_ICONS = undefined;
  let PH_SERVICES = undefined;

  // Connecting to DB
  try {
    const DB = await connectDatabase();

    PH_ICONS = JSON.parse(PH_ICONS_FILE_CONTENTS);
    PH_SERVICES = JSON.parse(PH_SERVICES_FILE_CONTENTS);

    if (!DB) {
      console.log("NO DATA!");

      return {
        props: {
          TOTAL_NUMBER_OF_IPS: 0,
          PH_ICONS,
          PH_SERVICES,
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
        PH_SERVICES,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        PH_ICONS,
        PH_SERVICES,
      },
    };
  }
}

export default function Services({
  PH_SERVICES,
  PH_ICONS,
  TOTAL_NUMBER_OF_IPS,
}) {
  const router = useRouter();

  useEffect(() => {
    console.log("Website Visits: " + TOTAL_NUMBER_OF_IPS);
  }, []);

  return (
    <div id="PAGE" className="page half-second">
      <PageHead page_head_data={PH_SERVICES} icons_data={PH_ICONS} />
      <LoadingScreen />

      <div id="PAGE_CNT" className="page-cnt half-second">
        <DesktopNav />
        <MobileNav />
        <MobileNavMenu />
      </div>
    </div>
  );
}
