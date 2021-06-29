import styled from "styled-components";

export const MainContainerPlanets = styled('main')`
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

export const ContainerPlanets = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  height: 100%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
