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
      <div className="first-image-with-text">
        <img
          style={{ width: "100%" }}
          src={process.env.PUBLIC_URL + "london-2374247with pink.jpg"}
          alt="cannot display"
        />
        <Typography>
          <h1>Creativity Is Capital</h1>
        </Typography>
      </div>
    </Box>
  );
};

export default Home;
