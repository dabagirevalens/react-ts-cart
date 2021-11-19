import styled from "styled-components";

export const Wrapper = styled.div`

    display : flex;
    justify-content: space-between;
    flex-direction: column;
    /* width : 100%; */
    border: 1px solid #0d6ad3;
    border-radius: 12px;
    height : 100%;

    button {
        border-radius:  0 0 12px 12px;
    }

    img{
        height: 250px;
        object-fit: cover;
        border-radius : 12px 12px 0 0 ;
    }

    div{
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%; 
    }

    small{
        color: #0d6ad3;
    }

`;