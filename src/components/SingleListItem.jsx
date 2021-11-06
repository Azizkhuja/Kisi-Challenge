import React, { useState, useEffect } from "react";
import kisiApi from "../api";
import { useParams } from "react-router";

import {
  Grid,
  Paper,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import Modal from "./Modal";
import Spinner from "./Spinner";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const SingleListItem = () => {
  const { id } = useParams();

  const [locks, setLocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    kisiApi.then((client) => {
      client.get(`/group_locks/?group_id=${id}`).then((groupData) => {
        setLocks(groupData.data);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <Grid container>
      <Grid item xs={2} md={2} />
      <Grid item xs={8} md={8}>
        {isLoading ? (
          <Spinner />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              "& > :not(style)": { m: 1, width: 900, height: 600 },
            }}
          >
            <Paper elevation={1}>
              <Grid container>
                <Grid item xs={12}>
                  <Modal />
                </Grid>
                <Grid item xs={12}>
                  <List
                    sx={{
                      width: "100%",
                      position: "relative",
                      overflow: "auto",
                      maxHeight: 300,
                      "& ul": { padding: 0 },
                    }}
                  >
                    {locks.map((lock) => (
                      <ListItem key={lock.id}>
                        <ListItemIcon>
                          <SensorDoorOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={lock.lock.name} />
                        <ListItemText primary={lock.lock.description} />
                        <ListItemIcon>
                          <DeleteOutlineOutlinedIcon />
                        </ListItemIcon>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>

              {/* <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiB2aWV3Qm94PSIwIDAgMTYwIDE2MCI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjRThFREZBIiByeD0iODAiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MiA0MCkiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNzgiIHg9IjMiIHk9IjMiIHN0cm9rZT0iIzEzMTg0MCIgc3Ryb2tlLXdpZHRoPSI2IiByeD0iOCIvPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgeD0iNDAiIHk9IjM2IiBmaWxsPSIjMTMxODQwIiByeD0iMyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
              alt=""
            /> */}
            </Paper>
          </Box>
        )}
      </Grid>
      <Grid item xs={2} md={2} />
    </Grid>
  );
};

export default SingleListItem;
