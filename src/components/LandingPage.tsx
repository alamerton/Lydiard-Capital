import {
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import CircleSharpIcon from "@mui/icons-material/CircleSharp";
import { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <Container style={{ marginBottom: "18rem" }}>
        <Container style={{ position: "relative", marginBottom: "-1rem" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              padding: 0,
            }}
            src={process.env.PUBLIC_URL + "london-2374247with pink.jpg"}
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
              textAlign: "right",
              color: "text.secondary",
            }}
          >
            Creativity Is Capital
          </Typography>
        </Container>
        <Container style={{ position: "relative", marginBottom: "-1rem" }}>
          <Container
            sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
          />
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(85%)" }}
            src={process.env.PUBLIC_URL + "Group 19.png"}
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
            Maximising Gross Development Value across both Brownfield and
            Greenfield land
          </Typography>
        </Container>
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
        <Container style={{ position: "relative" }}>
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
              bottom: "10.5rem",
              right: "1rem",
              left: "3rem",
              fontFamily: "Source Serif 4",
              fontWeight: "bold",
              fontStyle: "italic",
              textAlign: "right",
              color: "text.secondary",
            }}
          >
            Designing Exceptional Residential-Led Mixed-Use developments
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
            minHeight: "5rem",
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
        <Container style={{ position: "relative" }}>
          <Container
            sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
          />
          <img
            style={{ width: "100%", height: "100%" }}
            src={process.env.PUBLIC_URL + "Group 20.png"}
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
            The Land
            <br />
            Development/Promotion Arm
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
            We promote and masterplan developments to attain detailed planning
            consent and sell the majority of the subdivided phases to the
            following customers:
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            marginTop: "1rem",
            marginBottom: "1rem",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "6rem",
          }}
        >
          <List>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography sx={{ fontFamily: "Roboto" }}>
                Housebuilders
              </Typography>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography sx={{ fontFamily: "Roboto" }}>
                Registered Providers
              </Typography>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography sx={{ fontFamily: "Roboto" }}>
                Industrial/Logistics Companies
              </Typography>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography sx={{ fontFamily: "Roboto" }}>
                Asset Managers/Investment/Pension Funds
              </Typography>
            </ListItem>
          </List>
        </Container>
        <Container style={{ position: "relative" }}>
          <Container
            sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
          />
          <img
            style={{ width: "100%", height: "100%" }}
            src={process.env.PUBLIC_URL + "Group 18.png"}
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
            The Investment Arm
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
            This section of the business acquires and holds sites to generate a
            sufficient annual yield in the form of rental income. This will
            include the following methods of capital generation:
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            marginTop: "2rem",
            marginBottom: "1rem",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "6rem",
          }}
        >
          <List>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography sx={{ fontFamily: "Roboto" }}>
                Build to Rent
              </Typography>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography sx={{ fontFamily: "Roboto" }}>
                Logistical/Industrial Units if they meet our requirements as
                part of our larger residential led mixed-use schemes.
              </Typography>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography sx={{ fontFamily: "Roboto" }}>
                Retail Units
              </Typography>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography sx={{ fontFamily: "Roboto" }}>Hotels</Typography>
            </ListItem>
          </List>
        </Container>
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
        <Container style={{ position: "relative" }}>
          <Container
            sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
          />
          <img
            style={{ width: "100%", height: "100%" }}
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
            minHeight: "5rem",
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
            minHeight: "5rem",
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
            At the heart of Lydiard Capital’s business model is based on a
            long-term commitment to every site it takes an interest in, with a
            drive to provide exemplar developments that leave a legacy to move
            beyond just placemaking to truly influence an experience.
          </Typography>
        </Container>
        <Container
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "4rem",
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

export default LandingPage;
