import { render } from "@testing-library/react";
import { Counter } from "../Counter";

describe("Counter Component Test", () => {
  it("render the textarea", () => {
    const { getByTestId, getByPlaceholderText } = render(<Counter />);
    // const textArea = getByTestId("textArea");
    const textArea = getByPlaceholderText("Type or paste your text");
    expect(textArea).toBeTruthy();
  });

  it("render the character result", () => {
    const { getByTestId } = render(<Counter />);
    const characterLength = getByTestId("characterLength");
    expect(characterLength.innerHTML).toBe("Character: 0");
  });

  it("render the world result", () => {
    render(<Counter /> )
  });

});
