import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Gotham Medium';
    src: url('fonts/GothamMedium/bold.woff') format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'Gotham Medium Regular';
    src: url('/fonts/GothamMedium/regular.woff') format('woff');
    font-display: swap;
  }

  :root {
    font-size: 62.5%;

    --default-font_color: #393c41;
    --font-grey30_color: #5c5e62;
    --default-font_size: 1.4rem;
    --default-font_family: 'Gotham Medium', sans-serif;

    --header-padding: 2rem;
    --header-default-font-color: #000;

    --default-cubic-bezier: cubic-bezier(0.5, 0.25, 0.25, 0.75);
    --burger-width: 1.8rem;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font:
      var(--default-font_size)
      var(--default-font_family);
    color: var(--default-font_color);
  }
  html,
  body,
  #__next,
  #__next > div {
    min-height: 100vh;
  }
  a {
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    text-decoration: none;
  }
`;
