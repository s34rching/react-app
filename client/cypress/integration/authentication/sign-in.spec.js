// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import SignInPage from '../../model/SignInPage';
import { validUser } from '../../fixtures/users';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import HomePage from '../../model/HomePage';

const SIGN_OUT_LINK_TEXT = 'SIGN OUT';

describe('Sign in page', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/signing');
  });

  it('User should be able to login with valid credentials', () => {
    SignInPage.fillSignInForm(validUser.email, validUser.password)
      .clickSignInButton();

    // eslint-disable-next-line no-undef
    cy.xpath(HomePage.signOutLink)
      .should('be.visible')
      .and('contain.text', SIGN_OUT_LINK_TEXT);
  });
});
