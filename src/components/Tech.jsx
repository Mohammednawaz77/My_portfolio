// src/components/Tech.jsx
import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies, professionalSkills } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

// Small helper to safely load an asset from ../assets; returns null if missing
const resolveAsset = (fileName) => {
  if (!fileName) return null;
  try {
    // Vite supports dynamic imports through new URL or require; use new URL for Vite compatibility
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
        <img src={src} alt={name} className="w-16 h-16 object-contain" />
      ) : (
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/5 text-white/90 text-sm font-semibold">
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
      ".tech-icon",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".tech-icons-wrapper",
          start: "top 85%",
          end: "bottom 60%",
          scrub: false,
        },
      }
    );

    gsap.fromTo(
      ".prof-icon",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".prof-icons-wrapper",
          start: "top 85%",
          end: "bottom 60%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-secondary">What I can do</p>
          <h2 className="text-white text-3xl font-bold">Skills</h2>
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Technical Skills</h3>

          <div className="tech-icons-wrapper grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
            {technologies.map((tech) => (
              <div
                key={tech.id || tech.name}
                className="tech-icon flex flex-col items-center"
              >
                <SkillItem icon={tech.icon} name={tech.name} />
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-white font-semibold mb-4">Professional Skills</h3>

          <div className="prof-icons-wrapper grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
            {professionalSkills.map((ps) => (
              <div key={ps.id || ps.name} className="prof-icon flex flex-col items-center">
                <SkillItem icon={ps.icon} name={ps.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
