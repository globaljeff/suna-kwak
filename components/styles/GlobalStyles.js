import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'vintage';
    src: url('/font/vintagestyleregular-yzjkj-webfont.woff2') format('woff2'),
          url('/font/vintagestyleregular-yzjkj-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  :root {
    --primary-color: #C7B59F;
    --secondary-color: #C7B59F;
    --font-color: #000000;
    --bg-color: #ffffff;
    --heading-color: #818cab;
  }
  html[data-theme='light'] {
    --primary-color: #302AE6;
    --secondary-color: #536390;
    --font-color: #424242;
    --bg-color: #fff;
    --heading-color: #292922;
  }
  html[data-theme='dark'] {
    --primary-color: #9A97F3;
    --secondary-color: #818cab;
    --font-color: #e1e1ff;
    --bg-color: #161625;
    --heading-color: #818cab;
  }
  @media (prefers-color-scheme: dark)  {
    --primary-color: #9A97F3;
    --secondary-color: #818cab;
    --font-color: #e1e1ff;
    --bg-color: #161625;
    --heading-color: #818cab;
  }
  html {font-size: 100%;box-sizing:border-box;} /*16px*/
  *, *:before, *:after {
    box-sizing:inherit;
    margin:0;
    padding:0;
  }
  body {
    background: var(--bg-color);
    // font-family: 'Bicyclette', sans-serif;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: var(--font-color);
  }
  a {
    position: relative;
    text-decoration:none;
    color: var(--font-color);
  }
  a:hover{
    //color: var(--primary-color);
    text-decoration:underline;
    &::before {
      background: linear-gradient(to right, var(--secondary-color) 40%, var(--primary-color) 75%);
    }
  }
  button {
    font-family: 'Raleway', sans-serif;
  }
  p {margin-bottom: 1rem;}
  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }
  h1 {
    margin-top: 0;
    font-size: 5.653rem;
  }
  h2 {font-size: 3.998rem;}
  h3 {font-size: 2.827rem;}
  h4 {font-size: 1.999rem;}
  h5 {font-size: 1.414rem;}
  small, .text_small {font-size: 0.707rem;}
  .hero {
    display: block;
    padding: 5rem;
  }
  .wrapper { margin: 1rem; }
  .container { max-width: 1600px; margin: 0 auto; }
  section { padding: 3rem 0; }
  section.contrast {
    background-color: var(--secondary-color);
  }
  .btn {
    background: white;
    color: var(--font-color);
    border: 1px solid var(--font-color);
    padding: .4rem 2rem;
    border-radius: 30px;
    transition: all 300ms;
    text-transform:uppercase;
    letter-spacing:.1rem;
    ::before {
      content: "";
      position: absolute;
      height: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: none;
    }
    :hover{
      color: var(--text-color);
      cursor:pointer;
    }
  }
  .social{
    img{
      width:33px;
    }
  }
`;

export default GlobalStyles;
