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
        main: "#000000",
        light: "#6a7b83",
        dark: "#303e46",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#A38A00",
        light: "#b5a133",
        dark: "#726000",
        contrastText: "#000000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column">
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
          {/* <Footer /> */}
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
