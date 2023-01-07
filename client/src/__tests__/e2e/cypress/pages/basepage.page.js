class BasePage {
  get signOutButton() {
    return cy.get('[data-test="sign-out-button"]');
  }

  get signInButton() {
    return cy.get('[href="/signing"]').contains('SIGN IN');
  }

  open(url) {
    cy.visit(url);
  }
}

export default BasePage;
