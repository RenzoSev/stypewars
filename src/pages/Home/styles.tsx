import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  height: calc(100vh - 93.33px);
  padding: 0 9rem;

  label {
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 45%;
    padding: 0.5rem 0.5rem 1rem 0.5rem;

    font-size: 1.5rem;

    border-bottom: 1px solid snow;

    svg {
      cursor: pointer;
      transition: all 0.3s;
      color: snow;

      &:hover {
        opacity: 80%;
      }
    }

    input {
      border: none;
      background: transparent;
      font-size: 1rem;
      font-weight: bolder;
      outline: none;

      &::placeholder {
        color: snow;
        opacity: 80%;
      }
    }
  }
`;

export const MainTitle = styled.h1`
  color: snow;
  font-family: Montserrat;
  font-size: 8rem;
  font-weight: 800;
  letter-spacing: 0.8px;
`;
