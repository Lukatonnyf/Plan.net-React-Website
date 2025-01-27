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
  // S23 CINZA
  // useLayoutEffect(() => {
  //   gsap.to(".galaxygray-img", {
  //     duration: 2,
  //     y: -10,
  //     opacity: 1,
  //     delay: 0.5,
  //     scale: 1,
  //     filter: "blur(0px)",
  //   });
  // }, []);

  return (
    <>
      <CardCelphone>
        <Header></Header>
        <ActivetyCard></ActivetyCard>
      </CardCelphone>
    </>
  );
}
