import { Box, Typography } from "@mui/material";
import { Component } from "react";

class TopImage extends Component {
  render() {
    return (
      <Box>
        <Box
          className="first-image-with-text"
          style={{ position: "relative"}}
        >
          <img
            style={{ width: "100%" }}
            src={process.env.PUBLIC_URL + "london-2374247with pink.jpg"}
            alt="cannot display"
          />
          <Typography
            gutterBottom
            component="div"
            variant="h4"
            flexGrow={1}
            sx={{
              position: "absolute",
              bottom: "0.2rem",
              right: "1rem",
              fontFamily: "Source Serif 4",
              fontWeight: "light",
              textAlign: "right",
              color: "text.secondary",
            }}
          >
            Creativity Is Capital
          </Typography>
        </Box>
        <Box
          className="gross-development-value-mission-card"
          style={{ position: "relative" }}
        >
          <img
            style={{ width: "100%" }}
            src={process.env.PUBLIC_URL + "purple-divider.jpg"}
            alt="cannot display"
          />
          <img
            style={{ width: "100%" }}
            src={process.env.PUBLIC_URL + "greenfield-brownfield.jpg"}
            alt="cannot display"
          />
          <Typography
            gutterBottom
            component="div"
            variant="h4"
            flexGrow={1}
            sx={{
              position: "absolute",
              bottom: "0.2rem",
              right: "1rem",
              fontFamily: "Source Serif 4",
              fontWeight: "light",
              textAlign: "right",
              color: "text.secondary",
            }}
          >
            Maximising Gross Development Value across both Brownfield and
            Greenfield land
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default TopImage;
