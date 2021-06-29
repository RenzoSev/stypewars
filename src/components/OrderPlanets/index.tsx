import React, { useState } from 'react';
import useStarWars from '../../hooks/useStarWars';
import Radio from '@material-ui/core/Radio';
import {
  StyledContainerOrder,
  StyledFormControl,
  StyledRadioGroup,
  StyledFormControlLabel,
  StyledRadio,
  StyledInputLabel,
  StyledSelect,
  StyledMenuItem,
  StyledButton,
} from '../OrderPlanets/styles';
import {
  getFirstLetterUpperCase,
  removeUnderlineFromLetter,
} from '../../helper/fixStrings';

export default function OrderPlanets() {
  const { planets, filter, setFilter } = useStarWars();

  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');

  const columns = Object.keys(planets[0] || {});

  const handleSetFilter = () => {
    const newFilter = {
      ...filter,
      order: {
        ...filter.order,
        column,
        sort,
      },
    };

    setFilter(newFilter);
  };

  return (
    <StyledContainerOrder>
      <StyledFormControl variant="filled">
        <StyledInputLabel id="column-sort">Category</StyledInputLabel>

        <StyledSelect
          id="column-sort"
          onChange={({ target }) => setColumn(target.value as string)}
          value={column}
          label="Category"
        >
          {columns.map((col) => (
            <StyledMenuItem key={col} value={col}>
              {removeUnderlineFromLetter(getFirstLetterUpperCase(col))}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>

      <StyledRadioGroup
        aria-label="order"
        defaultValue="ASC"
        name="radio-buttons-order"
      >
        <StyledFormControlLabel
          value="ASC"
          control={
            <Radio
              color="primary"
              onChange={({ target }) => setSort(target.value)}
            />
          }
          label="ASC"
        />
        <StyledFormControlLabel
          value="DSC"
          control={
            <StyledRadio onChange={({ target }) => setSort(target.value)} />
          }
          label="DSC"
        />
      </StyledRadioGroup>

      <StyledButton
        data-testid="column-sort-button"
        type="button"
        onClick={handleSetFilter}
      >
        Definir ordenação
      </StyledButton>
    </StyledContainerOrder>
  );
}
