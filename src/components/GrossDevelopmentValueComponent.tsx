import { Container, Typography } from "@mui/material";
import { Component } from "react";

class GrossDevelopmentValueComponent extends Component {
  render() {
    return (
      <Container
        sx={{
          position: "relative",
          marginBottom: "-1rem",
          height: "100%",
        }}
      >
        <Container
          sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
        />
        <img
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
          }}
          src={process.env.PUBLIC_URL + "grossDevelopmentValue2.png"}
          alt="cannot display"
        />
        <Typography
          component="div"
          variant="h6"
          flexGrow={1}
          sx={{
            position: "absolute",
            right: "1rem",
            top: "1rem",
            left: "1rem",
            fontFamily: "Source Serif 4",
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
              xl: "3rem",
            },
            textAlign: "left",
            color: "text.secondary",
          }}
        >
          Maximising Gross Development Value across both Brownfield and
          Greenfield land
        </Typography>
      </Container>
    );
  }
}

export default GrossDevelopmentValueComponent;
