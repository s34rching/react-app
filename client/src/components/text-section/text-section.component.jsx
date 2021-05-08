import React from 'react';

import { TextSectionWrapper, HeadingContainer } from './text-section.styles';

export const TextSection = ({ heading, children }) => (
  <TextSectionWrapper>
    <HeadingContainer>{heading}</HeadingContainer>
    {children}
  </TextSectionWrapper>
);
