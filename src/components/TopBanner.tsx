import { Container, Typography } from "@mui/material";
import { Component } from "react";

class TopBaner extends Component {
  render() {
    return (
      <Container style={{ position: "relative", marginBottom: "-1rem" }}>
        <img
          style={{
            width: "100%",
            height: "100%",
            padding: 0,
          }}
          src={process.env.PUBLIC_URL + "london-2374247with pink.jpg"}
          alt="cannot display"
        />
        <Typography
          component="div"
          variant="h4"
          flexGrow={1}
          sx={{
            position: "absolute",
            right: "1rem",
            bottom: "1rem",
            fontFamily: "Source Serif 4",
            fontWeight: "light",
            textAlign: "right",
            color: "text.secondary",
          }}
        >
          Creativity Is Capital
        </Typography>
      </Container>
    );
  }
}

export default TopBaner;
