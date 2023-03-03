import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "lydiard-capital-wreath.svg"}
          alt="cannot display"
          style={{
            width: "5rem",
            height: "5rem",
            display: "block",
            margin: "auto",
            padding: "0.5rem",
          }}
        />
      </div>
    );
  }
}

export default Logo;
