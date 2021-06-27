import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export const ImageLogo = styled.img`
  filter: invert(100%) sepia(0%) saturate(7464%) hue-rotate(306deg)
    brightness(107%) contrast(101%);
  width: 92px;
`;

export const DivLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    font-family: Lato, sans-serif;
    color: white;
    font-weight: bold;
    transition: all 0.3s;
    border: 1px solid transparent;

    &:hover {
      opacity: 80%;
      border-bottom: 1px solid white;
    }
  }

  width: 70%;
`;
