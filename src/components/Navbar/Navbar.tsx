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
      <div className="md:hidden">
        {isOpen ? (
          <ClosedMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <HamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full md:hidden shadow-lg z-50">
          <NavLink />
        </div>
      )}
    </nav>
  );
}
