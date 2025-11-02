import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the main header with my name", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: "Davide Cannerozzi" })
    ).toBeInTheDocument();
  });
  it("renders the subtitle paragraph with the developer roles", () => {
    render(<Hero />);
    expect(
      screen.getByText("Frontend Developer | React Developer | Freelance")
    ).toBeInTheDocument();
  });
  it("renders the bulldog image", () => {
    render(<Hero />);
    expect(screen.getByAltText("Bulldog")).toBeInTheDocument();
  });
  it("renders the horizontal line", () => {
    render(<Hero />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
