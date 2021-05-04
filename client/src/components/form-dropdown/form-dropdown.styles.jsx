import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  background: white;
  margin: 10px 0 10px 0;
  position: relative;
`;

DropdownWrapper.displayName = 'DropdownWrapper';

export const DropdownHeaderButton = styled.button`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 16px;
  width: 100%;
  padding: 10px 10px;
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
  font-size: 14px;
  text-align: left;
  padding: 5px;
  margin: 1px 0;
  width: 100%;

  &:hover {
    background: cadetblue;
    color: white;
  }
`;

DropdownOptionButton.displayName = 'DropdownOptionButton';

export const DropdownHeaderButtonTitle = styled.div`
  
`;

DropdownHeaderButtonTitle.displayName = 'DropdownHeaderButtonTitle';
