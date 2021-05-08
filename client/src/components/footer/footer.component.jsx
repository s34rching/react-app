import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectContactUsHidden } from '../../redux/contact-us/contact-us.selectors';
import { ReactComponent as TiktokLogo } from '../../static/tiktok.svg';
import { ReactComponent as InstagramLogo } from '../../static/instagram.svg';
import { ReactComponent as TwitterLogo } from '../../static/twitter.svg';
import { ReactComponent as FacebookLogo } from '../../static/facebook.svg';
import ContactUsPopup from '../contact-us-popup/contact-us-popup.component';
import {
  FooterContainer,
  FooterColumnsContainer,
  LinksColumnContainer,
  FooterLink,
  FooterExternalLink,
} from './footer.styles';
import { toggleContactUsPopup } from '../../redux/contact-us/contact-us.actions';

export const Footer = ({ currentUser, isContactUsPopupHidden, toggleContactUsPopup }) => (
  <FooterContainer data-test="footer">
    <FooterColumnsContainer>
      <LinksColumnContainer id="company-container">
        <h4>COMPANY</h4>
        <ul>
          <li><FooterLink to="/">Careers</FooterLink></li>
          <li><FooterLink to="/contact">Contact Us</FooterLink></li>
          <li><FooterLink to="/">Terms</FooterLink></li>
          <li><FooterLink to="/">Privacy</FooterLink></li>
          <li><FooterLink to="/">Accessibility Policy</FooterLink></li>
        </ul>
      </LinksColumnContainer>
      <LinksColumnContainer id="learn-more-container">
        <h4>LEARN MORE</h4>
        <ul>
          <li><FooterExternalLink href="https://reactjs.org/">React</FooterExternalLink></li>
          <li><FooterExternalLink href="https://redux.js.org/">Redux</FooterExternalLink></li>
          <li><FooterExternalLink href="https://expressjs.com/">Express</FooterExternalLink></li>
          <li><FooterExternalLink href="https://firebase.google.com/">Firebase</FooterExternalLink></li>
          <li><FooterExternalLink href="https://stripe.com/">Stripe</FooterExternalLink></li>
          <li><FooterExternalLink href="https://jestjs.io/">Jest</FooterExternalLink></li>
        </ul>
      </LinksColumnContainer>
      <LinksColumnContainer id="engagement-container">
        <ul>
          <li><FooterLink to="/"><h4>FIND A STORE</h4></FooterLink></li>
          {
            currentUser
              ? null
              : <li><FooterLink to="/signing"><h4>SIGN UP</h4></FooterLink></li>
          }
          <li><FooterLink to="/"><h4>BECOME A MEMBER</h4></FooterLink></li>
          <li><FooterLink as="div" onClick={toggleContactUsPopup} to="/"><h4>SEND US FEEDBACK</h4></FooterLink></li>
        </ul>
      </LinksColumnContainer>
      <LinksColumnContainer textAlign="right" blocks={3} float="right" id="smm-container">
        <h4>JOIN US</h4>
        <FooterExternalLink href="https://www.instagram.com/"><InstagramLogo /></FooterExternalLink>
        <FooterExternalLink href="https://www.tiktok.com/en/"><TiktokLogo /></FooterExternalLink>
        <FooterExternalLink href="https://twitter.com/"><TwitterLogo /></FooterExternalLink>
        <FooterExternalLink href="https://facebook.com/"><FacebookLogo /></FooterExternalLink>
      </LinksColumnContainer>
    </FooterColumnsContainer>
    {
      isContactUsPopupHidden
        ? null
        : <ContactUsPopup />
    }
  </FooterContainer>
);

export const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isContactUsPopupHidden: selectContactUsHidden,
});

export const mapDispatchToProps = (dispatch) => ({
  toggleContactUsPopup: () => dispatch(toggleContactUsPopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
