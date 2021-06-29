import styled from 'styled-components';

import GlobalFormControl from '../../styles/components/containers/GlobalFormControl';
import GlobalRadioGroup from '../../styles/components/containers/GlobalRadioGroup';
import GlobalRadio from '../../styles/components/inputs/GlobalRadio';
import GlobalInputLabel from '../../styles/components/labels/GlobalInputLabel';
import GlobalSelect from '../../styles/components/inputs/GlobalSelect';
import GlobalMenuItem from '../../styles/components/inputs/GlobalMenuItem';
import GlobalFormControlLabel from '../../styles/components/labels/GlobalFormControlLabel';
import GlobalButton from '../../styles/components/inputs/GlobalButon';

export const StyledContainerOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  width: 94%;

  color: snow;
`;

export const StyledFormControl = styled(GlobalFormControl)`
  width: 33%;
`;

export const StyledFormControlLabel = styled(GlobalFormControlLabel)`
  span {
    span {
      color: #3f51b5;
    }
  }
`;

export const StyledRadioGroup = styled(GlobalRadioGroup)`
  flex-flow: row;
`;

export const StyledRadio = styled(GlobalRadio)``;

export const StyledInputLabel = styled(GlobalInputLabel)``;

export const StyledSelect = styled(GlobalSelect)``;

export const StyledMenuItem = styled(GlobalMenuItem)``;

export const StyledButton = styled(GlobalButton)`
  width: 35%;
  padding: 1rem 0;
`;
