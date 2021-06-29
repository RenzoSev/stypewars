import React from 'react';

import useFilter from '../../hooks/useFilter';
import useStarWars from '../../hooks/useStarWars';
import {
  getFirstLetterUpperCase,
  removeUnderlineFromLetter,
} from '../../helper/fixStrings';

import {
  DivContainerButton,
  DivContainerButtons,
  StyledButton,
} from './styles';

export default function RemoveFilters() {
  const { removeFilter } = useStarWars();
  const { filteredCategories } = useFilter();

  return (
    <DivContainerButtons>
      {filteredCategories.map((category) => (
        <DivContainerButton key={category}>
          <StyledButton
            type="button"
            onClick={(e) => removeFilter(e)}
            id={category}
          >
            {removeUnderlineFromLetter(getFirstLetterUpperCase(category))}
          </StyledButton>
        </DivContainerButton>
      ))}
    </DivContainerButtons>
  );
}
