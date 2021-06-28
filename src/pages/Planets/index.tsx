import FilterByName from '../../components/FilterByName';
import FilterByNum from '../../components/FilterByNum';
import OrderPlanets from '../../components/OrderPlanets';
import RemoveFilters from '../../components/RemoveFilters';
import Table from '../../components/Table';

import { ContainerPlanets, MainContainerPlanets } from './styles';

function Planets() {
  return (
    <MainContainerPlanets>
      <ContainerPlanets>
        <div>
          <FilterByName />
          <FilterByNum />
          <RemoveFilters />
          <OrderPlanets />
        </div>

        <Table />
      </ContainerPlanets>
    </MainContainerPlanets>
  );
}

export default Planets;
