// src/components/Hero.jsx
import React from "react";
import profile from "../assets/Mohammed-nawaz.jpg";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section id="home" className="hero-section pt-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center text-center md:text-left gap-10 md:gap-16">

        {/* TEXT COLUMN */}
        <div className="flex-1">
          <p className="text-sm text-white/70 uppercase tracking-wider mb-2">
            Hi, my name is
          </p>

          <h1
            className={`${styles.heroHeadText} text-white font-extrabold leading-tight 
            text-4xl sm:text-5xl md:text-6xl`}
          >
            Mohammed <span className="block text-[#915EFF]">Nawaz</span>
          </h1>

          <p className="mt-5 text-white/80 max-w-2xl text-base sm:text-lg leading-relaxed mx-auto md:mx-0">
            Crafting Web Experiences from End to End — I’m a full-stack developer 
            skilled in HTML, CSS, JavaScript, React, Node.js & MongoDB. I focus on 
            building clean, modern & user-friendly applications across all devices.
          </p>
        </div>

        {/* IMAGE COLUMN */}
        <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
          <div className="rounded-full overflow-hidden ring-4 ring-white/10 shadow-xl 
                          w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto md:mx-0">
            <img
              src={profile}
              alt="Mohammed Nawaz"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
