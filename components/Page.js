import Header from "./Header"
import styled, {createGlobalStyle} from "styled-components";
import Footer from "./Footer";
import Head from 'next/head'

const GlobalStyles = createGlobalStyle`
    
    html{
        box-sizing:border-box;
    }
    *, *:before, *:after {
        box-sizing:inherit;
        margin:0;
        padding:0;
    }
    body{
        padding:0;
        margin:0;
        font-size:1rem;
        line-height:1.2;
        //set font family
    }
    a{
        text-decoration:none;
    }
    a:hover{
        text-decoration: underline;
    }
    button {
        //set font family here too..
    }
`;

export default function Page({children, title}){
    return(
        <div className="wrapper">
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="MobileOptimized" content="width" />
                <meta name="HandheldFriendly" content="true" />
            </Head>
            <GlobalStyles />
            <Header/>
            {children}
            <Footer />
        </div>
    )
}