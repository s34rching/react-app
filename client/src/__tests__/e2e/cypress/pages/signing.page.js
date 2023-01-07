import BasePage from './basepage.page';

class SigningPage extends BasePage {
  get signUpName() {
    return cy.get("[data-test='sign-up-name']");
  }

  get signUpEmail() {
    return cy.get("[data-test='sign-up-email']");
  }

  get signUpPassword() {
    return cy.get("[data-test='sign-up-password']");
  }

  get signUpConfirmPassword() {
    return cy.get("[data-test='sign-up-confirm-password']");
  }

  get submitSignUpButton() {
    return cy.get("[data-test='sign-up-submit']");
  }

  get errorMessage() {
    return cy.get("[data-test='signing-error']");
  }

  signUp({ name, email, password, confirmPassword = password }) {
    if (name) {
      this.signUpName.type(name);
    }
    if (email) {
      this.signUpEmail.type(email);
    }
    if (password) {
      this.signUpPassword.type(password);
    }
    if (confirmPassword) {
      this.signUpConfirmPassword.type(confirmPassword);
    }

    this.submitSignUpButton.click();
  }
}

export default SigningPage;
