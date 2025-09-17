import NavLinks from "../NavLinks/NavLinks";

export default function MobileMenu() {
  return (
    <div className="md:hidden flex text-black">
      <NavLinks />
    </div>
  );
}
