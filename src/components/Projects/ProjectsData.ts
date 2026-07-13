import ImageOne from "../../assets/work-01.webp";
import ImageTwo from "../../assets/work-02.webp";
import ImageThree from "../../assets/fetchapilab.webp";
import ImageFour from "../../assets/snippetLint.webp";
import ImageFive from "../../assets/stream-radar.webp";
import ImageSix from "../../assets/PdfTangler.webp";

export interface ProjectsData {
  id: number;
  name: string;
  description: string;
  tools: string[];
  link: string;
  image?: string;
}

const projects: ProjectsData[] = [
  {
    id: 0,
    name: "Machwerk",
    description: "Co-Working Space",
    tools: ["React.js", "Tailwind", "ContentfulCMS", "GraphQL"],
    link: "https://machwerk.berlin/",
    image: ImageOne,
  },
  {
    id: 1,
    name: "SeteShop",
    description: "E-Commerce",
    tools: ["Wordpress", "Javascript", "CSS"],
    link: "#",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Fetch Api Lab",
    description: "A project to explore public APIs dynamically.",
    tools: [
      "React.js",
      "Typescript",
      "Tailwind",
      "Vitest",
      "React-Testing-Library",
    ],
    link: "https://fetchlabapi.netlify.app/",
    image: ImageThree,
  },
  {
    id: 3,
    name: "Snippet Lint",
    description:
      "A lightweight React and TypeScript tool that analyzes HTML snippets for accessibility issues using axe-core and provides a clear score with detailed violations",
    tools: ["React.js", "Typescript", "Tailwind"],
    link: "https://snippetlint.netlify.app/",
    image: ImageFour,
  },
  {
    id: 4,
    name: "Stream Radar",
    description:
      "StreamRadar is a React + TypeScript application that lets you upload your IMDB watchlist and automatically checks which films are available on Italian streaming platforms",
    tools: ["React.js", "Typescript", "Tailwind"],
    link: "https://streamradarimdb.netlify.app/",
    image: ImageFive,
  },
  {
    id: 5,
    name: "PdfTangler - Open Source Project",
    description:
      "3 open source contributions: improved accessibility raising Lighthouse score from 94 to 100, added loading indicators during PDF merge, and fixed horizontal drag animation on mobile.",
    tools: ["React.js", "JavaScript", "Tailwind"],
    link: "https://github.com/ManojKumarAchanta/PdfTangler",
    image: ImageSix,
  },
];

export default projects;
