import NavLinks from "../NavLinks/NavLinks";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-around items-center p-12 bg-gradient text-white [&_ul]:bg-transparent [&_ul]:text-white [&_ul]:mt-4 [&_ul]:md:mt-0 [&_ul]:gap-6 [&_ul]:md:gap-12">
      <span className="italic">
        Designed and Developed by Davide Cannerozzi
      </span>
      <NavLinks />
    </footer>
  );
}
