import AboutMe from "../projects/AboutMe";
import type { Project } from "../types";
import IFrameComponent from "../components/IFrameComponent";
import MusicPlayer from "../projects/MusicPlayer";

const projects: Project[] = [
  {
    id: "about",
    title: "About Me",
    icon: `${import.meta.env.BASE_URL}icons/about.ico`,
    content: <AboutMe />,
  },
  {
    id: "runes-and-rivets",
    title: "Runes & Rivets",
    icon: `${import.meta.env.BASE_URL}icons/runesandrivets.ico`,
    url: "https://www.curseforge.com/minecraft/modpacks/runes-rivets-the-antequest",
  },
  {
    id: "noted",
    title: "Noted.",
    icon: `${import.meta.env.BASE_URL}icons/noted.ico`,
    content: (
      <IFrameComponent
        src="https://granulatedcheese.github.io/Noted./"
        title="Noted."
      />
    ),
  },
  {
    id: "music-player",
    title: "Audio Player",
    icon: `${import.meta.env.BASE_URL}icons/musicplayer.ico`,
    content: <MusicPlayer />,
  },
  {
    id: "portfolio-repository",
    title: "Portfolio Source Code",
    icon: `${import.meta.env.BASE_URL}icons/github-invertocat.svg`,
    url: "https://github.com/GranulatedCheese/granny-portfolio",
  },
  {
    id: "vicsek-model",
    title: "Vicsek Simulation.",
    icon: `${import.meta.env.BASE_URL}icons/streamlit-mark-dark.ico`,
    url: "https://granny-vicsek-stochastic-simulation.streamlit.app",
  },
];
export default projects;
