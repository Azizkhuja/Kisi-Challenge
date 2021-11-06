import React from "react";
import { Avatar, Typography } from "@mui/material";

const EmptyQueue = ({ emptyGroup, emptyGroupImg }) => {
  return (
    <div className="emptyQueue">
      <Avatar
        alt="Empty Group"
        src={emptyGroupImg}
        sx={{ width: 140, height: 140 }}
      />
      <Typography variant="h6">{emptyGroup}</Typography>
    </div>
  );
};

export default EmptyQueue;
