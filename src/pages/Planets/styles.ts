import styled from "styled-components";

export const MainContainerPlanets = styled.main`
  background: #00000038;
  // #ffffff03
  // #00000038

  padding: 1.2rem;
  width: 85%;
  margin: 0 auto;
  height: calc(100vh - 120px);

  border: 1px solid #fffafa14;
  border-radius: 4px;

`;

export const ContainerPlanets = styled.div`
  height: 100%;

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