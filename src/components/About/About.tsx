import type { IconType } from "react-icons";
import "./About.css";
import { FaLinkedin } from "react-icons/fa6";
import Buttons from "../Buttons/Buttons";

export default function About() {
  const LinkedinIcon: IconType = FaLinkedin;

  return (
    <section id="about">
      <h2>
        <span role="img" aria-label="waving hand" className="greeting text-3xl">
          👋🏻
        </span>
        About Me
      </h2>
      <p className="mb-6">
        My name is Davide Cannerozzi. I'm a frontend developer & freelance web
        developer passionate about music, cinema, and creating digital
        experiences. In my free time, I enjoy spending time outdoors in nature.
      </p>
      <p className="mb-6">
        My journey into web development combines self-taught learning with
        hands-on professional experience. I've had the opportunity to work in
        diverse environments, from international volunteer projects to agile
        development teams, which has shaped my approach to problem-solving and
        collaboration.
      </p>
      <p className="mb-6">
        I actively contribute to open source projects on GitHub and regularly
        build new projects to explore new technologies and strengthen my skills.
        I'm always looking for exciting, challenging projects that allow me to
        grow as a developer and create meaningful digital experiences
      </p>
      <div id="contact" className="mt-6">
        <div className="md:flex flex-column items-center gap-4">
          <Buttons text="Contact Me" href="mailto:d.cannerozzi@gmail.com" />
          <a
            href="https://www.linkedin.com/in/davide-cannerozzi-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon
              size={48}
              className="text-blue-800 cursor-pointer mt-6 md:mt-0"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
