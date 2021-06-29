import styled from 'styled-components';
import GlobalButton from '../../styles/components/inputs/GlobalButon';

export const DivContainerButtons = styled.div`
  display: flex;
  gap: 0.8rem;
  margin: 0 auto;
  width: 94%;
`;

export const DivContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: snow;
`;

export const StyledButton = styled(GlobalButton)`
  border-color: #dc004e;
  span {
    color: #dc004e;
  }
`;
