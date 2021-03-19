import Header from './Header';
import {createGlobalStyle} from 'styled-components';
import Footer from './Footer';
import Head from 'next/head';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:300|Playfair+Display:400');
  html {font-size: 100%;box-sizing:border-box;} /*16px*/
  *, *:before, *:after {
    box-sizing:inherit;
    margin:0;
    padding:0;
  }
  body {
    background: white;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    line-height: 1.75;
    color: #000000;
  }
  a{
    text-decoration:none;
  }
  a:hover{
    text-decoration: underline;
  }
  button {
    font-family: 'Raleway', sans-serif;
  }
  p {margin-bottom: 1rem;}
  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    line-height: 1.3;
  }
  h1 {
    margin-top: 0;
    font-size: 11.089rem;
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
`;

export default function Page({children, title}){
  return(
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta property="fb:app_id" content="314715328581338"></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/faviconx64.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/faviconx32.png" />
        <link rel="apple-touch-icon"      sizes="180x180" href="/faviconx196.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar" content="#000000" />
      </Head>
      <div className="wrapper">
        <GlobalStyles />
        <Header/>
        {children}
        <Footer />
      </div>
    </>
  )
}
