import React from 'react';
import useFilter from '../../hooks/useFilter';
import useStarWars from '../../hooks/useStarWars';
import { planets } from '../../types/types';

function Table() {
  const { planets } = useStarWars();
  const { filteredPlanets } = useFilter();

  const renderPlanetInformation = (planet: planets) => {
    const planetInfos = Object.values(planet);

    return (
      <tr key={ planet.name }>
        {planetInfos.map((info, index) => {
          if (!index) {
            return (
              <td key={ info } data-testid="planet-name">
                {info}
              </td>
            );
          }

          return <td key={ info }>{info}</td>;
        })}
      </tr>
    );
  };

  if (!planets.length) return <p>Loading...</p>;
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((info) => <th key={ info }>{info}</th>)}
        </tr>
      </thead>

      <tbody>
        {filteredPlanets.map((planet) => renderPlanetInformation(planet))}
      </tbody>
    </table>
  );
}

export default Table;
