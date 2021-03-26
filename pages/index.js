import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import styled from "styled-components"
import Link from "next/link"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const HeroStyled = styled.div`
  .text-center{
    text-align:center;
    h2{
      font-size:1rem;
      text-transform:uppercase;
      margin:0;
      font-weight:bold;

      &:after{
        content:url("/img/motif-1.svg");
        display:block;
      }
    }
  }
`;

const Work = styled.div`
  display:flex;
  margin:0 auto;
  flex-wrap:wrap;
  justify-content:center;
  .work-item{
    width:23%;
    margin:1%;
    min-width:200px;
    position:relative;
    overflow:hidden;
    img{
      width:100%;
      display:block;
    }
    cursor:pointer;
    &:hover .work-info{
      top:0;
    }
    
    .work-info{
      width:100%;
      height:100%;
      position:absolute;
      background-color:rgba(0,0,0,.5);
      top:100%;
      transition:all .4s;
      .work-text{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        //height:100%;
        width:100%;
        padding:5%;
        p{
          color:#ffffff;
          text-transform:uppercase;
          text-align:center;
          margin:0;
          &:first-of-type:after{
            content:'';
            height:1px;
            background-color:#ffffff;
            display:block;
            width:25%;
            margin:10px auto;
          }
        }
      }
    }
  }
`;

const Title = "Suna Kwak"
const Description = "Suna Kwak, wardrobe stylist"
const URL = "https://www.byer.co/"

export default function Home({ allPostsData }) {
  return (
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
        <HeroStyled>
          <div className="wrapper text-center">
            <h2>Wardrobe Stylist</h2>
          </div>
        </HeroStyled>
        <Work>
          <Link href="/work">
            <div className="work-item">
              <img src="/img/chips-guy.jpg" alt="chips guy" />
              <div className="work-info">
                <div className="work-text">
                  <p>Twas the night before kickoff</p>
                  <p>Frito-Lay</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work">
            <div className="work-item">
              <img src="/img/sam-jackson.jpg" alt="chips guy" />
              <div className="work-info">
                <div className="work-text">
                  <p>Twas the night before kickoff</p>
                  <p>Frito-Lay</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work">
            <div className="work-item">
              <img src="/img/pals.jpg" alt="chips guy" />
              <div className="work-info">
                <div className="work-text">
                  <p>Twas the night before kickoff</p>
                  <p>Frito-Lay</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work">
            <div className="work-item">
              <img src="/img/kickoff.jpg" alt="chips guy" />
              <div className="work-info">
                <div className="work-text">
                  <p>Twas the night before kickoff</p>
                  <p>Frito-Lay</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work">
            <div className="work-item">
              <img src="/img/sam-jackson.jpg" alt="chips guy" />
              <div className="work-info">
                <div className="work-text">
                  <p>Twas the night before kickoff</p>
                  <p>Frito-Lay</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work">
            <div className="work-item">
              <img src="/img/pals.jpg" alt="chips guy" />
              <div className="work-info">
                <div className="work-text">
                  <p>Twas the night before kickoff</p>
                  <p>Frito-Lay</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work">
            <div className="work-item">
              <img src="/img/kickoff.jpg" alt="chips guy" />
              <div className="work-info">
                <div className="work-text">
                  <p>Twas the night before kickoff</p>
                  <p>Frito-Lay</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work">
            <div className="work-item">
              <img src="/img/chips-guy.jpg" alt="chips guy" />
              <div className="work-info">
                <div className="work-text">
                  <p>Twas the night before kickoff</p>
                  <p>Frito-Lay</p>
                </div>
              </div>
            </div>
          </Link>
        </Work>
      </div>
      
    </>
  )
}
