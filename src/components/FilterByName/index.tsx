import React from 'react';
import useStarWars from '../../hooks/useStarWars';
import { StyledTextField } from './styles';

function FilterByName() {
  const { filter, setFilter } = useStarWars();

  const filterByName = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = {
      ...filter,
      filterByName: { ...filter.filterByName, name: target.value },
    };
    setFilter(newFilter);
  };

  return (
    <StyledTextField
      onChange={filterByName}
      variant="filled"
      type="search"
      label="Search by name"
    />
  );
}

export default FilterByName;
