import AboutMe from "../projects/AboutMe";
import type { Project } from "../types";
import rnrPage from "../assets/runes_and_rivets_curseforge_page.png";
import IFrameComponent from "../components/IFrameComponent";

import aboutIcon from "../assets/icons/about.png";
import rnrIcon from "../assets/icons/runesandrivets.png";
import notedIcon from "../assets/icons/noted.svg";

const projects: Project[] = [
  {
    id: "about",
    title: "About Me",
    icon: aboutIcon,
    content: <AboutMe />,
  },
  {
    id: "runes-and-rivets",
    title: "Runes & Rivets",
    icon: rnrIcon,
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
    icon: notedIcon,
    content: (
      <IFrameComponent
        src="https://granulatedcheese.github.io/Noted./"
        title="Noted."
      />
    ),
  },
];

export default projects;
