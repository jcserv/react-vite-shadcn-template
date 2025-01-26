import { mount } from "@cypress/react18";
import { createRouter, RouterContextProvider } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";

import { Header } from "./Header";

describe("Header", () => {
  it("should render the header contents", () => {
    const router = createRouter({ routeTree });
    mount(
      <>
        <RouterContextProvider router={router}>
          <Header />
        </RouterContextProvider>
      </>,
    );
    cy.contains("DevBlog").should("exist");
    cy.contains("Home").should("exist");
    cy.contains("About").should("exist");
  });
});
