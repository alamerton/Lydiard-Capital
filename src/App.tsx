import React from "react";
import {
  Box,
  CssBaseline,
  Paper,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#A38A00",
        light: "#b5a133",
        dark: "#726000",
        contrastText: "#FFFFFF",
      },
      secondary: {
        light: "#6a7b83",
        main: "#455a64",
        dark: "#303e46",
        contrastText: "#FFFFFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <Router>
          <Navbar />
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
