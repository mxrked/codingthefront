// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports

// Style Imports
import "../assets/styles/modules/Info/Info.module.css";

export default function Info() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Info full-second">
      <main id="PAGE_CNT"></main>
    </div>
  );
}
