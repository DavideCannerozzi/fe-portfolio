import { LuCircleArrowUp } from "react-icons/lu";
import type { IconType } from "react-icons";

export default function ArrowTop() {
  const scrollTop = (): void => window.scrollTo({ top: 0, behavior: "smooth" });
  const ArrowIcon: IconType = LuCircleArrowUp;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-8 right-8 z-50 bg-transparent border-none p-0 cursor-pointer hover:opacity-80 transition-opacity"
      aria-label="Scroll to top of page"
    >
      <ArrowIcon size={64} aria-hidden="true" />
    </button>
  );
}
