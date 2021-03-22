import Link from "next/link"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 1rem;
  justify-content: start;
  justify-items: center;
  a {
    display: inline-block;
    margin: 1rem;
  }
`;

export default function Nav(){
    
    return (
        <StyledNav>
            <Link href="/"><img src="/favicon.png" alt="logo" /></Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </StyledNav>
    )
}