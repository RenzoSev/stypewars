import React from 'react';

import {
  getFirstLetterUpperCase,
  removeUnderlineFromLetter,
} from '../../helper/fixStrings';
import useFilter from '../../hooks/useFilter';
import useStarWars from '../../hooks/useStarWars';
import { planets } from '../../types/types';

import TableContainer from '@material-ui/core/TableContainer';
import {
  StyledTable,
  StyledTableHead,
  StyledTableRow,
  StyledTableBody,
  StyledTableCell,
  StyledPaper,
} from './styles';

function Table() {
  const { planets } = useStarWars();
  const { filteredPlanets } = useFilter();

  const planetKeysToTableHead = Object.keys(planets[0] || {}).map((str) => {
    const firstLetterUpperCase = getFirstLetterUpperCase(str);
    return removeUnderlineFromLetter(firstLetterUpperCase);
  });

  const renderPlanetInformation = (planet: planets) => {
    const planetInfos = Object.values(planet);

    return (
      <StyledTableRow key={planet.name}>
        {planetInfos.map((info, index) => {
          if (!index) {
            return (
              <StyledTableCell key={info} align="center">
                {info}
              </StyledTableCell>
            );
          }

          return <td key={info}>{info}</td>;
        })}
      </StyledTableRow>
    );
  };

  if (!planets.length) return <p>Loading...</p>;
  return (
    <TableContainer component={StyledPaper}>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            {planetKeysToTableHead.map((info) => (
              <StyledTableCell key={info} align="center">
                {info}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </StyledTableHead>

        <StyledTableBody>
          {filteredPlanets.map((planet) => renderPlanetInformation(planet))}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  );
}

export default Table;
