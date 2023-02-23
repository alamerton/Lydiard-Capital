import React, { ReactElement, FC } from "react";
import { Box } from "@mui/material";
import LandingPage from "../components/LandingPage";

const Home: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LandingPage />
    </Box>
  );
};

export default Home;
