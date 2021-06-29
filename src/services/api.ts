import getObjectWithoutTheKey from '../helper/objectsMethods';
import { planets, planetWithResidents } from '../types/types';

const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

type genericApiType = (url: string) => Promise<{
  count: number;
  next: string;
  previous: null;
  results: planetWithResidents[];
}>;

export const genericAPI: genericApiType = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export const starwarsPlanetsAPI = async () => {
  const { results } = await genericAPI(PLANETS_URL);
  return results;
};

export const fetchPlanets = async () => {
  const results = await starwarsPlanetsAPI();
  const keysToRemove = ['residents', 'films', 'created', 'edited', 'url'];
  const filteredResults = results.map((planet) => {
    const filteredPlanet = keysToRemove.reduce((acc, cur, index) => {
      if (!index) {
        const planetObject = getObjectWithoutTheKey(planet, cur);
        return planetObject;
      }

      const planetObject = getObjectWithoutTheKey(acc, cur);
      return planetObject;
    }, planet as planets);
    return filteredPlanet;
  });
  return filteredResults;
};
