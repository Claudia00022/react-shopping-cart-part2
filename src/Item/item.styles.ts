import styled from "styled-components";
import { Card, CardTitle } from "react-bootstrap";

export const StyledCard = styled(Card)`

border-radius: 0;
border-color: rgba(0, 0, 0, 0.4);
width: 18rem;
margin: auto;

.btn {
    width: 50%;
    background-color: transparent;
    color: black;
    border: 1px solid #BEB985;
  }

  .btn:hover{
    background-color: #BEB985;
    border-color: transparent;
    color: white;

  }
  .buttons{
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;

  }
  
`

export const  StyledCardTitle = styled(CardTitle)`
 font-family: "Karla";
 font-size: 18px;
 letter-spacing: 0.5px;

`
