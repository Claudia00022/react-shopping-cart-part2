import styled from "styled-components";
import { Button, Typography, Box } from "@mui/material";

export const Wrapper = styled.div`

height: calc(93vh - 50px);
display: flex;

`

export const StyledButton = styled(Button)`
background-color:  #BEB985 !important;
color: white !important;
box-shadow: none !important;
font-size: 0.875rem !important;
text-transform: none !important;
`

export const StyledTypography = styled(Typography)`
text-align: start !important;
`

export const StyledBox = styled(Box)`
align-items:start !important;
`