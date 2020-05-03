describe("translating a phrase", () => {
  it("translates the English phrase into Pig Latin and displays it", () => {
    const englishPhrase = "risk";
    const pigLatinPhrase = "iskray";

    cy.visit("http://localhost:3000");

    cy.get('[data-testid="textToTranslate"]').type(englishPhrase);

    cy.get('[data-testid="translateButton"]').click();

    cy.contains(pigLatinPhrase);
  });
});
