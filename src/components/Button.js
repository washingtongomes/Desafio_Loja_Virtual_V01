import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background:transparent;
border:0.06rem solid;
border-radius: 0.5rem;
color: white;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: var(--mainYellow)
}
&:focus{
    outline: none;
}
`


export const ButtonVoltar = styled.button`
text-transform: capitazed;
font-size: 1.0rem;
background:transparent;
border:0.06rem solid;
border-radius: 0.5rem;
color: black;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: var(--mainYellow)
}
&:focus{
    outline: none;
}
`