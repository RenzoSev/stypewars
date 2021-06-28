import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const StyledFormControl = styled(FormControl)`
  width: 30%;
`;

export const StyledInputLabel = styled(InputLabel)`
  color: snow;
  padding: 0 0.3rem;

  &.MuiFormLabel-root {
    color: inherit;
  }
`;

export const StyledSelect = styled(Select)`
  color: snow;
  align-items: unset;
  padding: 0.3rem;
`;

export const StyledMenuItem = styled(MenuItem)`
  color: black;
`;
