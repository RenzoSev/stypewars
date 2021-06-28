import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const StyledContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledFormControl = styled(FormControl)`
  background: #ffffff0a;
  border-radius: 8px;
  width: 25%;
`;

export const StyledInputLabel = styled(InputLabel)`
  color: snow;
`;

export const StyledSelect = styled(Select)`
  color: snow;
  align-items: unset;
`;

export const StyledMenuItem = styled(MenuItem)`
  color: black;
`;

export const StyledButton = styled(Button)`
  background: #ffffff0a;
  border: 1px solid white;
  padding: 0 0.6rem;
`;

export const StyledTextField = styled(TextField)`
  background: #ffffff0a;
  border-radius: 1px solid #ffffff24;
  width: 20%;

  label,
  input {
    color: snow;
  }
`;
