import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#880E4F",
      },
      text: {
        primary: "#000000",
        secondary: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: ["Source Serif 4", "Roboto"].join(","),
    },
    spacing: 0,
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
        </Router>
      </Box>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
}

export default App;
