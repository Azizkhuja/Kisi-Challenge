import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Paper, Box, Typography, Divider, Grid } from "@mui/material";

import kisiApi from "../api";
import SingleList from "./SingleList";
import Pagenation from "./Pagenation";
import Spinner from "./Spinner";

const GroupLists = () => {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    kisiApi.then((client) => {
      client.get("groups").then((groupData) => {
        setGroups(groupData.data);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <Grid container>
      <Grid item xs={2} md={2} />

      <Grid item md={8}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="groupLists">
            <Typography variant="h4">Groups {groups.length}</Typography>
            <Typography variant="h7">
              Add members to groups and assign different access rights
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": { m: 1, width: 900, height: 600 },
              }}
            >
              <Paper elevation={1}>
                <div className="overall">
                  <div className="first">
                    <ul>
                      {groups.map((group) => (
                        <Link to={`/${group.id}`} key={group.id}>
                          <SingleList items={group}>{group.name}</SingleList>
                        </Link>
                      ))}
                    </ul>
                  </div>
                  <div className="second">
                    <Divider />
                    <br />
                    <Pagenation />
                  </div>
                </div>
              </Paper>
            </Box>
          </div>
        )}
      </Grid>
      <Grid item xs={2} md={2} />
    </Grid>
  );
};

export default GroupLists;
