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
            
          }}
        />
      </div>
    );
  }
}

export default Logo;
