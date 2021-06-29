import { planets } from '../types/types';

type filterTypes = {
  value: number;
  category: string;
  comparison: string;
};

type filterFunctionsTypes = (
  array: planets[],
  category: string,
  value: number
) => planets[];

export const filterByName = (array: planets[], name: string) => {
  const filteredArrayByName = array.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );
  return filteredArrayByName;
};

const isGreatherThan: filterFunctionsTypes = (array, category, value) =>
  array.filter((item) => Number(item[category as keyof typeof item]) > value);

const isLessThan: filterFunctionsTypes = (array, category, value) =>
  array.filter((item) => Number(item[category as keyof typeof item]) < value);

const isEqualTo: filterFunctionsTypes = (array, category, value) =>
  array.filter((item) => Number(item[category as keyof typeof item]) === value);

export const filterByNum = (
  array: planets[],
  { value, category, comparison }: filterTypes
) => {
  const filters: { [key: string]: planets[] } = {
    'greather than': isGreatherThan(array, category, Number(value)),
    'less than': isLessThan(array, category, Number(value)),
    'equal to': isEqualTo(array, category, Number(value)),
  };

  return filters[comparison.toLowerCase()];
};
