import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box color="GrayText">
      <Typography variant="h4" color="GrayText">
        Loading...
      </Typography>
      <LinearProgress color="inherit" />
    </Box>
  );
};

export default Spinner;
