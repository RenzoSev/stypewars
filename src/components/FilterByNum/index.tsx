import React from 'react';
import useFilter from '../../hooks/useFilter';
import useToFilter from '../../hooks/useToFilter';
import { ContainerSelect } from './styles';

function FilterByNum() {
  const {
    setCategory,
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
      <ContainerSelect>
        <select
          data-testid="column-filter"
          onChange={({ target }) => setCategory(target.value)}
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </ContainerSelect>

      <ContainerSelect>
        <select
          data-testid="comparison-filter"
          onChange={({ target }) => setComparison(target.value)}
        >
          {dropdownComparasion.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </ContainerSelect>

      <input
        type="number"
        data-testid="value-filter"
        onChange={({ target }) => setValue(Number(target.value))}
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={() => addNewFilter()}
      >
        Pesquisar
      </button>
    </div>
  );
}

export default FilterByNum;
