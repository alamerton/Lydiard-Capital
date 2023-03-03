import { Container, Typography } from "@mui/material";
import { Component } from "react";

class ConstructionCostsCard extends Component {
  render() {
    return (
      <Container style={{ position: "relative", marginBottom: "-1rem" }}>
        <Container
          sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
        />
        <img
          style={{ width: "100%", height: "100%", filter: "brightness(75%)" }}
          src={process.env.PUBLIC_URL + "shard1.jpg"}
          alt="cannot display"
        />
        <Typography
          component="div"
          variant="h6"
          flexGrow={1}
          sx={{
            position: "absolute",
            bottom: "11rem",
            left: "1rem",
            fontFamily: "Source Serif 4",
            fontWeight: "bold",
            fontStyle: "italic",
            textAlign: "left",
            color: "text.secondary",
          }}
        >
          Keeping Construction Costs to a Minimum
        </Typography>
      </Container>
    );
  }
}

export default ConstructionCostsCard;
