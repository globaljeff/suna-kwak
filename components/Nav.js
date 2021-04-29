import Link from "next/link"
import styled from "styled-components"

const StyledNav = styled.nav`
  position: relative;
  text-align: center;
  padding: 2vh 0;
  h1 {
    margin: 0px;
    line-height: 1;
    display: block;
  }
  h2 {
    font-size:1rem;
    text-transform:uppercase;
    margin:0;
    font-weight:bold;
    display: block;
  }
  a {
    display: inline-block;
    margin: 1rem;
    color: var(--font-color);
    transition: all 300ms;
  }
  .brand{
    font-family: 'vintage';
    font-size: 5.653rem;
    line-height: 1;
    margin: 0 auto;
    @media (max-width:900px){
      font-size:3rem;
      line-height: 1;
      margin-top: 1rem;
    }
  }
  .contact {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  
  @media (max-width:525px){
    h1 .brand {
      font-size: 5rem;
    }
    .contact {
      top: 0px;
      left: 0px;
      right: 0px;
      text-align: center;
    }
  }

`;

export default function Nav(){

  return (
    <StyledNav>
      <h1><Link href="/"><a className="brand">Suna Kwak</a></Link></h1>
      <h2>Wardrobe Stylist</h2>
      <div className="contact"><a href="mailto:sunakwak@me.com">sunakwak@me.com</a> | <a href="tel:+13103397100">1.310.339.7100</a></div>
    </StyledNav>
  )
}
