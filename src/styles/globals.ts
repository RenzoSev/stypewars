import { createGlobalStyle } from 'styled-components';
import galaxyImg from '../assets/galaxy.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: var(--text-base);
  };

  h1, h2, h3, h4, h5, h6 {
    font-family: Lato, sans-serif;
  }

  :root {
    --text-base: #d7d3ce;
  }

  body {
    background-image: url(${galaxyImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
  }
`;
