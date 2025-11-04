import { describe, expect, it, vi } from "vitest";
import ArrowTop from "./ArrowTop";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Arrow Top Component", () => {
  it("renders the top scroll icon", () => {
    render(<ArrowTop />);
    expect(screen.getByLabelText("Scroll To Top")).toBeInTheDocument();
  });

  it("calls window.scrollTo when the icon is clicked", () => {
    window.scrollTo = vi.fn();
    render(<ArrowTop />);
    const icon = screen.getByLabelText("Scroll To Top");
    fireEvent.click(icon);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
