import { Button, Container, Typography } from "@mui/material";
import { Component } from "react";

class GroundBreakingVisionComponent extends Component {
  render() {
    return (
      <Container
        style={{
          position: "relative",
          top: "2rem",
        }}
      >
        <Container
          sx={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
            height: {
              xs: "6rem",
              xl: "6rem",
            },
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
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem",
                xl: "3rem",
              },
            }}
          >
            Be Part of a Ground-Breaking Vision
          </Typography>
        </Container>
        <Container
          sx={{
            position: "relative",
            maxWidth: {
              xs: "80%",
              lg: "75%",
            },
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            height: {
              xs: "6rem",
              sm: "8rem",
              md: "7rem",
              lg: "6rem",
              xl: "6rem",
            },
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
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
              },
            }}
          >
            We work in partnership with landowners & Investors and navigate the
            complex UK planning system to secure valuable planning permissions.
          </Typography>
        </Container>
        <Container
          sx={{
            position: "relative",
            maxWidth: {
              xs: "80%",
              lg: "75%",
            },
            margin: "auto",
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
            height: {
              xs: "6rem",
              sm: "8rem",
              md: "8rem",
              lg: "6rem",
              xl: "6rem",
            },
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
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
                md: "1.5rem",
                lg: "1.5rem",
                xl: "1.5em",
              },
            }}
          >
            We take long-term interest in our sites to generate sufficient
            returns for our investors and stakeholders from a financial,
            architectural and placemaking standpoint.
          </Typography>
        </Container>
        <Container
          sx={{
            position: "relative",
            maxWidth: "40%",
            margin: "auto",
            marginTop: "4rem",
            marginBottom: "8rem",
            minHeight: {
              xs: "2rem",
              sm: "rem",
            },
            textAlign: "center",
          }}
        >
          <Button variant="contained" size="large">
            Contact us
          </Button>
        </Container>
      </Container>
    );
  }
}

export default GroundBreakingVisionComponent;
