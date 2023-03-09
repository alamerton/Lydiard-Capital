import { Button, Container, Typography } from "@mui/material";
import { Component } from "react";

class TrueQualityLastsCard extends Component {
  render() {
    return (
      <Container style={{ position: "relative" }}>
        <Container style={{ position: "relative" }}>
          <Container
            sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
          />
          <img
            style={{ width: "100%", height: "6rem" }}
            src={process.env.PUBLIC_URL + "Group 22.png"}
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
            True Quality Lasts
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
            // minheight: "6rem",
            height: "6rem",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            flexGrow={1}
            width="100%"
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "center",
              color: "text.primary",
            }}
          >
            The Lydiard Capital Commitment
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
            height: "6rem",
          }}
        >
          <Typography
            component="div"
            variant="body1"
            flexGrow={1}
            width="100%"
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "left",
              color: "text.primary",
            }}
          >
            We believe architecture is the most important art form. It is where
            we live, work, shop, and coalesce. Where ideas are formed, and
            experiences shared.
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
            height: "6rem",
          }}
        >
          <Typography
            component="div"
            variant="body1"
            flexGrow={1}
            width="100%"
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "left",
              color: "text.primary",
            }}
          >
            All our developments, whether for promotion, investment or for
            immediate development are conceived with long term master-planning
            and commitment in mind.
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            marginBottom: "4rem",
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
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "left",
              color: "text.primary",
            }}
          >
            We aim to leave behind a legacy of architecture that will shape
            minds and lives. We aim to inspire a generation using best in class
            architects and innovation, leaving a legacy beyond just profit
            margin.
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            marginBottom: "-1.5rem",
            justifyContent: "center",
            alignItems: "center",
            height: "6rem",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            flexGrow={1}
            width="100%"
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "center",
              color: "text.primary",
            }}
          >
            Influence an Experience
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
            height: "6rem",
          }}
        >
          <Typography
            component="div"
            variant="body1"
            flexGrow={1}
            width="100%"
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "left",
              color: "text.primary",
            }}
          >
            We Build long-term relationships with our partners & investors and
            partner with leading specialists in each discipline across the
            project lifecycle.
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            marginBottom: "10rem",
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
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "left",
              color: "text.primary",
            }}
          >
            What sets Lydiard Capital apart is its target to sell entire phases
            and portions of sites and developments off-plan with a view to
            provide exemplar design credentials and quality of place, catering
            to the needs of our customer base, this will include for example
            providing homes and apartments that allow for flexible office
            working with sustainable features. Providing a proven product that
            stands out from its competitors.
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            marginBottom: "5rem",
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
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              textAlign: "left",
              color: "text.primary",
            }}
          >
            At the heart of Lydiard Capital’s business model is based on a
            long-term commitment to every site it takes an interest in, with a
            drive to provide exemplar developments that leave a legacy to move
            beyond just placemaking to truly influence an experience.
          </Typography>
        </Container>
      </Container>
    );
  }
}

export default TrueQualityLastsCard;
