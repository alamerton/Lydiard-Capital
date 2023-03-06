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

class InvestmentArmCard extends Component {
  render() {
    return (
      <Container style={{ position: "relative" }}>
        <Container
          sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
        />
        <Container style={{ position: "relative" }}>
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
      </Container>
    );
  }
}

export default InvestmentArmCard;
