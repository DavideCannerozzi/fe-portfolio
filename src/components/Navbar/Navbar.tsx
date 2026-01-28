import { useState } from "react";
import type { IconType } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import NavLink from "../NavLinks/NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const HamburgerMenu: IconType = GiHamburgerMenu;
  const ClosedMenu: IconType = AiOutlineClose;

  return (
    <nav className="flex items-center p-8 relative bg-white md:bg-transparent">
      <div className="hidden md:flex flex-1 justify-center">
        <NavLink />
      </div>

      {/* Toggle Hamburger Menu */}
      <button
        className="md:hidden bg-transparent border-none p-0"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          <ClosedMenu className="text-2xl" />
        ) : (
          <HamburgerMenu className="text-2xl" />
        )}
      </button>

      {/* Menu mobile */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 w-full md:hidden shadow-lg z-50"
        >
          <NavLink />
        </div>
      )}
    </nav>
  );
}
