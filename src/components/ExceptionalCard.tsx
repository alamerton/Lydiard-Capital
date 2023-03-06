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

class ExceptionalCard extends Component {
  render() {
    return (
      <Container style={{ position: "relative" }}>
        <Container
          sx={{ backgroundColor: "secondary.main", height: "0.3rem" }}
        />
        <Container style={{ position: "relative" }}>
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
              // bottom: "10.5rem",
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
      </Container>
    );
  }
}

export default ExceptionalCard;
