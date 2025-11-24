import { render, screen } from "@testing-library/react";
import NavLinks from "./NavLinks";
import { describe, expect, it, vi } from "vitest";

vi.mock("../Buttons/Buttons", () => {
  type MockButtonProps = {
    href: string;
    text: string;
    target?: string;
    className?: string;
  };

  const MockButton = ({ href, text, target, className }: MockButtonProps) => (
    <a
      data-testid="external-button"
      href={href}
      target={target}
      className={className}
    >
      {text}
    </a>
  );

  return { default: MockButton };
});

vi.mock("./NavLinksData", () => ({
  __esModule: true,
  default: [
    { id: 1, text: "Home", href: "/", external: false },
    { id: 2, text: "Blog", href: "/blog", external: false },
    {
      id: 3,
      text: "GitHub",
      href: "https://github.com/DavideCannerozzi",
      external: true,
    },
  ],
}));

describe("NavLinks", () => {
  it("renders all navigation items from the dataset", () => {
    render(<NavLinks />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
  });

  it("renders internal links as <a> elements", () => {
    render(<NavLinks />);
    const internalLinks = screen.getAllByRole("link", { name: /home|blog/i });
    expect(internalLinks).toHaveLength(2);
    expect(internalLinks[0]).toHaveAttribute("href", "/");
    expect(internalLinks[1]).toHaveAttribute("href", "/blog");
  });

  it("renders external links using the mocked Buttons component", () => {
    render(<NavLinks />);
    const external = screen.getByTestId("external-button");
    expect(external).toBeInTheDocument();
    expect(external).toHaveAttribute(
      "href",
      "https://github.com/DavideCannerozzi"
    );
    expect(external).toHaveAttribute("target", "_blank");
    expect(external).toHaveTextContent("GitHub");
  });

  it("applies the correct class structure to the list container", () => {
    render(<NavLinks />);
    const list = screen.getByRole("list");
    expect(list).toHaveClass(
      "flex",
      "flex-col",
      "md:flex-row",
      "gap-12",
      "md:gap-20",
      "text-black",
      "md:text-white",
      "font-JosefinSans-Thin",
      "text-xl",
      "bg-white",
      "md:bg-transparent",
      "items-center"
    );
  });
});
