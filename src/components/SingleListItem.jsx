import React, { useState, useEffect } from "react";
import kisiApi from "../api";
import { useParams } from "react-router";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import Modal from "./Modal";
import Spinner from "./Spinner";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EmptyQueue from "./EmptyQueue";

const SingleListItem = ({ backBtn }) => {
  const { id } = useParams();
  const [locks, setLocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLocks = () =>
    kisiApi.then((client) => {
      client.get(`/group_locks/?group_id=${id}`).then((groupData) => {
        setLocks(groupData.data);
        setIsLoading(false);
      });
    });

  useEffect(() => {
    // const abortCount = new AbortController();
    fetchLocks();
    // return () => abortCount.abort();
  }, []);

  return (
    <Box mt={2} ml="auto" mr="auto" width={900}>
      <Card>
        <CardContent>
          {isLoading ? (
            <Spinner />
          ) : (
            <Box minHeight={300}>
              <Modal locks={locks} onClose={() => fetchLocks()} />
              {locks.length > 0 ? (
                <List>
                  {locks.map((lock) => (
                    <ListItem key={lock.id}>
                      <ListItemIcon>
                        <SensorDoorOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={lock.lock.name} />
                      <ListItemText primary={lock.lock.description} />
                      <ListItemIcon>
                        <IconButton
                          onClick={() => {
                            kisiApi.then((client) => {
                              client
                                .delete(`/group_locks/${lock.id}`)
                                .then(() => fetchLocks());
                            });
                          }}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </ListItemIcon>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <EmptyQueue
                  emptyGroup="No doors."
                  emptyGroupImg="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiB2aWV3Qm94PSIwIDAgMTYwIDE2MCI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjRThFREZBIiByeD0iODAiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MiA0MCkiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNzgiIHg9IjMiIHk9IjMiIHN0cm9rZT0iIzEzMTg0MCIgc3Ryb2tlLXdpZHRoPSI2IiByeD0iOCIvPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgeD0iNDAiIHk9IjM2IiBmaWxsPSIjMTMxODQwIiByeD0iMyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                />
              )}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SingleListItem;
