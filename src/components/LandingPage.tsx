import { Box, Container, Typography } from "@mui/material";
import { Component } from "react";

class TopImage extends Component {
  render() {
    return (
      <Box>
        <Box style={{ position: "relative", marginBottom: "-1rem" }}>
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
        </Box>
        <Box style={{ position: "relative", marginBottom: "-1rem" }}>
          <Box sx={{ backgroundColor: "secondary.main", height: "0.3rem" }} />
          <img
            style={{ width: "100%", height: "100%", filter: "brightness(85%)" }}
            src={process.env.PUBLIC_URL + "greenfield-brownfield.jpg"}
            alt="cannot display"
          />
          <Typography
            component="div"
            variant="h6"
            flexGrow={1}
            sx={{
              position: "absolute",
              bottom: "11.5rem",
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
        </Box>
        <Box style={{ position: "relative", marginBottom: "-1rem" }}>
          <Box sx={{ backgroundColor: "secondary.main", height: "0.3rem" }} />
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
              bottom: "11.5rem",
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
        </Box>
        <Box style={{ position: "relative" }}>
          <Box sx={{ backgroundColor: "secondary.main", height: "0.3rem" }} />
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
              bottom: "11rem",
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
        </Box>
        <Box
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
        </Box>
        <Box
          style={{
            position: "relative",
            maxWidth: "80%",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "5rem",
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
              textAlign: "center",
              color: "text.primary",
            }}
          >
            We work in partnership with landowners & Investors and navigate the
            complex UK planning system to secure valuable planning permissions.
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default TopImage;
