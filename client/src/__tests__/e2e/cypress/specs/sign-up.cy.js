import { relativeUrls } from '../../common/relative-urls';
import SigningPage from '../pages/signing.page';
import User from '../../common/entities/user';
import errors from '../../common/errors';

describe('Sign Up', () => {
  let userData;
  const signingPage = new SigningPage();

  beforeEach(() => {
    userData = new User();
    signingPage.open(relativeUrls.signing);
  });

  it('user should be able to sign up with valid data', () => {
    signingPage.signUp(userData);
    signingPage.signOutButton.should('be.visible').contains('SIGN OUT');
  });

  it('user should not be able to sign up with already registered email', () => {
    signingPage.signUp(userData);
    signingPage.signOutButton.should('be.visible').contains('SIGN OUT');
    signingPage.signOutButton.click();
    signingPage.signInButton.should('be.visible');

    signingPage.open(relativeUrls.signing);
    signingPage.signUp(userData);
    signingPage.errorMessage
      .should('be.visible')
      .contains(errors.alreadyRegisteredEmail);
  });

  it('user should not be able to sign up with missing name', () => {
    userData.name = null;

    signingPage.signUp(userData);
    signingPage.signUpName.then((input) => {
      expect(input[0].validationMessage).to.eq(errors.emptyRequiredField);
    });
  });

  it('user should not be able to sign up with missing email', () => {
    userData.email = null;

    signingPage.signUp(userData);
    signingPage.signUpEmail.then((input) => {
      expect(input[0].validationMessage).to.eq(errors.emptyRequiredField);
    });
  });

  it('user should not be able to sign up with missing password', () => {
    userData.password = null;

    signingPage.signUp(userData);
    signingPage.signUpPassword.then((input) => {
      expect(input[0].validationMessage).to.eq(errors.emptyRequiredField);
    });
  });

  it('user should not be able to sign up with missing confirmation password', () => {
    userData.confirmPassword = null;

    signingPage.signUp(userData);
    signingPage.signUpConfirmPassword.then((input) => {
      expect(input[0].validationMessage).to.eq(errors.emptyRequiredField);
    });
  });

  it("user should not be able to sign up if confirmation password doesn't match", () => {
    userData.confirmPassword = 'qwerty123';

    signingPage.signUp(userData);
    cy.on('window:alert', (str) => {
      expect(str).to.equal("Password doesn't match");
    });
  });

  it.skip('user should not be able to sign up with invalid name', () => {
    userData.name = 'a';

    signingPage.signUp(userData);
  });

  it('user should not be able to sign up with invalid email', () => {
    userData.email = userData.email.split('@')[0];

    signingPage.signUp(userData);
    signingPage.signUpEmail.then((input) => {
      expect(input[0].validationMessage).to.contains(errors.invalidEmail);
    });
  });

  it('user should not be able to sign up with invalid password', () => {
    const tooShortPassword = 'qwert';
    userData.password = tooShortPassword;
    userData.confirmPassword = tooShortPassword;

    signingPage.signUp(userData);
    signingPage.errorMessage
      .should('be.visible')
      .contains(errors.tooShortPassword);
  });

  it('user should not be able to sign up with submitting empty form', () => {
    signingPage.submitSignUpButton.click();
    signingPage.signUpName.then((input) => {
      expect(input[0].validationMessage).to.eq(errors.emptyRequiredField);
    });
  });
});
