import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import CircleSharpIcon from "@mui/icons-material/CircleSharp";
import { Component } from "react";

class LandDevelopmentPromotionCard extends Component {
  render() {
    return (
      <Container style={{ position: "relative" }}>
        <Container
          sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
        />
        <Container style={{ position: "relative" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={process.env.PUBLIC_URL + "Group 20.png"}
            alt="cannot display"
          />
          <Container style={{ position: "relative" }}>
            <Typography
              component="div"
              variant="h5"
              flexGrow={1}
              sx={{
                position: "absolute",
                left: "2.75rem",
                bottom: "1rem",
                fontFamily: "Source Serif 4",
                fontWeight: "bold",
                fontStyle: "italic",
                textAlign: "left",
                color: "text.secondary",
              }}
            >
              The Land <br />
              Development/Promotion Arm
            </Typography>
          </Container>
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
      </Container>
    );
  }
}

export default LandDevelopmentPromotionCard;
