import { Container, Typography } from "@mui/material";
import { Component } from "react";

class ContactComponent extends Component {
  render() {
    return (
      <Container style={{ position: "relative" }}>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            height: "4rem",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            flexGrow={1}
            width="100%"
            height="2rem"
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "center",
              color: "text.primary",
            }}
          >
            Contact Us
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            component="div"
            variant="h6"
            flexGrow={1}
            width="100%"
            height="2rem"
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "center",
              color: "text.primary",
            }}
          >
            +44 7890 071854
            <br />
            landsourcing@lydiardcapital.com
            <br />
            Company Number: 14666861
            <br />
            C/O Easy Tax Citibase
            <br />
            510 Argentum House
            <br />
            Bristol Business Park Bristol
            <br />
            BS16 1EJ
            <br />
            United Kingdom
          </Typography>
        </Container>
      </Container>
    );
  }
}

export default ContactComponent;
