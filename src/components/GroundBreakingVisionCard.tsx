import { Button, Container, Typography } from "@mui/material";
import { Component } from "react";

class GroundBreakingVisionCard extends Component {
  render() {
    return (
      <Container
        style={{
          position: "relative",
        }}
      >
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
            height: "5rem",
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
            Be Part of a Ground-Breaking Vision
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            height: "6rem",
          }}
        >
          <Typography
            component="div"
            variant="body1"
            flexGrow={1}
            width="100%"
            height="2rem"
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "left",
              color: "text.primary",
            }}
          >
            We work in partnership with landowners & Investors and navigate the
            complex UK planning system to secure valuable planning permissions.
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "6rem",
          }}
        >
          <Typography
            component="div"
            variant="body1"
            flexGrow={1}
            width="100%"
            height="2rem"
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "left",
              color: "text.primary",
            }}
          >
            We take long-term interest in our sites to generate sufficient
            returns for our investors and stakeholders from a financial,
            architectural and placemaking standpoint.
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "30%",
            margin: "auto",
            marginTop: "2rem",
            marginBottom: "3rem",
            minHeight: "2rem",
          }}
        >
          <Button variant="contained">Contact us</Button>
          {/* TODO: Make contact button direct user to contact area */}
        </Container>
      </Container>
    );
  }
}

export default GroundBreakingVisionCard;
