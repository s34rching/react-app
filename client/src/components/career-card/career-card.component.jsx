import React from 'react';
import {
  CareersCardContainer,
  CardImageContainer,
  JobDescriptionContainer,
  JobDepartment,
  JobTitle,
  JobLocation,
} from './career-card.styles';

export const CareersCard = ({
  title, department, imageUrl, location,
}) => (
  <CareersCardContainer>
    <CardImageContainer src={imageUrl} />
    <JobDescriptionContainer>
      <JobTitle>{title.toUpperCase()}</JobTitle>
      <JobDepartment>{department.toUpperCase()}</JobDepartment>
      <JobLocation>{location}</JobLocation>
    </JobDescriptionContainer>
  </CareersCardContainer>
);
