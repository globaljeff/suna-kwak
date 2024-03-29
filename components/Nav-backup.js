import Link from "next/link"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  a {
    display: inline-block;
    margin: 1rem;
    color: var(--font-color);
    transition: all 300ms;
  }
  .mobile-menu-btn {
    width: 66px;
    margin: 1rem 0 0 0;
  }
  .brand{
    font-family: 'vintage';
    font-size: 5.653rem;
    line-height: 1;
    margin: 0 auto;
    padding-left: 66px;
    @media (max-width:900px){
      font-size:3rem;
      line-height: 1;
      margin-top: 1rem;
    }
  }
  
  @media (max-width:525px){
    .social{
      display:none;
    }
  }

  .mobile-drawer{
    position:absolute;
    right:0;
    top:0;
    bottom:0;
    left:0;
    height:0;
    z-index:5;
    background-color:#ffffff;
    transition:all .4s;
    overflow:hidden;
    text-align: center;
    a{
      display:block;
    }
    .social a{
      display:inline;
    }
    .mobile-drawer-close{
      position: relative;
      right:0px;
      top:0px;
      text-align: right;
    }
  }
`;

export default function Nav(){
    
    return (
        <StyledNav>

            <Link href="/"><a className="brand">Suna Kwak</a></Link>

            
            <Link href="javascript:;"><a className="mobile-menu-btn"><img src="/img/menu-motif.svg" alt="menu" /></a></Link>

            <div className="mobile-drawer">
              <a href="#" className="mobile-drawer-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="29.493" height="29.493" viewBox="0 0 29.493 29.493">
                  <g id="Icon_close-menu" data-name="Icon close-menu" transform="translate(-8.295 -0.086)">
                    <path id="Path_41" data-name="Path 41" d="M4.5,18H42.209" transform="translate(19.255 -14.41) rotate(45)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    <path id="Path_42" data-name="Path 42" d="M4.5,9H42.209" transform="translate(0.163 24.982) rotate(-45)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                  </g>
                </svg>
              </a>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <script dangerouslySetInnerHTML={{ __html: `
              document.querySelector('.mobile-menu-btn').addEventListener('click', function(){
                document.querySelector('.mobile-drawer').style.height = "100vh"
              })
              document.querySelector('.mobile-drawer-close').addEventListener('click', function(){
                document.querySelector('.mobile-drawer').style.height = "0"
              })
              document.querySelectorAll('.mobile-drawer a').forEach(link => {
                link.addEventListener('click', function(){
                    document.querySelector('.mobile-drawer').style.height = "0"
                })
              })
			    `}}></script>
        </StyledNav>
    )
}