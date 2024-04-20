import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Navbar } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  .navbar-toggler {
    border: none;
  }

  .navbar-toggler:focus {
    border: none;
    box-shadow: none;
  }

  
@media only screen and (max-width: 600px) and (max-width: 992px) {
   .navbar-collapse {
    margin-top: 20px;
  }
  }
  @media only screen and (min-width: 600px) and (max-width: 992px){
   .navbar-collapse {
    margin-top: 20px;
  }
  }


  
`;

export const NewLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: "Inria Serif";
  font-weight: 300;
  margin-left: 80px;

  @media only screen and (max-width: 600px) and (max-width: 992px) {
    margin: 0;
  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {
    margin: 0;
  }

  /* @media only screen and (min-width: 992px) {
   margin-left: 40px;
  } */
`;

export const PageLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: "Inria Serif";
  font-weight: 300;
  margin-left: 40px;

  @media only screen and (max-width: 600px) and (max-width: 992px) {
    margin: 0;
    margin-bottom: 5px;
    border-bottom: 1px solid white;
    width: 30%;
    padding-bottom: 15px;
    padding-top: 15px;
  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {
    margin: 0;
    margin-bottom: 5px;
    border-bottom: 1px solid white;
    width: 30%;
    padding-bottom: 15px;
    padding-top: 15px;
  }
`;

export const RightBorder = styled.div`
  width: 1px;
  height: auto;
  background-color: white;
  margin-left: 20px;
`;

export const StyledButton = styled(Button)`

width: 100px;
border-radius: 12px !important;
border-width: 1px !important;
border-style: solid !important;
background-color: transparent !important;
text-align: center !important;
line-height: 20px !important;
font-weight: 100 !important;
text-transform: none !important;
color: white  !important;
margin-right: 80px !important;


@media only screen and (max-width: 600px) {
   margin-top: 20px !important;
   margin-bottom: 20px !important;
   border-color: white !important;
  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {
   margin-top: 20px !important;
   margin-bottom: 20px !important;
   border-color: white !important;
  }



`;

export const CartButton = styled(Button)`
  


  @media only screen and (max-width: 600px) {
   position: absolute !important;
   top: 10px !important;
   right: 0 !important;
  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {
   position: absolute !important;
   top: 10px !important;
   right: 0 !important;
  }

  
`
