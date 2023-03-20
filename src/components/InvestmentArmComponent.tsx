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

class InvestmentArmComponent extends Component {
  render() {
    return (
      <Container style={{ position: "relative" }}>
        <Container
          sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
        />
        <Container style={{ position: "relative" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={process.env.PUBLIC_URL + "investment.png"}
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
            The Investment Arm
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
              xs: "5.5rem",
              sm: "7rem",
              md: "5rem",
              lg: "5rem",
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
                Build to Rent
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
                Logistical/Industrial Units if they meet our requirements as
                part of our larger residential led mixed-use schemes.
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
                Retail Units
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
                Hotels
              </Typography>
            </ListItem>
          </List>
        </Container>
      </Container>
    );
  }
}

export default InvestmentArmComponent;
