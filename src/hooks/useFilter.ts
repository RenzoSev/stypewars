import { filterByName, filterByNum } from '../helper/filters';
import { planets } from '../types/types';
import useStarWars from './useStarWars';

export default function useFilter() {
  const { filter, planets } = useStarWars();
  const { filterByNumericValues } = filter;
  const isThereAFilter = filter.filterByNumericValues.length;

  const planetsByName = filterByName(planets, filter.filterByName.name);
  const filteredCategories = isThereAFilter ? filterByNumericValues
    .map(({ category }) => category) : [];

  const planetsByNums = () =>
    filterByNumericValues.reduce((acc, cur, index) => {
      if (!index) return filterByNum(planetsByName, filterByNumericValues[0]);
      const filteredAcc = filterByNum(acc, cur);
      return filteredAcc;
    }, planetsByName);

  const filteredPlanets = isThereAFilter ? planetsByNums() : planetsByName;

  return { filteredPlanets, filteredCategories };
}
