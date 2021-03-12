import Link from "next/link"
import styled from "styled-components"

const StyledFooter = styled.footer`
    
`;

export default function Footer(){
    return (
        <StyledFooter>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </StyledFooter>
    )
}