import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Paper, Box, Typography, Divider, Grid } from "@mui/material";

import kisiApi from "../api";
import SingleList from "./SingleList";
import Pagenation from "./Pagenation";
import Spinner from "./Spinner";
import EmptyQueue from "./EmptyQueue";

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
                {groups.length > 0 ? (
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
                ) : (
                  <EmptyQueue
                    emptyGroup="group"
                    emptyGroupImg="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiB2aWV3Qm94PSIwIDAgMTYwIDE2MCI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjRThFREZBIiByeD0iODAiLz4KICAgICAgICA8ZyBzdHJva2U9IiMxMzE4NDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCA1MikiPgogICAgICAgICAgICA8cGF0aCBkPSJNNDYuNTQ1IDUyLjM2NHYtNS44MTljMC02LjQyNi01LjIxLTExLjYzNi0xMS42MzYtMTEuNjM2SDExLjYzNkM1LjIxIDM0LjkxIDAgNDAuMTIgMCA0Ni41NDV2NS44MTkiLz4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMjMuMjczIiBjeT0iMTEuNjM2IiByPSIxMS42MzYiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTY0IDUyLjM2NHYtNS44MTljLS4wMDQtNS4zMDItMy41OTMtOS45MzItOC43MjctMTEuMjU4TTgwLjM2NCA1Mi4zNjR2LTUuODE5Yy0uMDA0LTUuMzAyLTMuNTkzLTkuOTMyLTguNzI4LTExLjI1OE00My42MzYuMzc4YzUuMTUgMS4zMTggOC43NSA1Ljk1OCA4Ljc1IDExLjI3MyAwIDUuMzE1LTMuNiA5Ljk1NC04Ljc1IDExLjI3M002MCAuMzc4YzUuMTQ5IDEuMzE4IDguNzUgNS45NTggOC43NSAxMS4yNzMgMCA1LjMxNS0zLjYwMSA5Ljk1NC04Ljc1IDExLjI3MyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                  />
                )}
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
