describe("translating a phrase", () => {
  const englishPhrase = "risk";
  const pigLatinPhrase = "iskray";
  const modalMessage = "Please enter text to translate";
  const allCharTypeString = "rISk123!?/#";

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("translates the English phrase into Pig Latin and displays it", () => {
    cy.get('[data-testid="textToTranslate"]').type(englishPhrase);
    cy.get('[data-testid="translateButton"]').click();
    cy.contains(pigLatinPhrase);
  });

  it("opens a validation error modal when an empty string is submitted for translation, which can be user closed", () => {
    cy.get('[data-testid="modal"]').should("not.be.visible");
    cy.get('[data-testid="translateButton"]').click();
    cy.get('[data-testid="modal"]').should("be.visible");
    cy.contains(modalMessage);
    cy.get('[data-testid="modalCloseButton"]').click();
    cy.get('[data-testid="modal"]').should("not.be.visible");
  });

  it("opens a validation error modal when an empty string is submitted for translation, which self-closes after 4000ms", () => {
    cy.get('[data-testid="modal"]').should("not.be.visible");
    cy.get('[data-testid="translateButton"]').click();
    cy.get('[data-testid="modal"]').should("be.visible");
    cy.get('[data-testid="modal"]', { timeout: 4250 }).should("not.be.visible");
  });

  it("only allows lower case letters to be typed in, accepting capitals as lower case", () => {
    cy.get('[data-testid="textToTranslate"]').type(allCharTypeString);
    cy.get('[data-testid="translateButton"]').click();
    cy.contains(pigLatinPhrase);
  });

  it("persists the most recently inputted translation", () => {
    cy.get('[data-testid="textToTranslate"]').type(englishPhrase);
    cy.get('[data-testid="translateButton"]').click();
    cy.get('[data-testid="button"]').click();
    cy.get('[data-testid="button"]').click();
    cy.contains(pigLatinPhrase);
  });
});
