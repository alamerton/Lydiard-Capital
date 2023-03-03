import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Logo from "./Logo";
import BigLogo from "./BigLogo";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "10rem",
        backgroundColor: "primary.main",
        display: "flex",
      }}
    >
      <Box sx={{ margin: "auto" }}>
        <BigLogo />
      </Box>
    </Box>
  );
};

export default Footer;
