import { Typography } from "@mui/material";
import { Component } from "react";

class TopImage extends Component {
  render() {
    return (
    <div className="landing-page">
        <div className="first-image-with-text" style={{ position: "relative" }}>
            <img
            style={{ width: "100%" }}
            src={process.env.PUBLIC_URL + "london-2374247with pink.jpg"}
            alt="cannot display"
            />
            <Typography
            gutterBottom
            component="div"
            variant="h4"
            flexGrow={1}
            sx={{
                position: "absolute",
                bottom: "0.1rem",
                right: "1rem",
                fontFamily: "Source Serif 4",
                fontWeight: "light",
                textAlign: "right",
                color: "text.secondary",
            }}
            >
            Creativity Is Capital
            </Typography>
        </div>
        <div className="gross-development-value-mission-card">
            <img style={{ width: "100%" }}>
            </img>
        </div>
      </div>
    );
  }
}

export default TopImage;
