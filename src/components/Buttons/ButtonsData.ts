export interface ButtonsData {
  text: string;
  href: string;
  className?: string;
  onClick: () => void;
  target?: "_blank" | "_self";
}
