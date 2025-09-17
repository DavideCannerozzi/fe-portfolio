export interface Tech {
  name: string;
  color: string;
}

export interface ExperienceData {
  id: number;
  year: string;
  company: string;
  city: string;
  description: string;
  techStack: Tech[];
}

const experiences: ExperienceData[] = [
  {
    id: 0,
    year: "2024-Present",
    company: "Self-Employed",
    city: "Milan | Italy",
    description:
      "Delivered a custom web project, collaborating with a designer and managing client communication. Handled updates, gathered feedback, and made implementation decisions to ensure a smooth development process. Project is not currently live",
    techStack: [
      { name: "WordPress", color: "border-b-blue-700 hover:bg-blue-700" },
      { name: "JavaScript", color: "border-amber-300 hover:bg-amber-300" },
      { name: "CSS", color: "border-sky-400 hover:bg-sky-400" },
    ],
  },
  {
    id: 1,
    year: "2022-2023",
    company: "Syscons Interactive",
    city: "Milan | Italy",
    description:
      "Worked on an eCommerce project for a major client, building responsive and maintainable interfaces. Focused on improving site accessibility following WCAG standards and integrated React into a legacy codebase to simplify development. Participated in Agile sprints and contributed to code reviews.",
    techStack: [
      { name: "React.js", color: "border-b-blue-700 hover:bg-blue-700" },
      { name: "TypeScript", color: "border-blue-400 hover:bg-blue-400" },
      { name: "TailwindCSS", color: "border-sky-400 hover:bg-sky-400" },
      { name: "Cypress", color: "border-black hover:bg-black" },
    ],
  },
  {
    id: 2,
    year: "2022-2022",
    company: "GoVolunteer",
    city: "Berlin | Germany",
    description:
      "Volunteer Experience. Developed a multilingual website with the product development team. Worked in a multicultural team to deliver responsive and maintainable interfaces",
    techStack: [
      { name: "React.js", color: "border-b-blue-700 hover:bg-blue-700" },
      { name: "TailwindCSS", color: "border-sky-400 hover:bg-sky-400" },
    ],
  },
];

export default experiences;
