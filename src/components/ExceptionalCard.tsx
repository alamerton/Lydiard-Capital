import { Container, Typography } from "@mui/material";
import { Component } from "react";

class ExceptionalCard extends Component {
  render() {
    return (
      <Container
        sx={{
          position: "relative",
          marginBottom: "-1rem",
          height: {
            xs: "100%",
            sm: "100%",
            md: "90vh",
            lg: "90vh",
            xl: "90vh",
          },
        }}
      >
        <Container
          sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
        />
        <img
          style={{ width: "100%", height: "100%" }}
          src={process.env.PUBLIC_URL + "buildings-1835643.jpg"}
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
          Designing Exceptional Residential-Led Mixed-Use developments
        </Typography>
      </Container>
    );
  }
}

export default ExceptionalCard;
