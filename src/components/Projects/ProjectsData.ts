import ImageOne from "../../assets/work-01.png";
import ImageTwo from "../../assets/work-02.png";
import ImageThree from "../../assets/work-in-progress.png";

export interface ProjectsData {
  id: number;
  name: string;
  description: string;
  tools: string[];
  link: string;
  image: string;
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
    name: "Work In Progress",
    description: "Working on a React project",
    tools: ["React.js", "Tailwind"],
    link: "#",
    image: ImageThree,
  },
];

export default projects;
