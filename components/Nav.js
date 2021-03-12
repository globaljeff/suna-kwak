import Link from "next/link"
import styled from "styled-components"

const StyledNav = styled.nav`
    
`;


export default function Nav(){
    
    return (
        <StyledNav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </StyledNav>
    )
}