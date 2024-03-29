import { Container, Typography } from "@mui/material";
import { Component } from "react";

class TopBanner extends Component {
  render() {
    return (
      <Container
        sx={{
          position: "relative",
          marginBottom: "-1rem",
          height: "100%",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={process.env.PUBLIC_URL + "topBanner.jpg"}
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
            fontSize: {
              xs: "2.5rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
              xl: "5rem",
            },
            color: "text.secondary",
          }}
        >
          Creativity Is Capital
        </Typography>
      </Container>
    );
  }
}

export default TopBanner;
