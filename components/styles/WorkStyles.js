import styled from "styled-components"

const WorkStyles = styled.div`
    display:flex;
    align-items:center;
    @media (max-width:800px){
        display:block;
    }
    & > div{
        flex:1;
        img{
            width:100%;
        }
    }
    h1{
        font-size:2rem;
        margin:0;
        text-transform:uppercase;
        font-weight:bold;
    }
    h2{
        font-size:1.3rem;
        margin:0;
        text-transform:uppercase;
        margin-bottom:0px;
    }
    h3{
        font-size:1.3rem;
        margin:0;
        text-transform:uppercase;
        margin-bottom:40px;
    }
    .work-text{
        padding-left:50px;
        @media (max-width:800px){
            padding-left:0;
        }
        p {
          max-width: 500px;
        }
    }
    a{
        text-transform:uppercase;
    }
    .buttons{
        margin:40px 0;
        .btn{
            display:inline-block;
            margin-right:20px;
        }
    }
`;

export default WorkStyles;
