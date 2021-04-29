import styled from "styled-components"
import Nav from "./Nav"

const HeaderStyles = styled.header`
    
`;

export default function Header(){
    return(
        <div className="container">
            <HeaderStyles>
                <Nav />
            </HeaderStyles>
        </div>
        
    )
}