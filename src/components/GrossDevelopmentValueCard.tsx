import { Container, Typography } from "@mui/material";
import CircleSharpIcon from "@mui/icons-material/CircleSharp";
import { Component } from "react";

class GrossDevelopmentValueCard extends Component {
  render() {
    return (
      <Container style={{ position: "relative", marginBottom: "-1rem" }}>
        <Container
          sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
        />
        <Container style={{ position: "relative", marginBottom: "-1rem" }}>
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(85%)" }}
            src={process.env.PUBLIC_URL + "Group 19.png"}
            alt="cannot display"
          />
          <Typography
            component="div"
            variant="h6"
            flexGrow={1}
            sx={{
              position: "absolute",
              bottom: "11.5rem",
              left: "1rem",
              fontFamily: "Source Serif 4",
              fontWeight: "bold",
              fontStyle: "italic",
              textAlign: "left",
              color: "text.secondary",
            }}
          >
            Maximising Gross Development Value across both Brownfield and
            Greenfield land
          </Typography>
        </Container>
      </Container>
    );
  }
}

export default GrossDevelopmentValueCard;
