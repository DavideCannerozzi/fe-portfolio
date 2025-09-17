import experiences from "./ExperienceData";
import type { ExperienceData } from "./ExperienceData";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col overflow-x-hidden px-4">
      <h2>
        <span role="img" aria-label="experience">
          💼
        </span>
        Experience
      </h2>
      <div className="relative border-l-2 border-gray-300 pl-6">
        {experiences.map((exp: ExperienceData) => (
          <div
            key={exp.id}
            className="relative mb-10 border-amber-950 border-4 p-3 md:p-6 w-full max-w-full md:max-w-2xl"
          >
            <div className="absolute -left-9 top-4 w-6 h-6 bg-white border-4 border-amber-600 rounded-full"></div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">
              {exp.year}
            </h3>
            <span className="italic">{exp.company}</span>
            <span className="ml-8">{exp.city}</span>
            <p className="mt-4">{exp.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`relative inline-block border-b-4 ${tech.color} hover:text-white transition-colors duration-300 px-1`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
