import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="notranslate mt-5 text-3xl font-bold" data-aos="fade-up"
      data-aos-delay="400">
      <Typewriter
        options={{
          strings: ["Desarrollo Web", "Frontend", "Backend"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
