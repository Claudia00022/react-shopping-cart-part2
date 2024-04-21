import styled from "styled-components";
import CloseButton from 'react-bootstrap/CloseButton';

export const Wrapper = styled.aside`
position: relative;
font-family: Arial,Helvetica, sans-serif;
width: 500px;
padding:20px;
transition: "white 2s ease-out";

@media only screen and (max-width: 600px) and (max-width: 992px) {
    width: 100vw;
  
    h2{
        text-align: center;
    }
    p{
        text-align: center;
    }
}

`;

export const StyledClosingTag = styled(CloseButton)`
position: absolute;
display: none;
right: 25px;
top: 10px;

@media only screen and (max-width: 600px) and (max-width: 992px) {
    display: block;
}
`

