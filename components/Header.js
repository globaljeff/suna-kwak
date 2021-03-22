import Link from "next/link"
import styled from "styled-components"
import Nav from "./Nav"

const HeaderStyles = styled.header`
    
`;

export default function Header(){
    return(
        <HeaderStyles className="wrapper">
            <Nav />
        </HeaderStyles>
    )
}