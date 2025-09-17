export interface navLinksData {
  id: number;
  text: string;
  href: string;
  external?: boolean;
}

const navLinks: navLinksData[] = [
  { id: 0, text: "About me", href: "#about" },
  { id: 1, text: "Experience", href: "#experience" },
  { id: 2, text: "Projects", href: "#projects" },
  { id: 3, text: "Contact", href: "#contact" },
  { id: 4, text: "Resume", href: "#resume" },
  {
    id: 5,
    text: "Blog",
    href: "https://dev.to/davidecannerozzi",
    external: true,
  },
];

export default navLinks;
