import React, { useState, useRef, useEffect } from 'react';
import FontAwesome from 'react-fontawesome';
import {
  DropdownWrapper,
  DropdownHeaderButton,
  DropdownListContainer,
  DropdownOptionButton,
} from './form-dropdown.styles';

export const FormDropdown = ({ dropdownTitle, options }) => {
  const node = useRef();
  const [listState, toggleList] = useState({ listTitle: dropdownTitle, isListOpen: false });
  const { listTitle, isListOpen } = listState;

  const selectItem = (item) => {
    const { title } = item;

    toggleList({ ...listState, listTitle: title, isListOpen: !isListOpen });
  };

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    if (isListOpen) {
      toggleList({ ...listState, isListOpen: false });
    }
  };

  useEffect(() => {
    if (isListOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isListOpen]);

  return (
    <div ref={node}>
      <DropdownWrapper>
        <DropdownHeaderButton
          type="button"
          className="dd-header"
          onClick={() => toggleList({ ...listState, isListOpen: !isListOpen })}
        >
          <div className="dd-header-title">{listTitle}</div>
          {
            isListOpen
              ? <FontAwesome name="angle-up" />
              : <FontAwesome name="angle-down" />
          }
        </DropdownHeaderButton>
        <DropdownListContainer isListOpen={isListOpen}>
          {
            options.map((item) => (
              <DropdownOptionButton
                type="button"
                key={item.id}
                onClick={() => selectItem(item)}
              >
                {item.title}
                {' '}
                {item.selected && <FontAwesome name="check" />}
              </DropdownOptionButton>
            ))
          }
        </DropdownListContainer>
      </DropdownWrapper>
    </div>
  );
};
