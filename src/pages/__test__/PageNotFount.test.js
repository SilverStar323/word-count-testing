import { render } from "@testing-library/react";
import { PageNotFound } from "../PageNotFound";
import { BrowserRouter as Router } from "react-router-dom";

describe("Test PageNotFound Page", () => {

  test("render the text and image", () => {
    const { getByAltText, getByTestId } = render(<PageNotFound />, { wrapper: Router });
    const pnfText = getByTestId("pnfText");
    const pnfImage = getByAltText("Page Not Found");
    expect(pnfText.innerHTML).toBe("Ooops - Page Not Found!");
    expect(pnfImage).toBeTruthy();
  });

});