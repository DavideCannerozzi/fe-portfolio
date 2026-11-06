import { beforeEach, describe, expect, it, vi } from "vitest";
import ArrowTop from "./ArrowTop";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Arrow Top Component", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({ matches: false }),
    );
    window.scrollTo = vi.fn();
  });

  it("renders the top scroll icon", () => {
    render(<ArrowTop />);
    expect(screen.getByLabelText("Scroll To Top")).toBeInTheDocument();
  });

  it("calls window.scrollTo when the icon is clicked", () => {
    render(<ArrowTop />);
    const icon = screen.getByLabelText("Scroll To Top");
    fireEvent.click(icon);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("disables smooth scrolling when reduced motion is preferred", () => {
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
    } as MediaQueryList);

    render(<ArrowTop />);
    fireEvent.click(screen.getByLabelText("Scroll To Top"));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "auto",
    });
  });
});
