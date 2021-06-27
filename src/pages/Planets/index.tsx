import FilterByName from '../../components/FilterByName';
import FilterByNum from '../../components/FilterByNum';
import OrderPlanets from '../../components/OrderPlanets';
import RemoveFilters from '../../components/RemoveFilters';
import Table from '../../components/Table';

function Planets() {
  return (
    <>
      <FilterByName />
      <FilterByNum />
      <RemoveFilters />
      <OrderPlanets />
      <Table />
    </>
  );
} 

export default Planets;
