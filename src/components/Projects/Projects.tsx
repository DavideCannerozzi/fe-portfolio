import type { ProjectsData } from "./ProjectsData";
import projects from "./ProjectsData";
import Buttons from "../Buttons/Buttons";

export default function Projects() {
  return (
    <section id="projects">
      <h2>
        <span role="img" aria-label="rocket">
          🚀
        </span>
        Some Things I've Built
      </h2>
      <div>
        {projects.map((project: ProjectsData) => (
          <div
            key={project.id}
            className="flex flex-col-reverse md:flex-row justify-between mt-10"
          >
            <div className="h-[20rem] p-12 w-[40rem]">
              <h3 className="text-3xl text-orange-400">{project.name}</h3>
              <p className="text-gray-900 italic mt-3">{project.description}</p>
              <p className="mt-4 mb-4">Development Tools:</p>
              <ul>
                {project.tools.map((tool, index) => (
                  <li key={index} className="list-disc marker:text-sky-400">
                    {tool}
                  </li>
                ))}
              </ul>
              <a
                className="border-b-2 border-b-orange-400 inline-block mt-12"
                href={project.link}
              >
                Link
              </a>
            </div>
            <div className="flex-shrink-0 w-full md:w-[35rem] shadow-xl/30">
              <img
                src={project.image}
                alt={project.description}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Buttons
          text="More On Github"
          href="https://github.com/DavideCannerozzi"
          target="_blank"
        />
      </div>
    </section>
  );
}
