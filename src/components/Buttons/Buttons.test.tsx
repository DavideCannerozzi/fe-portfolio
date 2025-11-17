import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Buttons from "./Buttons";

describe("Buttons", () => {
  it("should render the component with the correct text", () => {
    render(<Buttons text="Click here" href="/test" />);

    const link = screen.getByRole("link", { name: "Click here" });
    expect(link).toBeInTheDocument();
  });

  it("should have the correct href attribute", () => {
    render(<Buttons text="Test" href="/test-page" />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/test-page");
  });

  it('should set target="_blank" when specified', () => {
    render(
      <Buttons text="External link" href="https://test.com" target="_blank" />
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it('should have rel="noopener noreferrer" when target is "_blank"', () => {
    render(
      <Buttons text="External link" href="https://test.com" target="_blank" />
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it('should not have rel attribute when target is not "_blank"', () => {
    render(<Buttons text="Internal link" href="/internal" target="_self" />);

    const link = screen.getByRole("link");
    expect(link).not.toHaveAttribute("rel");
  });

  it("should not have rel attribute when target is not specified", () => {
    render(<Buttons text="Link" href="/test" />);

    const link = screen.getByRole("link");
    expect(link).not.toHaveAttribute("rel");
  });

  it("should have the correct CSS classes", () => {
    render(<Buttons text="Test" href="/test" />);

    const link = screen.getByRole("link");
    expect(link).toHaveClass(
      "inline-block",
      "border-2",
      "border-orange-400",
      "px-6",
      "py-2",
      "hover:bg-orange-400",
      "hover:text-white",
      "transition-colors",
      "duration-500",
      "rounded"
    );
  });
});
