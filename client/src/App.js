import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './global.styles';
import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

import * as serviceWorker from './serviceWorker';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SigningPage = lazy(() => import('./pages/signing/signing.component'));
const SearchResultsPage = lazy(() => import('./pages/search-results/search-results.component'));
const TermsPage = lazy(() => import('./pages/terms/terms.component'));
const PrivacyPolicyPage = lazy(() => import('./pages/privacy-policy/privacy-policy.component'));
const AccessibilityPolicyPage = lazy(() => import('./pages/accessibility-policy/accessibility-policy.component'));
const ContactsPage = lazy(() => import('./pages/contacts/contacts.page'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <ScrollToTop>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route
                exact
                path="/signing"
                render={() => (currentUser ? (<Redirect to="/" />) : (<SigningPage />))}
              />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route path="/search" component={SearchResultsPage} />
              <Route path="/terms" component={TermsPage} />
              <Route path="/privacy" component={PrivacyPolicyPage} />
              <Route path="/accessibility" component={AccessibilityPolicyPage} />
              <Route path="/contacts" component={ContactsPage} />
            </Suspense>
          </ErrorBoundary>
        </ScrollToTop>
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

serviceWorker.register();

export default connect(mapStateToProps, mapDispatchToProps)(App);
