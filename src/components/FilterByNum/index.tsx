import React from 'react';

import {
  getFirstLetterUpperCase,
  removeUnderlineFromLetter,
} from '../../helper/fixStrings';
import useFilter from '../../hooks/useFilter';
import useToFilter from '../../hooks/useToFilter';

import {
  StyledContainerInputs,
  StyledFormControl,
  StyledInputLabel,
  StyledSelect,
  StyledMenuItem,
  StyledButton,
  StyledTextField,
} from './styles';

function FilterByNum() {
  const {
    setCategory,
    category,
    comparison,
    setComparison,
    setValue,
    addNewFilter,
    dropdownCategories,
    dropdownComparasion,
  } = useToFilter();
  const { filteredCategories } = useFilter();

  const categories = dropdownCategories.reduce((acc, cur) => {
    if (filteredCategories.includes(cur)) return acc;
    return acc.concat(cur);
  }, [] as string[]);

  return (
    <StyledContainerInputs>
      <StyledFormControl variant="filled">
        <StyledInputLabel id="column-filter">Category</StyledInputLabel>
        <StyledSelect
          id="column-filter"
          onChange={(e) => setCategory(e.target.value as string)}
          value={category}
          label="Category"
        >
          {categories.map((item) => (
            <StyledMenuItem key={item} value={item}>
              {removeUnderlineFromLetter(getFirstLetterUpperCase(item))}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>

      <StyledFormControl variant="filled">
        <StyledInputLabel id="comparison-filter">Comparison</StyledInputLabel>
        <StyledSelect
          id="comparison-filter"
          onChange={({ target }) => setComparison(target.value as string)}
          value={comparison}
          label="Comparison"
        >
          {dropdownComparasion.map((item) => (
            <StyledMenuItem key={item} value={item}>
              {item}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>

      <StyledTextField
        type="number"
        id="standard-number"
        label="Value"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={({ target }) => setValue(Number(target.value))}
        placeholder="0"
        variant="filled"
      />

      <StyledButton
        id="button-filter"
        type="button"
        onClick={() => addNewFilter()}
      >
        search
      </StyledButton>
    </StyledContainerInputs>
  );
}

export default FilterByNum;
