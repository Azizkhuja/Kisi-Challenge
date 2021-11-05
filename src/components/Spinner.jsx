import React from "react";
import { CircularProgress, Typography, LinearProgress } from "@mui/material";

const Spinner = () => {
  return (
    <div>
      <Typography variant="h2">
        Loading...
        <LinearProgress color="inherit" />
      </Typography>
    </div>
  );
};

export default Spinner;
