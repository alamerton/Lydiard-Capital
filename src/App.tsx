import React from "react";
import { Box, CssBaseline, Paper, Typography, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";


function App() {

   // define theme
   const theme = createTheme({
    palette: {
      primary: {
        light: "#6a7b83",
        main: "#455a64",
        dark: "#303e46",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#b5a133",
        dark: "#726000",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Paper
          elevation={3}
          sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
        >
          <Typography color="primary.dark" variant="h1">
            Starter App
          </Typography>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;