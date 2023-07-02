// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";

// Style Imports
import "../assets/styles/modules/Info/Info.module.css";

export default function Info() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Info full-second">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
