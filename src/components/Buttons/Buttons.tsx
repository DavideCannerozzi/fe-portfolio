import type { ButtonsData } from "./ButtonsData";

export default function Buttons({ text, href, target }: ButtonsData) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="inline-block border-2 border-orange-400 px-6 py-2 hover:bg-orange-400 hover:text-white transition-colors duration-500 rounded"
    >
      {text}
    </a>
  );
}
