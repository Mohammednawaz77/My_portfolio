import React, { useState } from "react";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";


// Modal component will be added next
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="w-full px-6 py-20">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-white text-4xl font-bold mb-14 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Tilt
              options={{
                max: 12,
                scale: 1.02,
                speed: 300,
              }}
              className="bg-[#0b0f1a] border border-white/10 rounded-xl p-5 shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer hover:shadow-purple-500/10"
              onClick={() => setSelectedProject(project)}
            >
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

              {/* Description */}
              <p className="text-white/70 text-sm mb-4">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-5 min-h-[64px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`text-xs font-medium px-2 py-1 bg-white/5 border border-white/10 rounded-md ${tag.color}`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div
                className="flex items-center justify-start gap-3 mt-auto pt-3 pointer-events-none"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-md text-white text-sm font-medium pointer-events-auto"
                >
                  <FaGithub className="text-lg" />
                  Code
                </a>

                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#915EFF] hover:bg-[#7b47ed] transition px-4 py-2 rounded-md text-white text-sm font-medium pointer-events-auto"
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
