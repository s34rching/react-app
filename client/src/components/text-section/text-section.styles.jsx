import styled from 'styled-components';

export const TextSectionWrapper = styled.div`
  width: 100%;
  
  & > p {
    margin: 30px 0 30px 0;
    padding-bottom: 22px;
    font-size: 18px;
    text-align: justify
  }
`;

TextSectionWrapper.displayName = 'TextSectionWrapper';

export const HeadingContainer = styled.h2`
  margin: 50px 0 30px 0;
  border-bottom: 0.5px solid #e3e1df;
  padding-bottom: 22px;
  font-size: 30px;
`;

HeadingContainer.displayName = 'HeadingContainer';
