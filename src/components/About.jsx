// src/components/About.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

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
          HTML, CSS, and React to implementing scalable and efficient 
          server-side logic using MongoDB. I am passionate about creating
          well-structured, high-performing websites and applications that 
          deliver exceptional user experiences from start to finish.
        </p>

        {/* Second paragraph */}
        <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70 max-w-3xl">
          I specialize in building full-stack applications using modern tools 
          and best practices — check the{" "}
          <strong className="text-white font-semibold">Skills</strong> section 
          for a quick overview of my technical and professional abilities.
        </p>

        {/* Social Buttons Section */}
        <div className="mt-10 flex flex-wrap gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/Mohammednawaz77"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
          >
            <FaGithub /> GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohammed-nawaz-7b1ab0314"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          {/* Resume - Opens in new tab */}
          <a
            href="/Mohammed-Nawaz-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
          >
            <FaFileAlt /> Resume
          </a>

          {/* Email - Gmail Compose */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammednawaz.dev@gmail.com&su=Let's+Connect&body=Hi+Nawaz,"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
          >
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
