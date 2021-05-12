import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone, faMapMarkedAlt, faEnvelope, faClock,
} from '@fortawesome/free-solid-svg-icons';
import {
  LocationItemContainer,
  LocationCardContainer,
  LocationCardTitleContainer,
  LocationItemLogoContainer,
  LocationItemDataContainer,
  ShopPanoramaContainer,
  LocationCardDataContainer,
} from './location-card.styles';

export const LocationCardComponent = ({
 city, address, map, phone, email, workingHours, bgImage,
}) => (
  <LocationCardContainer>
    <LocationCardTitleContainer>{city}</LocationCardTitleContainer>
    <LocationCardDataContainer>
      <LocationItemContainer>
        <LocationItemLogoContainer>
          <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />
        </LocationItemLogoContainer>
        <LocationItemDataContainer isMapLink>
          <a href={map} target="blank">{address}</a>
        </LocationItemDataContainer>
      </LocationItemContainer>
      <LocationItemContainer>
        <LocationItemLogoContainer>
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </LocationItemLogoContainer>
        <LocationItemDataContainer>
          <a href={`tel:${phone}`}>{phone}</a>
        </LocationItemDataContainer>
      </LocationItemContainer>
      <LocationItemContainer>
        <LocationItemLogoContainer>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </LocationItemLogoContainer>
        <LocationItemDataContainer>
          <a href={`email:${email}`}>{email}</a>
        </LocationItemDataContainer>
      </LocationItemContainer>
      <LocationItemContainer>
        <LocationItemLogoContainer>
          <FontAwesomeIcon icon={faClock} size="2x" />
        </LocationItemLogoContainer>
        <LocationItemDataContainer>
          <span>{workingHours}</span>
        </LocationItemDataContainer>
      </LocationItemContainer>
    </LocationCardDataContainer>
    <ShopPanoramaContainer bgImage={bgImage} />
  </LocationCardContainer>
);

export default LocationCardComponent;
