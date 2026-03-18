import AboutMe from "../projects/AboutMe";
import type { Project } from "../types";
import rnrPage from "../assets/runes_and_rivets_curseforge_page.png";
import IFrameComponent from "../components/IFrameComponent";

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
  {
    id: "noted",
    title: "Noted.",
    icon: "/src/assets/icons/noted.svg",
    content: (
      <IFrameComponent
        src="https://granulatedcheese.github.io/Noted./"
        title="Noted."
      />
    ),
  },
];

export default projects;
