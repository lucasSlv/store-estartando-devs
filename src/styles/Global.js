import { createGlobalStyle } from 'styled-components';
import RobotoFont from './Fonts';

const GlobalStyle = createGlobalStyle`
  ${RobotoFont}
  body {
    font: 1rem Roboto, sans-serif;
    box-sizing: border-box;
    background-color: #F4F6F8;
  }

  h3 {
    font-weight: 700;
    font-size: 20px;

    color: #222222;
  }

  h4 {
    font-size: 14px;
    font-weight: 500;

    color: #222222;
  }

  h5 {
    font-size: 14px;
    font-weight: 500;
    color: #000000;
  }

  ul {
    padding-inline-start: 0;
  }
`;

export default GlobalStyle;