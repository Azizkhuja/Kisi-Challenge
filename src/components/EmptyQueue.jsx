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
      <Typography variant="h6">
        You haven't added any {emptyGroup}s, or you don't have any viewing
        permissions.
      </Typography>
    </div>
  );
};

export default EmptyQueue;
