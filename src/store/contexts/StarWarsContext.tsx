import React, {
  createContext,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import sortPlanets from '../../helper/sort';
import { fetchPlanets } from '../../services/api';
import { planets } from '../../types/types';

type StarWarsContextProps = {
  children: ReactNode;
};
type Planets = planets[] | [];

export type filterByNumericTypes = {
  category: string;
  comparison: string;
  value: number;
};

type filterTypes = {
  filterByName: {
    name: string;
  };
  filterByNumericValues: filterByNumericTypes[];
  order: {
    column: string;
    sort: string;
  };
};

type StarWarsContextTypes = {
  planets: Planets;
  filter: filterTypes;
  setFilter: React.Dispatch<React.SetStateAction<filterTypes>>;
  removeFilter: (filterCategory: MouseEvent) => void;
};

export const StarWarsContextt = createContext({} as StarWarsContextTypes);

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

export function StarWarsContextProvider({ children }: StarWarsContextProps) {
  const [planets, setPlanets] = useState<Planets>([]);
  const [filter, setFilter] = useState<filterTypes>(INITIAL_FILTER);
  const [isLoaded, setIsLoaded] = useState(false);

  const removeFilter = (filterCategory: MouseEvent) => {
    const { id } = filterCategory.target as HTMLInputElement;
    const newFilter = filter.filterByNumericValues.filter(
      ({ category }) => category !== id
    );
    setFilter({ ...filter, filterByNumericValues: newFilter });
  };

  useEffect(() => {
    const fetchMount = async () => {
      const filteredPlanets = await fetchPlanets();
      setPlanets(filteredPlanets);
      setIsLoaded(true);
    };

    fetchMount();
  }, []);

  useEffect(() => {
    if (planets?.length && isLoaded) {
      const sortedPlanets = sortPlanets(planets, filter.order);
      setPlanets(sortedPlanets);
    }
  }, [filter.order, isLoaded]);

  return (
    <StarWarsContextt.Provider
      value={{ planets, filter, setFilter, removeFilter }}
    >
      {children}
    </StarWarsContextt.Provider>
  );
}

StarWarsContextProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};
