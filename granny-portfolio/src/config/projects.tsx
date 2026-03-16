import AboutMe from "../projects/AboutMe";
import type { Project } from "../types";

const projects: Project[] = [
  {
    id: "about",
    title: "About Me",
    icon: "/src/assets/icons/about.png",
    content: <AboutMe />,
  },
  {
    id: "mc fantasy",
    title: "Runes & Rivets",
    icon: "/src/assets/icons/runesandrivets.png",
    content: <p>Peepee</p>,
  },
];

export default projects;
