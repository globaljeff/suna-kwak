import Link from "next/link"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display:flex;
  justify-content:space-between;
  padding-top:50px;
  margin:50px auto 0;
  border-top:1px solid var(--primary-color);
  .text-center{
    text-align: center; 
    p a{
      font-size:.8rem;
      font-weight:bold;
    }
  }
  a {
    display: inline-block;
    margin: 1rem;
    text-transform:uppercase;
  }
  .signature a{
    font-size:1.2rem;

    &:after{
      content:url("/img/motif-2.svg");
      display:block;
      text-align:center;
    }
  }
  @media (max-width:600px){
    display:block;
    text-align:center;
  }
`;

export default function Footer(){
  return (
    <div className="container">
      <StyledFooter>
        <div className="signature">
          <Link href="/"><a><storng>SUNA KWAK</storng></a></Link>
        </div>
        <div className="text-center">
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <p><a href="mailto:sunakwak@me.com">sunakwak@me.com</a> | <a href="tel:13103397100">1.310.339.7100</a></p>
        </div>
        <div className="social">
          <a href="youtube.com" target="_blank" rel="noopener"><img src="/img/youtube-logo.png" alt="youtube" /></a>
          <a href="facebook.com" target="_blank" rel="noopener"><img src="/img/facebook-logo.png" alt="youtube" /></a>
        </div>
      </StyledFooter>
    </div>
  )
}