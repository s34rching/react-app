import React from 'react';

import { TextSectionWrapper, HeadingContainer, ContentsContainer } from './text-section.styles';

export const TextSection = ({ heading, contents }) => (
  <TextSectionWrapper>
    <HeadingContainer>{heading}</HeadingContainer>
    <ContentsContainer>{contents}</ContentsContainer>
  </TextSectionWrapper>
);
