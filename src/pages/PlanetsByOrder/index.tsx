import OrderPlanets from '../../components/OrderPlanets';
import Table from '../../components/Table';

import { ContainerPlanets, MainContainerPlanets } from './styles';

function PlanetsByOrder() {
  return (
    <MainContainerPlanets>
      <ContainerPlanets>
        <div>
          <OrderPlanets />
        </div>

        <Table />
      </ContainerPlanets>
    </MainContainerPlanets>
  );
}

export default PlanetsByOrder;
