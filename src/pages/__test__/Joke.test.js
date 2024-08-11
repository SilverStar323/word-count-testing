import { render, waitFor } from "@testing-library/react";
import { Joke } from "../Joke";

describe("Test Joke Component", () => {
  it("renders the joke after fetch", async () => {
    const { findByTestId } = render(<Joke />);
    await waitFor(() => {
      const joke = findByTestId("joke");
      expect(joke.innerHTML).not.toBe("");
    });
  });
});