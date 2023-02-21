import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";

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
      <img
        src={process.env.PUBLIC_URL + "london-2374247with pink.jpg"}
        alt="cannot display"
      />
    </Box>
  );
};

export default Home;
