import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { LockOutlined } from "@mui/icons-material";
  import { useState } from "react";
  import { Link } from "react-router-dom";

  //Styles
  import { StyledTypography, StyledButton,  } from "../LogInPage/LogInPage.style";
  
  const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleRegister = async () => {};
  
    return (
      <>
        <Container maxWidth="xs" style={{marginTop: "200px", height:"100vh"
        }}>
          <CssBaseline />
          <Box
            sx={{
           
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <StyledTypography variant="h5">Register</StyledTypography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <StyledButton
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleRegister}
              >
                Register
              </StyledButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/LogInPage"  style={{color: "rgba(0, 0, 0, 0.70)"}}>Already have an account? Login</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </>
    );
  };
  
  export default Register;