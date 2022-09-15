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
    line-height: 120%;

    color: #222222;
  }
`;

export default GlobalStyle;