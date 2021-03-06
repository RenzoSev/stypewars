import styled from 'styled-components';

import GlobalFormControl from '../../styles/components/containers/GlobalFormControl';
import GlobalInputLabel from '../../styles/components/labels/GlobalInputLabel';
import GlobalSelect from '../../styles/components/inputs/GlobalSelect';
import GlobalMenuItem from '../../styles/components/inputs/GlobalMenuItem';
import GlobalButton from '../../styles/components/inputs/GlobalButon';
import GlobalTextField from '../../styles/components/inputs/GlobalTextField';

export const StyledContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledFormControl = styled(GlobalFormControl)`
  width: 25%;
`;

export const StyledInputLabel = styled(GlobalInputLabel)``;

export const StyledSelect = styled(GlobalSelect)``;

export const StyledMenuItem = styled(GlobalMenuItem)``;

export const StyledButton = styled(GlobalButton)`
  padding: 0 0.6rem;
`;

export const StyledTextField = styled(GlobalTextField)`
  width: 20%;
`;
