import type { Track } from "../types";

const TRACKS: Track[] = [
  {
    id: 1,
    title: "Ladies in the Club! - prodGranny",
    src: `${import.meta.env.BASE_URL}music/track1.mp3`,
  },
  {
    id: 2,
    title: "Adult Swim - prodGranny",
    src: `${import.meta.env.BASE_URL}music/track2.mp3`,
  },
  {
    id: 3,
    title: "Summer Winds... - prodGranny",
    src: `${import.meta.env.BASE_URL}music/track3.mp3`,
  },
];

export default TRACKS;
