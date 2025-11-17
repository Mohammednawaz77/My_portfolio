// src/components/Projects.jsx
import React from "react";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { FaGithub } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// Map tag slug to icon component
const techIconMap = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  react: FaReact,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  tailwind: SiTailwindcss
};

const Projects = () => {
  return (
    <section id="projects" className="w-full px-6 py-20">
      {/* Heading */}
      <motion.h2
        className="text-white text-4xl font-bold mb-14 text-center"
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, cardIndex) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: cardIndex * 0.12 }}
            viewport={{ once: true }}
          >
            <Tilt className="bg-[#0b0f1a] border border-white/10 rounded-xl p-5 shadow-lg hover:shadow-purple-500/10 h-full flex flex-col">
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />

              {/* Title */}
              <h3 className="text-white font-semibold text-xl mb-2">
                {project.name}
              </h3>

              {/* Description - fixed height for equal card height */}
              <p className="text-white/70 text-sm leading-relaxed mb-4 min-h-[64px]">
                {project.description}
              </p>

              {/* Tech Tags - Two fixed rows to align perfectly */}
              <div className="mb-6">
                {project.tags.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-wrap gap-3 mb-2 min-h-[32px]">
                    {row.map((tag, idx) => {
                      if (!tag) {
                        return (
                          <span
                            key={idx}
                            className="invisible px-3 py-1 rounded-full w-[80px] h-[28px]"
                          ></span>
                        );
                      }

                      const slug = tag.toLowerCase().replace(/[^a-z0-9]/g, "");
                      const Icon = techIconMap[slug];

                      return (
                        <div
                          key={`${slug}-${idx}`}
                          className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white"
                        >
                          {Icon && <Icon className="text-sm" />}
                          <span className="capitalize">{tag}</span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-md text-white text-sm font-medium"
                >
                  <FaGithub className="text-lg" />
                  Code
                </a>
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#915EFF] hover:bg-[#7b47ed] transition px-4 py-2 rounded-md text-white text-sm font-medium"
                >
                  Live Demo
                </a>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
