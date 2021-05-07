class SignInPage {
  // Sign in form
  signInEmailField = "//h2[contains(text(),'I already')]/following-sibling::form//input[@type=\"email\"]";
  signInPasswordField = "//h2[contains(text(),'I already')]/following-sibling::form//input[@type=\"password\"]";
  signInSignInButton = "//h2[contains(text(),'I already')]/following-sibling::form//button[@type=\"submit\"]";

  //Sign Up form
  signUpNameField = "//h2[contains(text(),'Create account')]/following-sibling::form//input[@name=\"displayName\"]";
  signUpEmailField = "//h2[contains(text(),'Create account')]/following-sibling::form//input[@type=\"email\"]";
  signUpPasswordField = "//h2[contains(text(),'Create account')]/following-sibling::form//input[@name=\"password\"]";
  signUpConfirmPasswordField = "//h2[contains(text(),'Create account')]/following-sibling::form//input[@name=\"confirmPassword\"]";
  signUpSignUpButton = "//h2[contains(text(),'Create account')]/following-sibling::form//button";

  // Fill in Sign In form
  fillSignInForm(email, password){
    this.insertField(this.signInEmailField, email);
    this.insertField(this.signInPasswordField, password);

    return this;
  }

  // Fill in Sign Up form
  fillSignUpForm(name, email, password, confirmPassword){
    this.insertField(this.signUpNameField, name);
    this.insertField(this.signUpEmailField, email);
    this.insertField(this.signUpPasswordField, password);
    this.insertField(this.signUpConfirmPasswordField, confirmPassword);
  }

  clickSignInButton(){
    cy.xpath(this.signInSignInButton).click();
  }

  clickSignUpButton(){
    cy.xpath(this.signUpSignUpButton).click();
  }

  insertField (element, value){
    cy.xpath(element)
      .clear()
      .type(value);
  }
}
export default new SignInPage();
