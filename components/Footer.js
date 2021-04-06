import Link from "next/link"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
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
    font-family: 'vintage';
    line-height: 1;
    font-size: 2.2rem;
    text-transform: none;

    &:after{
      content:url("/img/motif-2.svg");
      display:block;
      text-align:center;
    }
  }
  .social {
    text-align: right;
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
          <Link href="/"><a>Suna Kwak</a></Link>
        </div>
        <div className="text-center">
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="social">
          <p><a href="mailto:sunakwak@me.com">sunakwak@me.com</a> | <a href="tel:13103397100">1.310.339.7100</a></p>
        </div>
      </StyledFooter>
    </div>
  )
}