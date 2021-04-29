import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Footer from './Footer';
import Head from 'next/head';

export default function Page({children}){
  return(
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Raleway:300|Playfair+Display:400&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300|Playfair+Display:400&display=swap" media="print" onLoad="this.media='all'" />
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
