// src/components/Hero.jsx
import React from "react";
import profile from "../assets/Mohammed-nawaz.jpg"; // your photo
import { styles } from "../styles"; // keep existing style import

const Hero = () => {
  return (
    // pt-20 pushes hero below fixed navbar, scroll-mt-20 fixes anchor jump
    <section id="home" className="hero-section pt-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* TEXT COLUMN */}
        <div className="flex-1">
          {/* Small intro label */}
          <p className="text-sm text-white/70 uppercase tracking-wider mb-3">
            Hi, my name is
          </p>

          {/* Headline */}
          <h1
            className={`${styles.heroHeadText} text-white font-extrabold leading-tight 
            text-4xl sm:text-5xl md:text-6xl`}
          >
            Mohammed <span className="block text-[#915EFF]">Nawaz</span>
          </h1>

          {/* Supporting paragraph */}
          <p className="mt-6 text-white/80 max-w-2xl text-base sm:text-lg leading-relaxed">
            Crafting Web Experiences from End to End — I’m a full-stack
            developer skilled in HTML, CSS, JavaScript, React, Node.js and
            MongoDB. I focus on building clean, modern, and user-friendly
            applications that deliver great experiences across devices.
          </p>
        </div>

        {/* IMAGE COLUMN */}
        <div className="flex-shrink-0">
          <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden ring-4 ring-white/5 shadow-lg">
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
