import { CardCelphone } from "./global-style";
// import { Box } from "./subcomponents-cellphones/loading-module";

// IMPORT LIBS
// import { useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { useEffect, useState } from "react";

// IMPORT IMGS / VIDEOS
// import galaxyGray from "../assets/eu.png";

import ActivetyCard from "../components/ActivetysCard";
import Header from "./header/Header";

export default function Home() {
  return (
    <>
      <CardCelphone>
        <Header></Header>
        <ActivetyCard></ActivetyCard>
      </CardCelphone>
    </>
  );
}
