import React from 'react';
import useFilter from '../../hooks/useFilter';
import useToFilter from '../../hooks/useToFilter';

import {
  StyledFormControl,
  StyledInputLabel,
  StyledSelect,
  StyledMenuItem,
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
    <div>
      <StyledFormControl>
        <StyledInputLabel id="column-filter">Category</StyledInputLabel>
        <StyledSelect
          id="column-filter"
          onChange={(e) => setCategory(e.target.value as string)}
          value={category}
          label="Category"
        >
          {categories.map((item) => (
            <StyledMenuItem key={item} value={item}>
              {item}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>

      <StyledFormControl>
        <StyledInputLabel id="comparison-filter">Comparison</StyledInputLabel>
        <StyledSelect
          id="comparison-filter"
          onChange={({ target }) => setComparison(target.value as string)}
          value={comparison}
          label="Comparison"
        >
          {dropdownComparasion.map((item) => (
            <StyledMenuItem key={item} value={item}>{item}</StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>

      <input
        type="number"
        id="value-filter"
        onChange={({ target }) => setValue(Number(target.value))}
      />

      <button id="button-filter" type="button" onClick={() => addNewFilter()}>
        Pesquisar
      </button>
    </div>
  );
}

export default FilterByNum;
