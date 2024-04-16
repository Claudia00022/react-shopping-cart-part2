import styled from "styled-components";
import { Button } from "@mui/material";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
font-family: Arial, Helvetica, sans-serif;
border-bottom: 1px solid rgba(0, 0, 0, 0.4);
padding-bottom: 20px;
padding-top: 50px;


div{
    flex:1;
   max-width: 70%;
}


.information, .buttons{
    display: flex;
    justify-content: space-between;
   
}

img{
    max-width: 80px;
    object-fit: cover;
     height: 50%;
}
`;
