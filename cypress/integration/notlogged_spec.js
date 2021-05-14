// @ts-nocheck
// Testing Routes
describe("Testing router and routes without is user login. Not Logged Tests:", () => {
  it("Does App is render.", () => {
    cy.visit("/");
    cy.contains(/Welcome to Personal Finance APP/i);
  });
  it("Does visit route /home and is render.", () => {
    cy.visit("/home");
    cy.contains(/Welcome to Personal Finance APP/i);
    cy.url().should("include", "/home");
  });
  it("Does visit route /table and is render.", () => {
    cy.visit("/table");
    cy.contains(/Welcome to Personal Finance APP/i);
    cy.url().should("include", "/table");
  });
  it("Does visit route /record and is render.", () => {
    cy.visit("/record");
    cy.contains(/Welcome to Personal Finance APP/i);
    cy.url().should("include", "/record");
  });
  it("Does visit route not exist and is render a page 404.", () => {
    cy.visit("/notexist");
    cy.contains(/Error 404 Page/i);
    cy.url().should("include", "/notexist");
  });
  it("Does visit route not exist and button back to home is work.", () => {
    cy.visit("/notexist");
    cy.contains(/Go Back to Home/i).click();
    cy.contains(/Welcome to Personal Finance APP/i);
    cy.url().should("include", "/home");
  });
});
// Testing Buttons.
describe("Testing buttons without is user login. Exist and show:", () => {
  beforeEach(() => cy.visit("/"));
  it("Does exist light/dark button and work.", () => {
    cy.get('[aria-label="Switch to dark mode"]').click();
    cy.get("body").should("have.class", "chakra-ui-dark");
    cy.get('[aria-label="Switch to light mode"]').click();
    cy.get("body").should("have.class", "chakra-ui-light");
  });
  it("Does exist login button and show form.", () => {
    cy.contains(/Sign In/i).click();
    cy.contains(/Sign In on APP/i);
    cy.contains(/Email Address/i);
    cy.contains(/Password/i);
    cy.contains("Log In");
  });
  it("Does exist register button and show form.", () => {
    cy.contains(/Sign Up/i).click();
    cy.contains(/Sign Up on APP/i);
    cy.contains(/Email Address/i);
    cy.contains(/Password/i);
    cy.contains(/Register/i);
  });
});
// Testing login and register.
describe("Testing login/register user:", () => {
  beforeEach(() => cy.visit("/"));
  it("Does login user works.", () => {
    cy.contains(/Sign In/i).click();
    cy.get("#input-email").type("emailtest@gmail.com");
    cy.get("#input-password").type("emailtest");
    cy.contains("Log In").click();
  });
  it("Does register user works an response exist.", () => {
    cy.contains(/Sign Up/i).click();
    cy.get("#input-email").type("emailtest@gmail.com");
    cy.get("#input-password").type("emailtest");
    cy.contains("Register").click();
    cy.contains("Error:");
  });
});
// Testing Footer.
describe("Testing layout footer:", () => {
  it("Does render all content footer.", () => {
    cy.visit("/");
    cy.get('[aria-label="LinkedIn"]');
    cy.get('[aria-label="GitHub"]');
    cy.get('[aria-label="Twitter"]');
    cy.get('[aria-label="Facebook"]');
    cy.get('[aria-label="Instagram"]');
    cy.contains(/Copyright 2021 Peter DG, Inc. All rights reserved./i);
  });
});
