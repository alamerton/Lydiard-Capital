import { Container } from "@mui/material";
import { Component } from "react";
import BigLogo from "./BigLogo";

class FooterComponent extends Component {
  render() {
    return (
      <Container
        style={{
          position: "absolute",
          height: "10rem",
          bottom: 0,
          backgroundColor: "primary.main",
        }}
      >
        <Container sx={{ margin: "auto" }}>
          <BigLogo />
        </Container>
      </Container>
    );
  }
}

export default FooterComponent;
