import { Button, Container, Typography } from "@mui/material";
import { Component } from "react";

class SitesCard extends Component {
  render() {
    return (
      <Container style={{ position: "relative" }}>
        <Container style={{ position: "relative" }}>
          <Container
            sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
          />
          <img
            style={{ width: "100%", height: "100%" }}
            src={process.env.PUBLIC_URL + "Group 21.png"}
            alt="cannot display"
          />
          <Typography
            component="div"
            variant="h5"
            flexGrow={1}
            sx={{
              position: "absolute",
              bottom: "1rem",
              left: "2.75rem",
              fontFamily: "Source Serif 4",
              fontWeight: "bold",
              fontStyle: "italic",
              textAlign: "left",
              color: "text.secondary",
            }}
          >
            Sites We Are Looking For
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
            We are looking to acquire sites throughout England on an
            unconditional or conditional basis, collaborating with our loyal
            investors using our cash reserves.
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
            Although we focus on the M25, the Home Counties, Swindon, Bath,
            Bristol, Birmingham, Northampton, Leeds, Sheffield & Manchester, we
            are open to other opportunities if they meet our gross margin
            requirements of between 20-30%.
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "30%",
            margin: "auto",
            marginTop: "5rem",
            marginBottom: "3rem",
            minHeight: "2rem",
          }}
        >
          <Button variant="contained">Contact us</Button>
          {/* TODO: Make contact button direct user to contact area */}
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
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
            If you are looking to enhance a site, and think it matches our
            requirements, then please get in touch.
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            marginBottom: "1rem",
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
            Thanks to our vast network of contacts, If we cannot develop your
            site ourselves, we will find someone matching your requirements who
            can.
          </Typography>
        </Container>
      </Container>
    );
  }
}

export default SitesCard;
