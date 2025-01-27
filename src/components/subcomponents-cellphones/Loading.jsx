/* eslint-disable react/prop-types */
import { Aa, Box } from "./loading-module";
import Typewriter from "typewriter-effect";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import { IoIosPlanet } from "react-icons/io";

function Loading() {
  // const { text } = useTypewriter({
  //   words: ["Developer", "Designer", "Photographer"],
  //   loop: {},
  // });

  useLayoutEffect(() => {
    gsap.to(".box", {
      duration: 3,
      y: -5,
      opacity: 1,
      delay: 0.5,
      scale: 1,
      filter: "blur(0px)",
    });
  }, []);

  return (
    <>
      <Aa>
        <Box className="box">
          <h1>
            <IoIosPlanet style={{ color: "8234e9" }} />
            <span>
              {/* &lt; */}
              <Typewriter
                options={{
                  strings: ["Plan.net"],
                  autoStart: true,
                  loop: true,
                }}
              />

              {/* &gt; */}
            </span>
          </h1>
        </Box>
      </Aa>
    </>
  );
}

export default Loading;
