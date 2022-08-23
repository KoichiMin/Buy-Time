import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-white: #F9F7F7;
    --color-pale-blue: #DBE2EF;
    --color-light-blue: #3F72AF;
    --color-dark-blue: #112D4E;
    --color-buttons: #add8e6;
    --font-family: 'Poppins', sans-serif;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  h1,
  h2,
  h3,
  label,
  button {
    font-family: var(--font-family);
    text-align: center;
  }

  p,
  a,
  li,
  blockquote,
  input {
    font-family: var(--font-family);
  }
`;