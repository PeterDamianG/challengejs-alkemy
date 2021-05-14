// @ts-nocheck
// Before all testing, login user to app.
before(() => {
  cy.request("POST", "http://localhost:3001/api/login", {
    email: "emailtest@gmail.com",
    password: "emailtest",
  }).then(({ body }) => {
    body.isLogged = true;
    localStorage.setItem("user", JSON.stringify(body));
    cy.visit("/");
  });
});
// Testing APPBAR.
describe("Testing AppBar when user is logged:", () => {
  it("Does AppBar is render.", () => {
    cy.get("svg.chakra-icon");
    cy.contains(/Welcome/i);
    cy.get('[aria-label="Switch to dark mode"]');
    cy.contains(/Log Out/i);
  });
  // Testing AppBar > NavBar
  describe("Testing NavBar:", () => {
    beforeEach(() => cy.get("svg.chakra-icon").click().wait(250));
    it("Does NavBar is render.", () => {
      cy.get('[href="/home"]');
      cy.get('[href="/table"]');
      cy.get('[href="/record"]');
      cy.get('[href="/home"]').click();
    });
    it("Does NavBar is go to /table.", () => {
      cy.get(".chakra-modal__body").find('[href="/table"]').click();
      cy.url().should("include", "/table");
    });
    it("Does NavBar is go to /record.", () => {
      cy.get(".chakra-modal__body").find('[href="/record"]').click();
      cy.url().should("include", "/record");
    });
    it("Does NavBar is go to /home.", () => {
      cy.get('[href="/home"]').click();
      cy.url().should("include", "/home");
    });
  });
});
// Testing Footer.
describe("Testing layout footer:", () => {
  it("Does render all content footer.", () => {
    cy.get('[aria-label="LinkedIn"]');
    cy.get('[aria-label="GitHub"]');
    cy.get('[aria-label="Twitter"]');
    cy.get('[aria-label="Facebook"]');
    cy.get('[aria-label="Instagram"]');
    cy.contains(/Copyright 2021 Peter DG, Inc. All rights reserved./i);
  });
});
// Function to clean for next test.
const cleanToHome = () => {
  cy.get("svg.chakra-icon").click().wait(250);
  cy.get('[href="/home"]').click();
  cy.url().should("include", "/home");
};
// Testing Home.
describe("Testing route / and /home when user is logged:", () => {
  it("Does App is render home.", () => {
    cy.contains(/The total of your balance is:/i);
    cy.contains(/Create New Record/i);
    cy.contains(/See Tables/i);
    cy.contains(/List Of Incomes And Expenses:/i);
    cy.contains(/Income/i);
    cy.contains(/Expense/i);
    cy.url().should("include", "/");
  });
  it("Does Button Create New Record Work.", () => {
    cy.contains(/Create New Record/i).click();
    cy.url().should("include", "/record");
    cleanToHome();
  });
  it("Does Button See Tables Work.", () => {
    cy.contains(/See Tables/i).click();
    cy.url().should("include", "/table");
    cleanToHome();
  });
});
// Testing Create Records.
describe("Testing route /record when user is logged:", () => {
  before(() => {
    cy.get("svg.chakra-icon").click().wait(250);
    cy.get(".chakra-modal__body").find('[href="/record"]').click();
    cy.url().should("include", "/record");
  });
  it("Does App is render /record.", () => {
    cy.contains(/Create a New Record:/i);
    cy.contains(
      /Write the concept of this record. Character limit is 4 to 128./i
    );
    cy.contains(/Amount/i);
    cy.contains(/Amount of this record. Min 1 and Max 100,000,000 .-/i);
    cy.contains(/Category/i);
    cy.contains(/Select the category closest to what you consider./i);
    cy.contains(/Income or Expense/i);
    cy.contains(/Please select if you record is an Income or Expense./i);
    cy.contains(/Date/i);
    cy.contains(
      /Set the date of record. If you do not set nothing, today is for default./i
    );
    cy.url().should("include", "/record");
  });
  // Make a correct form.
  describe("Make a form with all validations and send:", () => {
    it("Does put data in form.", () => {
      cy.get("#input-concept").type("Testing Cypress.");
      cy.get("#input-amount").type("1500");
      cy.get("#input-category").select("Work");
      cy.get("#input-date").type("2020-06-01");
      cy.contains("Create Record").click();
      cy.contains(/Record has been successful/i);
    });
  });
});
// Testing Remove Records.
describe("Testing route /table when user is logged:", () => {
  before(() => {
    cy.get("svg.chakra-icon.css-onkibi").click().wait(250);
    cy.get(".chakra-modal__body").find('[href="/table"]').click();
    cy.url().should("include", "/table");
  });
  it("Does App is render /table.", () => {
    cy.contains(/Choose one to filter the table/i);
    cy.contains(/Incomes/i);
    cy.contains(/Expenses/i);
    cy.url().should("include", "/table");
  });
  it("Does App is render subroute /expenses and /incomes.", () => {
    cy.contains(/Expenses/i).click();
    cy.url().should("include", "/table/expenses");
    cy.contains("Back to Filter").click();
    cy.contains(/Incomes/i).click();
    cy.url().should("include", "/table/incomes");
  });
  it("Does App is render subroute incomes and content.", () => {
    cy.url().should("include", "/table/incomes");
    cy.contains(/Amount/i);
    cy.contains(/Concept/i);
    cy.contains(/Category/i);
    cy.contains(/Date/i);
    cy.contains(/Back to Filter/i);
  });
  // Remove a record.
  describe("Remove a record, last record create for testing 'Testing Cypress.':", () => {
    it("Does remove record.", () => {
      cy.contains("Testing Cypress.")
        .parent()
        .contains(/Remove/i)
        .click();
      cy.get("button.chakra-button").contains("Remove").click();
      cy.contains("Sure!").click();
      cy.contains(/Remove Record/i);
    });
  });
});
