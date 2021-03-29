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
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aKg66q1zEuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="work-text">
                        <h2>Drake From State Farm</h2>
                        <h3>State Farm</h3>
                        <div className="buttons">
                            <Link href="/work/capital-one-spectacle"><a className="btn">&lt; Last</a></Link>
                            <Link href="/work/frito-lay-twas-the-night-before-superbowl"><a className="btn">Next &gt;</a></Link>
                        </div>
                        <Link href="/">View All Work &gt;</Link>
                    </div>
                </WorkStyles>
            </div>
        </>
    )
}