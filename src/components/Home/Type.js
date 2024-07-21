import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "Mathmatecian and Physicist",
          "Data Scientist",
          "Hard Knowlege in ML and AI",
          "Software Developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
