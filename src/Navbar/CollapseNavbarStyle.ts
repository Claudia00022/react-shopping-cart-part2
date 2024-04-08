import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import Button from '@mui/material/Button';

export const NewLink = styled(Link)`
   text-decoration: none;
   color: white;
   font-family: "Inria Serif";
   font-weight: 300;
`


export const RightBorder = styled.div`
width: 1px;
height: auto;
background-color:white ;
margin-left:20px;
`

export const StyledButton = styled(IconButton)`




`

export const LogIn = styled(Button)`
width: 130px;
height: 40px;
border-radius: 12px;
border: 1px solid #BEB985;
background-color: transparent;
text-align: center;
line-height: 20px;
font-weight: 100;
font-size: 16px ;

`