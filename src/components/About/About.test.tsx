import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import About from "./About";

const paragraphs = [
  /My name is Davide Cannerozzi/i,
  /My journey into web development/i,
  /I'm always looking for exciting/i,
];

const links = ["https://www.linkedin.com/in/davide-cannerozzi-developer/"];

describe("About Component", () => {
  it("renders waving hand", () => {
    render(<About />);
    expect(
      screen.getByRole("img", { name: /waving hand/i })
    ).toBeInTheDocument();
  });
  it("About me heading", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /about me/i })
    ).toBeInTheDocument();
  });
  it.each(paragraphs)("renders paragraph matching %s", (regex) => {
    render(<About />);
    expect(screen.getByText(regex)).toBeInTheDocument();
  });

  test.each(links)("renders link with correct attributes", (href) => {
    const { container } = render(<About />);
    const link = Array.from(container.querySelectorAll("a")).find(
      (a) => a.getAttribute("href") === href
    );
    expect(link).toBeTruthy();
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
