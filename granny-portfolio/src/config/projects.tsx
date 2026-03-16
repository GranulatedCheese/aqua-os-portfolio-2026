import AboutMe from "../projects/AboutMe";
import type { Project } from "../types";
import rnrPage from "../assets/runes_and_rivets_curseforge_page.png";

const projects: Project[] = [
  {
    id: "about",
    title: "About Me",
    icon: "/src/assets/icons/about.png",
    content: <AboutMe />,
  },
  {
    id: "runes-and-rivets",
    title: "Runes & Rivets",
    icon: "/src/assets/icons/runesandrivets.png",
    content: (
      <a
        href="https://www.curseforge.com/minecraft/modpacks/runes-rivets-the-antequest"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={rnrPage} />
      </a>
    ),
  },
];

export default projects;
