import { planets } from '../types/types';

type orderType = { column: string; sort: string };
type sortPlanetsTypes = (planets: planets[], order: orderType) => planets[];
type sortFunctionsTypes = (a: planets, b: planets, column: string) => number;

const checkNaN = (value: string) => Number.isNaN(Number(value));

const getSortStructure = ( a: planets, b: planets, colum: string ) => {
  const sortNumber = -1;

  const checkValue = checkNaN(String(a[colum as keyof typeof a]));

  const aValue = checkValue
    ? a[colum as keyof typeof a]
    : Number(a[colum as keyof typeof a]);
  const bValue = checkValue
    ? b[colum as keyof typeof b]
    : Number(b[colum as keyof typeof a]);

  return { sortNumber, aValue, bValue };
};

const sortASC: sortFunctionsTypes = (a, b, colum) => {
  const { aValue, bValue, sortNumber } = getSortStructure(a, b, colum);

  if (aValue > bValue) return 1;
  if (bValue > aValue) return sortNumber;
  return 0;
};

const sortDSC: sortFunctionsTypes = (a, b, colum) => {
  const { aValue, bValue, sortNumber } = getSortStructure(a, b, colum);

  if (aValue > bValue) return sortNumber;
  if (bValue > aValue) return 1;
  return 0;
};

const sortPlanets: sortPlanetsTypes = (planets, { column, sort }) => {
  const toLowerColumn = column.toLowerCase();

  const getSort: { [key: string]: planets[] } = {
    ASC: [...planets].sort((a, b) => sortASC(a, b, toLowerColumn)),
    DSC: [...planets].sort((a, b) => sortDSC(a, b, toLowerColumn)),
  };

  return getSort[sort];
};

export default sortPlanets;
