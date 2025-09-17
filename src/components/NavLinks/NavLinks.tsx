import navLinks from "./NavLinksData";
import type { navLinksData } from "./NavLinksData";
import Buttons from "../Buttons/Buttons";

export default function NavLinks() {
  return (
    <ul className="flex flex-col md:flex-row gap-12 md:gap-20 text-black md:text-white font-JosefinSans-Thin text-xl bg-white md:bg-transparent items-center">
      {navLinks.map((link: navLinksData) => (
        <li key={link.id}>
          {link.external ? (
            <Buttons
              href={link.href}
              text={link.text}
              target="_blank"
              className="px-3 py-1"
            />
          ) : (
            <a href={link.href} className="px-3 py-1">
              {link.text}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
