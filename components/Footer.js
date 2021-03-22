import Link from "next/link"
import styled from "styled-components"

const StyledFooter = styled.footer`
  text-align: center; 
  a {
    display: inline-block;
    margin: 1rem;
  }
`;

export default function Footer(){
  return (
    <StyledFooter>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p>&copy;{new Date().getFullYear()} Byer Co. All Rights Reserved.</p>
    </StyledFooter>
  )
}