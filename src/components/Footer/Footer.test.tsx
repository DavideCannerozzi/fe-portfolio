import { describe, expect, it, vi } from "vitest";
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

vi.mock("../NavLinks/NavLinks", () => ({
  default: () => <div data-testid="nav-links" />,
}));

describe("Footer Component", () => {
  it("renders the designer credit text", () => {
    render(<Footer />);
    expect(
      screen.getByText("Designed and Developed by Davide Cannerozzi")
    ).toBeInTheDocument();
  });

  it("renders the NavLinks component", () => {
    render(<Footer />);
    expect(screen.getByTestId("nav-links")).toBeInTheDocument();
  });
});
