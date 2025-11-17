// src/constants/index.js

// Image imports - replace crmLogo with your CRM screenshot file later
import crmLogo from "../assets/crm.png"; // <-- update filename once added
import qmlLogo from "../assets/qml-logo.png";
import bbcLogo from "../assets/bbc-logo.png";
import masailogo from "../assets/masai-icon.png";

// NAV LINKS
export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
  { id: "resume", title: "Resume" }
];

// SERVICES
export const services = [
  { title: "Frontend Development", icon: "" },
  { title: "Backend Development", icon: "" },
  { title: "Full-Stack Projects", icon: "" }
];

// TECHNOLOGIES
export const technologies = [
  { id: "html", name: "HTML", icon: "html-logo.png" },
  { id: "css", name: "CSS", icon: "css-logo.png" },
  { id: "javascript", name: "JavaScript", icon: "javascript-logo.png" },
  { id: "react", name: "React", icon: "react-logo.png" },
  { id: "node", name: "Node.js", icon: "node-logo.png" },
  { id: "mongodb", name: "MongoDB", icon: "mongodb-logo.png" }
];

// PROFESSIONAL SKILLS
export const professionalSkills = [
  { id: "communication", name: "Communication", icon: "comm-logo.png" },
  { id: "teamwork", name: "Teamwork", icon: "team-logo.png" },
  { id: "creativity", name: "Creativity", icon: "creativity-logo.png" }
];

// EXPERIENCES
export const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Freelance / Personal Projects",
    icon: qmlLogo,
    iconBg: "#ffffff",
    date: "2025 - Present",
    points: [
      "Developed multiple full-stack applications using MERN stack.",
      "Built scalable and responsive UI with React and Tailwind CSS.",
      "Integrated backend APIs with Node.js and MongoDB."
    ]
  },
  {
    title: "Masai School Alumni",
    company_name: "Masai School",
    icon: masailogo,
    iconBg: "#ffffff",
    date: "2024 - 2025",
    points: [
      "Completed an intensive full-stack developer program.",
      "Gained hands-on project experience with real-world development flows.",
      "Developed soft skills via peer programming, reviews & presentations."
    ]
  }
];

// PROJECTS
// PROJECTS
export const projects = [
  {
    name: "NexCRM",
    description:
      "A responsive CRM dashboard to manage leads, clients, follow-ups and task stages workflow with intuitive UI & analytics.",
    tags: [
      ["react", "nodejs", "express"],      // row 1
      ["mongodb", "tailwind"]              // row 2
    ],
    image: crmLogo,
    source_code_link: "https://github.com/Mohammednawaz77/NexCRM",
    live_link: "https://nexcrm7.onrender.com/"
  },
  {
    name: "Shopping Website",
    description:
      "A Flipkart-inspired e-commerce UI with product grid, categories, filtering and responsive layout.",
    tags: [
      ["html", "css", "javascript"],        // row 1
      ["", "", ""]                          // row 2 (empty placeholders to maintain equal height)
    ],
    image: bbcLogo,
    source_code_link: "https://github.com/Mohammednawaz77/CODE-KNIGHTS-WEB-007",
    live_link: "https://incandescent-souffle-738ba0.netlify.app/"
  },
  {
    name: "eKatha Generator",
    description:
      "A BBMP-inspired application that converts voice to text and generates grievance letters with a simple automated workflow.",
    tags: [
      ["html", "css", "javascript"],        // row 1
      ["react", "", ""]                     // row 2 (aligned because react goes here)
    ],
    image: qmlLogo,
    source_code_link: "https://github.com/Mohammednawaz77/ekathageneration",
    live_link: "https://ekathageneration.onrender.com/"
  }
];
