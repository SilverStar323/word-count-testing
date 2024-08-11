import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Counter } from "../Counter";
import { useEffect } from "react";

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
    render(<Counter /> );
    const wordLength = screen.getByText("Word: 0");
    expect(wordLength).toBeInTheDocument();
  });

  it("chang textarea and update result", () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const characterLength = screen.getByTestId("characterLength");
    const wordLength = screen.getByTestId("wordLength");

    userEvent.type(textArea, "Hello World!   My name is Albert.");
    expect(characterLength.innerHTML).toBe("Character: 33");
    expect(wordLength.innerHTML).toBe("Word: 6");
  });

  it("clear textarea and update result", () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const clearBtn = screen.getByTestId("clearBtn");
    const characterLength = screen.getByTestId("characterLength");
    const wordLength = screen.getByTestId("wordLength");

    userEvent.click(clearBtn);
    expect(textArea.innerHTML).toBe("");
    expect(characterLength.innerHTML).toBe("Character: 0");
    expect(wordLength.innerHTML).toBe("Word: 0");
  });

});
