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
    'maior que': isGreatherThan(array, category, Number(value)),
    'menor que': isLessThan(array, category, Number(value)),
    'igual a': isEqualTo(array, category, Number(value)),
  };

  return filters[comparison];
};
