import { createStyles, makeStyles } from '@material-ui/core';
import galaxyImg from '../assets/galaxy.png';
// import { createGlobalStyle } from 'styled-components';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        margin: '0',
        padding: '0',
        'box-sizing': 'border-box',
        'font-family': 'Montserrat, sans-serif',
        color: 'snow',
        'h1, h2, h3, h4, h5, h6': {
          'font-family': 'Lato, sans-serif',
        },
      },
      body: {
        'background-image': `url(${galaxyImg})`,
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'min-height': '100vh',
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
