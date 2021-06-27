import React from 'react';
import useStarWars from '../../hooks/useStarWars';

function FilterByName() {
  const { filter, setFilter } = useStarWars();

  const filterByName = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = {
      ...filter,
      filterByName: { ...filter.filterByName, name: target.value },
    };
    setFilter(newFilter);
  };

  return <input data-testid="name-filter" onChange={ filterByName } />;
}

export default FilterByName;
