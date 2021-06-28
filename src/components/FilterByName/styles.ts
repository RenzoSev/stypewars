import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

export const StyledTextField = styled(TextField)`
  background: #ffffff0a;
  border: 1px solid #8080801f;
  border-radius: 8px;
  width: 95%;
  margin: 0 auto;

  div {
    input {
      color: snow;
    }
  }

  label {
    color: inherit;
  }
`;
