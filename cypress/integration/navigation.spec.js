/// <reference types="cypress" />

describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
  it("should navigate to Tuesday", () => {
    cy.visit("/");
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .get(".day-list__item--selected")
      .should("have.class", "day-list__item--selected");
  });
});