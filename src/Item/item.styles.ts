import styled from "styled-components";
import { Card, CardTitle } from "react-bootstrap";

export const StyledCard = styled(Card)`
border-radius: 0;
border-color: rgba(0, 0, 0, 0.4);

.btn {
    width: 75%;
    background-color: transparent;
    color: black;
    border: 1px solid black;
  }
  
`

export const  StyledCardTitle = styled(CardTitle)`
 font-family: "Karla";
 font-size: 18px;
 letter-spacing: 0.5px;
`
