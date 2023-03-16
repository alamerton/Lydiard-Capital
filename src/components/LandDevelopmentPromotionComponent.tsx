import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import CircleSharpIcon from "@mui/icons-material/CircleSharp";
import { Component } from "react";

class LandDevelopmentPromotionComponent extends Component {
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
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                  xl: "3rem",
                },
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
              xs: "5.5rem",
              sm: "7rem",
              md: "5rem",
              lg: "4rem",
              xl: "4rem",
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
          <List
            sx={{
              left: {
                lg: "2rem",
              },
            }}
          >
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.5rem",
                  },
                }}
              >
                Housebuilders
              </Typography>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.5rem",
                  },
                }}
              >
                Registered Providers
              </Typography>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.5rem",
                  },
                }}
              >
                Industrial/Logistics Companies
              </Typography>
            </ListItem>
            <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemIcon>
                <CircleSharpIcon style={{ height: "0.5rem" }} />
              </ListItemIcon>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.5rem",
                  },
                }}
              >
                Asset Managers/Investment/Pension Funds
              </Typography>
            </ListItem>
          </List>
        </Container>
      </Container>
    );
  }
}

export default LandDevelopmentPromotionComponent;
