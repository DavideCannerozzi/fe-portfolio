export interface ButtonsData {
  text: string;
  href: string;
  onClick?: () => void;
  target?: "_blank" | "_self";
}
