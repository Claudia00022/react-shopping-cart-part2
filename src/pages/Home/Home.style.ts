import styled from "styled-components";
import Button from "@mui/material/Button";





export const Wrapper = styled.div`
background-image: url(${process.env.PUBLIC_URL + "images/backgrounImg.jpg"});
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;

div{
   width: 25%;
   position: absolute;
   top: 50%;
   left:80px;
   transform: translate(0%, -50%);

}

h1{
    font-family: "Inria Serif";
    font-weight: bold;
    font-size: 57px;
    color: white;
 
}
 button{
    position: absolute;
    top: 65%;
    left: 80px;
    width: 145px;
    height: 45px;
    border-radius: 12px;
    background-color: #6D5F2A;
    color: white;
    font-family: ""Helvetica",sans-serif;
    font-size: 16px;
    font-weight: light;
    border: none;
 }




`

