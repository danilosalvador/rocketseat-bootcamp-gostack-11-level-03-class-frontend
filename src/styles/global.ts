import { createGlobalStyle } from 'styled-components';

import githubBackgroundImage from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubBackgroundImage}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased; /* Para deixar o texto com um desenho mais suave */
  }

  body, input, button {
    font: 16px Roboto, sans-serif; /* a fonte Roboto está sendo importado no public/index.html */
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
