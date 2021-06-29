import styled from 'styled-components';

import GlobalTableContainer from '../../styles/components/table/GlobalTableContainer';
import GlobalTable from '../../styles/components/table/GlobalTable';
import GlobalTableHead from '../../styles/components/table/GlobalTableHead';
import GlobalTableBody from '../../styles/components/table/GlobalTableBody';
import GlobalTableRow from '../../styles/components/table/GlobalTableRow';
import GlobalTableCell from '../../styles/components/table/GlobalTableCell';
import Paper from '@material-ui/core/Paper';

export const StyledTableContainer = styled(GlobalTableContainer)``;

export const StyledTable = styled(GlobalTable)``;

export const StyledTableRow = styled(GlobalTableRow)`
  text-align: center;

  td {
    font-size: 0.9rem;
    width: 50px;
  }
`;

export const StyledTableHead = styled(GlobalTableHead)`
  tr {
    th {
      font-weight: 600;
    }
  }
`;

export const StyledTableBody = styled(GlobalTableBody)``;

export const StyledTableCell = styled(GlobalTableCell)`
  color: inherit;
`;

export const StyledPaper = styled(Paper)`
  background: #ffffff0a;
  border: 1px solid #ffffff38;
  margin: 0 auto;
  width: 94%;

  overflow-x: scroll;
  overflow-y: scroll;

  //SCROLLBAR
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: snow;
  }
`;
