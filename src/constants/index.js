// src/constants/index.js
// Minimal, working constants for the portfolio.
// Icons/images are imported from src/assets/

import qmlLogo from "../assets/qml-logo.png";
import ekathaLogo from "../assets/bbmp-logo.png";
import bbcLogo from "../assets/bbc-logo.png";
import masailogo from "../assets/masai-icon.png";

// NAV LINKS (used by Navbar)
export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
  { id: "resume", title: "Resume" }
];

// SERVICES (used in About / Navbar)
export const services = [
  { title: "Frontend Development", icon: "" },
  { title: "Backend Development", icon: "" },
  { title: "Full-Stack Projects", icon: "" }
];

// TECHNOLOGIES (used by Tech component)
// icon: filename placed under src/assets/, e.g. src/assets/html-logo.png
export const technologies = [
  { id: "html", name: "HTML", icon: "html-logo.png" },
  { id: "css", name: "CSS", icon: "css-logo.png" },
  { id: "javascript", name: "JavaScript", icon: "javascript-logo.png" },
  { id: "react", name: "React", icon: "react-logo.png" },
  { id: "node", name: "Node.js", icon: "node-logo.png" },
  { id: "mongodb", name: "MongoDB", icon: "mongodb-logo.png" }
];

// PROFESSIONAL SKILLS (icons optional)
export const professionalSkills = [
  { id: "communication", name: "Communication", icon: "comm-logo.png" },
  { id: "teamwork", name: "Teamwork", icon: "team-logo.png" },
  { id: "creativity", name: "Creativity", icon: "creativity-logo.png" }
];

// EXPERIENCES (used by Experience component)
export const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Freelance / Personal Projects",
    icon: qmlLogo, // Quantum ML icon
    iconBg: "#ffffff",
    date: "2025 - Present",
    points: [
      "Built responsive web apps with React.",
      "Completed a personal project on Quantum Machine Learning that predicts BCI (Brain-Computer Interface) signals using machine learning techniques — includes data preprocessing, model training, and visualization of results. The project demonstrates ability to apply ML workflows to neuroscientific data and produce repeatable experiments.",
      "The project is listed below."
    ]
  },
  {
    title: "Masai School Alumni",
    company_name: "Masai School",
    icon: masailogo,
    iconBg: "#ffffff",
    date: "2024 - 2025",
    points: [
      "Participated in intensive full-stack training and graduated from the Masai School program.",
      "Worked on team-based hackathons and during Construct Week, building and shipping real-time projects under tight deadlines.",
      "Developed collaborative skills, version control workflows, and deployment pipelines while implementing production-oriented features.",
      "Gained experience with pair programming, code reviews, and agile-style delivery practices."
    ]
  }
];

// TESTIMONIALS (used by Feedbacks/Testimonials component)
export const testimonials = [
  {
    testimonial: "A reliable developer who delivers good UI and clean code.",
    name: "Professor / Mentor",
    designation: "Mentor",
    company: "Masai school",
    image: ""
  },
  {
    testimonial: "Very professional, good communication and timely delivery.",
    name: "Client",
    designation: "Client",
    company: "Personal Project",
    image: ""
  }
];

// PROJECTS (used by Works / Projects component)
export const projects = [
  {
    name: "eKatha Generator",
    description:
      " An ekatha generator inspired on BBMP, specialized with voice to text service.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" }
    ],
    image: ekathaLogo,
    source_code_link: "https://github.com/Mohammednawaz77/ekatha-generator",
    live_link: "https://ekathagenerator.replit.app"
  },
  {
    name: "Shopping website",
    description:
      "Built an e-commerce platform inspired by Flipkart UI.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "yellow-text-gradient" }
    ],
    image: bbcLogo,
    source_code_link: "https://github.com/Mohammednawaz77/CODE-KNIGHTS-WEB-007",
    live_link: "https://codeknights47.netlify.app/"
  },
  {
    name: "Quantum ML for BCI Signal Prediction",
    description:
      "Quantum Machine Learning project for predicting Brain-Computer Interface (BCI) signals with visualization and demo UI.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "QML", color: "green-text-gradient" },
      { name: "React", color: "Yellow-text-gradient" }
    ],
    image: qmlLogo,
    source_code_link: "https://github.com/Mohammednawaz77/hospital-bci-frontend",
    live_link: "https://hospital-bci-frontend.vercel.app/"
  }
];
