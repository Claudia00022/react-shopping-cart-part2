import styled from "styled-components";
import { IconButton } from "@mui/material";

export const Wrapper = styled.div`
 margin: 40px;

 .MuiButtonBase-root {
    position: fixed;
    }
`;

export const StyledButton = styled(IconButton)`
z-index: 100;
right: 20px;
top:20px;


`;