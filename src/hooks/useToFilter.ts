import { useState } from 'react';
import useStarWars from './useStarWars';

export default function useToFilter() {
  const { filter, setFilter } = useStarWars();

  const [category, setCategory] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);

  const resetAllFilters = () => {
    const resetedFilters = {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: 'Name',
        sort: 'ASC',
      },
    };

    setFilter(resetedFilters);
  }

  const addNewFilter = () => {
    const newFilter = {
      ...filter,
      filterByNumericValues: [
        ...filter.filterByNumericValues,
        { category, comparison, value },
      ],
    };
    setFilter(newFilter);
  };

  const dropdownCategories = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const dropdownComparasion = ['Greather than', 'Less than', 'Equal to'];

  return {
    category,
    comparison,
    setCategory,
    setComparison,
    setValue,
    addNewFilter,
    resetAllFilters,
    dropdownCategories,
    dropdownComparasion,
  };
}
