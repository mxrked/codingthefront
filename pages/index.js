// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Index full-second">
      <main id="PAGE_CNT"></main>
    </div>
  );
}
