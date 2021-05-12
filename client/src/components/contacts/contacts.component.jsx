import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone, faMapMarkedAlt, faEnvelope, faClock,
} from '@fortawesome/free-solid-svg-icons';
import {
  ContactItemContainer,
  ContactCardContainer,
  ContactCardTitleContainer,
  ContactItemLogoContainer,
  ContactItemDataContainer,
} from './contacts.styles';

export const ContactCardComponent = ({ city, address, map, phone, email, workingHours }) => (
  <ContactCardContainer>
    <ContactCardTitleContainer>{city}</ContactCardTitleContainer>
    <ContactItemContainer>
      <ContactItemLogoContainer>
        <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />
      </ContactItemLogoContainer>
      <ContactItemDataContainer>
        <a href={map} target="blank">{address}</a>
      </ContactItemDataContainer>
    </ContactItemContainer>
    <ContactItemContainer>
      <ContactItemLogoContainer>
        <FontAwesomeIcon icon={faPhone} size="2x" />
      </ContactItemLogoContainer>
      <ContactItemDataContainer>
        <a href={`tel:${phone}`}>{phone}</a>
      </ContactItemDataContainer>
    </ContactItemContainer>
    <ContactItemContainer>
      <ContactItemLogoContainer>
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </ContactItemLogoContainer>
      <ContactItemDataContainer>
        <a href={`email:${email}`}>{email}</a>
      </ContactItemDataContainer>
    </ContactItemContainer>
    <ContactItemContainer>
      <ContactItemLogoContainer>
        <FontAwesomeIcon icon={faClock} size="2x" />
      </ContactItemLogoContainer>
      <ContactItemDataContainer>
        <span>{workingHours}</span>
      </ContactItemDataContainer>
    </ContactItemContainer>
  </ContactCardContainer>
);

export default ContactCardComponent;
