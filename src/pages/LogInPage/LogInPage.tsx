import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

//Styles
import { Wrapper, StyledButton, StyledTypography,StyledBox } from "./LogInPage.style";

const LogInPage : React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const handleRegister = async () => {};

  const handleLogin = () => {};

  return (
    <>
    <Wrapper>
      <Container maxWidth="xs" style={{border: "1px solid black"}}>
        <CssBaseline />
        <StyledBox
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
         
          <StyledTypography variant="h5">Returning Customers</StyledTypography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <StyledButton
       
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Log in
            </StyledButton>
            <hr></hr>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Link to="/Register">Don't have an account? Register</Link>
              </Grid>
            </Grid>
          </Box>
        </StyledBox>
      </Container>
      <Container maxWidth="xs" style={{border: "1px solid black"}}>
        <CssBaseline />
        <StyledBox
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          <Typography variant="h5">New Customers</Typography>
          <p>Set up an account so we can remember your details and speed up your next visit.</p>
          <Box sx={{ mt: 3 }}>
          

            
            <StyledButton
            href="/#Register"

              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              Register
            </StyledButton>
            <hr></hr>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/LogInPage">Already have an account? Login</Link>
              </Grid>
            </Grid>
          </Box>
        </StyledBox>
      </Container>
      </Wrapper>
    </>
  );
};


export default LogInPage;