import Head from 'next/head'
import styled from "styled-components"
import Link from "next/link"

const Title = "Suna Kwak"
const Description = "Suna Kwak, wardrobe stylist"
const URL = "https://www.byer.co/"

const WorkStyles = styled.div`
    display:flex;
    align-items:center;
    @media (max-width:800px){
        display:block;
    }
    & > div{
        flex:1;
        img{
            width:100%;
        }
    }
    h2{
        font-size:2rem;
        margin:0;
        text-transform:uppercase;
        font-weight:bold;
    }
    h3{
        font-size:1.3rem;
        margin:0;
        text-transform:uppercase;
        margin-bottom:40px;
    }
    .work-text{
        padding-left:50px;
        @media (max-width:800px){
            padding-left:0;
        }
    }
    a{
        text-transform:uppercase;
    }
    .buttons{
        margin:40px 0;
        .btn{
            display:inline-block;
            margin-right:20px;
        }
    }
`;

export default function WorkPage(){
    return(
        <>
            <Head>
                <title>{Title}</title>
                <meta name="description" content={Description} />
                <link rel="canonical" href={URL} />
                <meta property="og:title" content={Title} />
                <meta property="og:description" content={Description} />
                <meta property="og:url" content={URL} />
                <meta name="twitter:title" content={Title} />
                <meta name="twitter:description" content={Description} />
            </Head>

            <div className="container">
                <WorkStyles>
                    <div>
                        <img src="/img/video-placeholder.jpg" alt="video here" />
                    </div>
                    <div className="work-text">
                        <h2>Twas the night before kickoff</h2>
                        <h3>Frito-Lay</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
                        <div className="buttons">
                            <a className="btn">&lt; Last</a>
                            <a className="btn">Next &gt;</a>
                        </div>
                        <Link href="/">View All Work &gt;</Link>
                    </div>
                </WorkStyles>
            </div>
        </>
    )
}