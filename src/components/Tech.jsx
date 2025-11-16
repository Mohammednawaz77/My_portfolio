// src/components/Tech.jsx
import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies, professionalSkills } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const resolveAsset = (fileName) => {
  if (!fileName) return null;
  try {
    return new URL(`../assets/${fileName}`, import.meta.url).href;
  } catch (e) {
    return null;
  }
};

const SkillItem = ({ icon, name }) => {
  const src = resolveAsset(icon);

  return (
    <div className="flex flex-col items-center gap-3">
      {src ? (
        <img src={src} alt={name} className="w-14 h-14 object-contain" />
      ) : (
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-white font-semibold">
          {name.slice(0, 2).toUpperCase()}
        </div>
      )}
      <span className="text-white text-sm">{name}</span>
    </div>
  );
};

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".skill-col",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".skills-wrapper",
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* === Updated Futuristic Heading (Style 3) === */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-[0_0_10px_rgba(145,94,255,0.35)]">
            Skills
          </h2>
          <p className="text-white/60 text-sm mt-2">
            Innovating through clean code, creativity & craftsmanship
          </p>
          <div className="w-28 h-[2px] bg-gradient-to-r from-purple-500/60 via-[#915EFF] to-purple-500/60 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="skills-wrapper grid grid-cols-1 md:grid-cols-2 gap-10 relative">

          {/* Vertical divider line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20"></div>

          {/* Technical Skills column */}
          <div className="skill-col flex flex-col items-center gap-6">
            <h3 className="text-white text-xl font-semibold">Technical Skills</h3>
            <div className="grid grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <SkillItem key={tech.id || tech.name} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>

          {/* Professional Skills column */}
          <div className="skill-col flex flex-col items-center gap-6">
            <h3 className="text-white text-xl font-semibold">Professional Skills</h3>
            <div className="grid grid-cols-3 gap-6">
              {professionalSkills.map((ps) => (
                <SkillItem key={ps.id || ps.name} icon={ps.icon} name={ps.name} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
