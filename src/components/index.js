import { EarthCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
import CanvasLoader from "./Loader";



export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  CanvasLoader,
  EarthCanvas, 
  ComputersCanvas, 
  StarsCanvas
};
// add/update these exports in src/constants/index.js

export const technologies = [
  { id: "html", name: "HTML", icon: "html-logo.png" },
  { id: "css", name: "CSS", icon: "css-logo.png" },
  { id: "javascript", name: "JavaScript", icon: "javascript-logo.png" },
  { id: "react", name: "React", icon: "react-logo.png" },
  { id: "node", name: "Node.js", icon: "node-logo.png" },
  { id: "mongodb", name: "MongoDB", icon: "mongodb-logo.png" }
];

export const professionalSkills = [
  { id: "communication", name: "Communication", icon: "comm-logo.png" },
  { id: "teamwork", name: "Teamwork", icon: "team-logo.png" },
  { id: "creativity", name: "Creativity", icon: "creativity-logo.png" }
];
