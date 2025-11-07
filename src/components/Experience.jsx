import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg || "#fff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {/* If experience.icon is a filename string, we attempt to resolve it.
              Otherwise, if it is an imported module (URL), it will work as-is. */}
          {experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[90%] h-[90%] object-contain'
            />
          ) : (
            <div className='w-[70%] h-[70%] rounded-full bg-white/10 flex items-center justify-center text-sm text-white'>
              {experience.company_name?.slice(0, 2) || "EP"}
            </div>
          )}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {Array.isArray(experience.points) &&
          experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {Array.isArray(experiences) &&
            experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// ensure default export is present and named exactly (barrel index imports default)
export default SectionWrapper(Experience, "work");
