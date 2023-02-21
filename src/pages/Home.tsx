import React, { ReactElement, FC } from "react";
import { Box } from "@mui/material";
import TopImage from "../components/TopImage";

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
      <TopImage />
    </Box>
  );
};

export default Home;
