import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Test Header Component", () => {
  test("render the heading text", () => {
    render(<Header title={"World Counter"}/>);
    const title = screen.getByTestId("title");
    expect(title.innerHTML).toBe("World Counter");
  });

  test("render the subHeading text", () => {
    render(<Header subTitle={"Free online Character and word count tool."}/>);
    const subTitle = screen.getByTestId("subTitle");
    expect(subTitle.innerHTML).toBe("Free online Character and word count tool.");
  });
});