// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="about-section py-16 scroll-mt-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h2>

        {/* First paragraph */}
        <p className="text-base md:text-lg leading-relaxed text-white/80 max-w-3xl">
          I am a full-stack web developer with a strong foundation in both
          front-end and back-end technologies. I am adept at building complete
          web applications, from developing interactive user interfaces with
          HTML, CSS, and React to implementing scalable and efficient server-side
          logic using MongoDB. I am passionate about creating well-structured,
          high-performing websites and applications that deliver exceptional
          user experiences from start to finish.
        </p>

        {/* Second paragraph */}
        <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70 max-w-3xl">
          I specialize in building full-stack applications using modern tools and
          best practices — check the{" "}
          <strong className="text-white font-semibold">Skills</strong> section
          for a quick overview of my technical and professional abilities.
        </p>
      </div>
    </section>
  );
};

export default About;
