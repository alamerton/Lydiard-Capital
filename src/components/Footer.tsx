import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import BigLogo from "./BigLogo";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        margin: "auto",
        top: "20rem",
        height: "10rem",
        backgroundColor: "black",
      }}
    >
      <img
        style={{
          position: "relative",
          height: "5rem",
          margin: "auto",
          display: "block",
          top: "25%",
        }}
        src={process.env.PUBLIC_URL + "lydiard-capital-wreath.svg"}
      ></img>
    </Box>
  );
}
