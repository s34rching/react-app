import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  background: white;
  margin: 10px 0 10px 0;
  position: relative;
`;

DropdownWrapper.displayName = 'DropdownWrapper';

export const DropdownHeaderButton = styled.button`
  background: white;
  font-size: 18px;
  width: 100%;
`;

DropdownHeaderButton.displayName = 'DropdownHeaderButton';

export const DropdownTitle = styled.div`
  
`;

DropdownTitle.displayName = 'DropdownTitle';

export const DropdownListContainer = styled.div`
  visibility: ${({ isListOpen }) => `${isListOpen ? 'visible' : 'hidden'}`};
  position: absolute;
  z-index: 1;
  width: 100%;
`;

DropdownListContainer.displayName = 'DropdownListContainer';

export const DropdownOptionButton = styled.button`
  display: block;
  background: white;
  border: 1px groove slategrey;
  font-size: 18px;
  text-align: left;
  padding: 5px;
  margin-bottom: 2px;
  width: 100%;
`;

DropdownOptionButton.displayName = 'DropdownOptionButton';
