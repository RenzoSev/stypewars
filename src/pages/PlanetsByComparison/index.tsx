import FilterByNum from '../../components/FilterByNum';
import RemoveFilters from '../../components/RemoveFilters';
import Table from '../../components/Table';

import { ContainerPlanets, MainContainerPlanets } from './styles';

function PlanetsByComparison() {
  return (
    <MainContainerPlanets>
      <ContainerPlanets>
        <div>
          <FilterByNum />
          <RemoveFilters />
        </div>

        <Table />
      </ContainerPlanets>
    </MainContainerPlanets>
  );
}

export default PlanetsByComparison;
