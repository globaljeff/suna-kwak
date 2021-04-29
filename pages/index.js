import Head from 'next/head'
import styled from "styled-components"
import Link from "next/link"

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
    height:207px;
    img{
      width:100%;
      display:block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
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
  @media (max-width:525px){
    .work-item {
      width: 100%;
    }
  }
`;

const Title = "Suna Kwak"
const Description = "Suna Kwak, wardrobe stylist"
const URL = "https://www.sunakwak.com/"

export default function Home() {
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
        <Work>
          <Link href="/work/capital-one-spectacle">
            <div className="work-item">
              <img src="/img/capital-one-spectacle.jpg" alt="Capital One - Spectacle" />
              <div className="work-info">
                <div className="work-text">
                  <p>Spectacle</p>
                  <p>Capital One</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/drake-from-state-farm">
            <div className="work-item">
              <img src="/img/pals.jpg" alt="Drake from State Farm" />
              <div className="work-info">
                <div className="work-text">
                  <p>Drake from State Farm</p>
                  <p>State Farm</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/frito-lay-twas-the-night-before-superbowl">
            <div className="work-item">
              <img src="/img/kickoff.jpg" alt="Frito-Lay - Twas the night before Superbowl" />
              <div className="work-info">
                <div className="work-text">
                  <p>Twas the night before superbowl</p>
                  <p>Frito-Lay</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/frito-lay-twas-the-night-before-kickoff">
            <div className="work-item">
              <img src="/img/chips-guy.jpg" alt="Twas the night before Kickoff" />
              <div className="work-info">
                <div className="work-text">
                  <p>Twas the night before kickoff</p>
                  <p>Frito-Lay</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/work/miller-light-roadie">
            <div className="work-item">
              <img src="/img/miller-light-roadie.jpeg" alt="Miller Light - Roadie" />
              <div className="work-info">
                <div className="work-text">
                  <p>Roadie</p>
                  <p>Miller Light</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/capital-one-chuxedo">
            <div className="work-item">
              <img src="/img/capital-one-chuxedo.jpeg" alt="Capital One - Chuxedo" />
              <div className="work-info">
                <div className="work-text">
                  <p>Chuxedo</p>
                  <p>Capital One</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/us-army-amphibious-assault">
            <div className="work-item">
              <img src="/img/us-army-amphibious-assault.jpeg" alt="US Army - Amphibious Assault" />
              <div className="work-info">
                <div className="work-text">
                  <p>Amphibious Assault</p>
                  <p>US Army</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/call-of-duty-infinite-warfare">
            <div className="work-item">
              <img src="/img/call-of-duty.jpeg" alt="Call of Duty - Infinite Warfare" />
              <div className="work-info">
                <div className="work-text">
                  <p>Infinite Warfare</p>
                  <p>Call of Duty</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/hyundai-genesis-car-finder">
            <div className="work-item">
              <img src="/img/hyundai.jpeg" alt="Hyundai" />
              <div className="work-info">
                <div className="work-text">
                  <p>Hyundai Genesis Car Finder</p>
                  <p>Hyundai</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/discover-card">
            <div className="work-item">
              <img src="/img/discover.jpeg" alt="Discover" />
              <div className="work-info">
                <div className="work-text">
                  <p>Discover Card</p>
                  <p>Discover</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/work/att-1">
            <div className="work-item">
              <img src="/img/at&t-1.jpg" alt="AT&T - One" />
              <div className="work-info">
                <div className="work-text">
                  <p>AT&amp;T (1)</p>
                  <p>AT&amp;T</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/att-2">
            <div className="work-item">
              <img src="/img/at&t-2.jpg" alt="AT&T - Two" />
              <div className="work-info">
                <div className="work-text">
                  <p>AT&amp;T (2)</p>
                  <p>AT&amp;T</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/california-lotto-scratchers">
            <div className="work-item">
              <img src="/img/california-lotto-scratchers.jpeg" alt="California - Lotto Scratchers" />
              <div className="work-info">
                <div className="work-text">
                  <p>Lotto Scratchers</p>
                  <p>California</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/work/bank-of-america-five-fine-fillies">
            <div className="work-item">
              <img src="/img/bank-of-america-five-fine-fillies.jpeg" alt="Bank of America - Five Fine Fillies" />
              <div className="work-info">
                <div className="work-text">
                  <p>Five Fine Fillies</p>
                  <p>Bank of America</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/psa-child-hunger-3">
            <div className="work-item">
              <img src="/img/psa-child-hunger-3.jpeg" alt="PSA - Child Hunger (3)" />
              <div className="work-info">
                <div className="work-text">
                  <p>Child Hunger (3)</p>
                  <p>PSA</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/psa-child-hunger-4">
            <div className="work-item">
              <img src="/img/psa-child-hunger-4.jpeg" alt="PSA - Child Hunger (4)" />
              <div className="work-info">
                <div className="work-text">
                  <p>Child Hunger (4)</p>
                  <p>PSA</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/mercedes-male-world">
            <div className="work-item">
              <img src="/img/mercedes-mans-world.jpg" alt="Mercedes - Male World" />
              <div className="work-info">
                <div className="work-text">
                  <p>Male World</p>
                  <p>Mercedes</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/work/minutemaid-lunch-lady">
            <div className="work-item">
              <img src="/img/minutemaid-lunch-lady.jpeg" alt="Minutemaid - Lunch Lady" />
              <div className="work-info">
                <div className="work-text">
                  <p>Lunch Lady</p>
                  <p>Minutemaid</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/nike-football-is-everything-1">
            <div className="work-item">
              <img src="/img/nike-football-1.jpg" alt="Nike - Football is everything (1)" />
              <div className="work-info">
                <div className="work-text">
                  <p>Football is Everything (1)</p>
                  <p>Nike</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/nike-football-is-everything-2">
            <div className="work-item">
              <img src="/img/nike-football-2.jpg" alt="Nike - Football is everything (2)" />
              <div className="work-info">
                <div className="work-text">
                  <p>Football is Everything (2)</p>
                  <p>Nike</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/nike-warriors">
            <div className="work-item">
              <img src="/img/nike-warriors.jpeg" alt="Nike - Warriors" />
              <div className="work-info">
                <div className="work-text">
                  <p>Warriors</p>
                  <p>Nike</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/work/nike-the-black-mamba">
            <div className="work-item">
              <img src="/img/nike-mamba.jpg" alt="Nike - The Blank Mamba" />
              <div className="work-info">
                <div className="work-text">
                  <p>The Black Mamba</p>
                  <p>Nike</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/mercedes-balloon">
            <div className="work-item">
              <img src="/img/mercedes-balloon.jpeg" alt="Mercedes - Balloon" />
              <div className="work-info">
                <div className="work-text">
                  <p>Balloon</p>
                  <p>Mercedes</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/mercedes-smart-saves-the-city">
            <div className="work-item">
              <img src="/img/mercedes-smart.jpg" alt="Mercedes - Smart saves the city" />
              <div className="work-info">
                <div className="work-text">
                  <p>Smart Saves the City</p>
                  <p>Mercedes</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/work/kfc-drivethrough">
            <div className="work-item">
              <img src="/img/kfc-drivethrough.jpeg" alt="kfc - drive through" />
              <div className="work-info">
                <div className="work-text">
                  <p>Drivethru</p>
                  <p>KFC</p>
                </div>
              </div>
            </div>
          </Link>
        </Work>
      </div>
      
    </>
  )
}
