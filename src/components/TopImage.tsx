import { Typography } from "@mui/material";
import { Component } from "react";

class TopImage extends Component {
  render() {
    return (
      <div className="first-image-with-text" style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src={process.env.PUBLIC_URL + "london-2374247with pink.jpg"}
          alt="cannot display"
        />
        <Typography
          variant="h6"
          component="div"
          flexGrow={1}
          sx={{
            position: "absolute",
            bottom: "0.2rem",
            left: "0.2rem",
            fontFamily: "Source",
            color: "text.secondary",
          }}
        >
          <h1>Creativity Is Capital</h1>
        </Typography>
      </div>
    );
  }
}

export default TopImage;
