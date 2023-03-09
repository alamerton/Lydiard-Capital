import { FC, ReactElement } from "react";
import { Container } from "@mui/material";
import BigLogo from "./BigLogo";

export const Footer: FC = (): ReactElement => {
  return (
    <Container
      style={{
        position: "absolute",
        height: "10rem",
        bottom: 0,
        backgroundColor: "primary.main",
      }}
    >
      <Container sx={{ margin: "auto" }}>
        <BigLogo />
      </Container>
    </Container>
  );
};

export default Footer;
