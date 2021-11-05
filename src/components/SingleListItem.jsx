import React from "react";
import { useParams } from "react-router";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "./Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const SingleListItem = ({ infos }) => {
  const { id } = useParams();
  return (
    <Grid container>
      <Grid item xs={2} md={2} />
      <Grid item xs={8} md={8}>
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
            {/* <p>ID: {id}</p> */}
            <Modal />
            <List
              sx={{
                width: "100%",
                position: "relative",
                overflow: "auto",
                maxHeight: 300,
                "& ul": { padding: 0 },
              }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SensorDoorOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Doo" />
                  <ListItemText primary={`Test` ? `Make` : "No description"} />
                  <ListItemIcon>
                    <DeleteOutlineOutlinedIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>

            {/* <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiB2aWV3Qm94PSIwIDAgMTYwIDE2MCI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjRThFREZBIiByeD0iODAiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MiA0MCkiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNzgiIHg9IjMiIHk9IjMiIHN0cm9rZT0iIzEzMTg0MCIgc3Ryb2tlLXdpZHRoPSI2IiByeD0iOCIvPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgeD0iNDAiIHk9IjM2IiBmaWxsPSIjMTMxODQwIiByeD0iMyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
              alt=""
            /> */}
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={2} md={2} />
    </Grid>
  );
};

export default SingleListItem;
