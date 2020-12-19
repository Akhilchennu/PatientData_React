import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PageNotFound from "../../containers/PageNotFound";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("render not found page syccesfully", async () => {
    act(() => {
        render(<PageNotFound />, container);
    });
    expect(container.querySelector("[data-test='notfound']").textContent).toBe("404 Page Not Found");
});

