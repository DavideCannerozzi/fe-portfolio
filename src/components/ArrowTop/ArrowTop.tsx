import { LuCircleArrowUp } from "react-icons/lu";
import type { IconType } from "react-icons";

export default function ArrowTop() {
  const scrollTop = (): void => window.scrollTo({ top: 0, behavior: "smooth" });
  const ArrowIcon: IconType = LuCircleArrowUp;

  return (
    <div className="fixed bottom-8 right-8 z-50 cursor-pointer">
      <ArrowIcon onClick={scrollTop} size={32} aria-label="Scroll To Top" />
    </div>
  );
}
