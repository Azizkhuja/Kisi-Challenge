import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Kisi from "kisi-client";
import axios from "axios";
import SingleList from "./SingleList";

const groups = [
  {
    id: 30033,
    name: "Group 4",
    description: null,
    geofenceRestrictionEnabled: false,
    geofenceRestrictionRadius: 300,
    primaryDeviceRestrictionEnabled: false,
    readerRestrictionEnabled: false,
    timeRestrictionEnabled: false,
    loginEnabled: true,
    membersCount: 0,
    locksCount: 2,
    elevatorStopsCount: 0,
    createdAt: "2021-11-01T21:55:40.581Z",
    updatedAt: "2021-11-01T21:55:40.581Z",
    placeId: 12617,
    place: { id: 12617, name: "Door 1" },
    timeRestrictionTimeZone: null,
    timeRestrictionTimeSlots: [],
  },
  {
    id: 30032,
    name: "Group 3",
    description: "",
    geofenceRestrictionEnabled: false,
    geofenceRestrictionRadius: 300,
    primaryDeviceRestrictionEnabled: false,
    readerRestrictionEnabled: false,
    timeRestrictionEnabled: false,
    loginEnabled: true,
    membersCount: 0,
    locksCount: 0,
    elevatorStopsCount: 0,
    createdAt: "2021-11-01T21:55:27.743Z",
    updatedAt: "2021-11-01T21:55:27.743Z",
    placeId: 12617,
    place: { id: 12617, name: "Door 1" },
    timeRestrictionTimeZone: null,
    timeRestrictionTimeSlots: [],
  },
  {
    id: 30031,
    name: "Group 2",
    description: "It is second group",
    geofenceRestrictionEnabled: false,
    geofenceRestrictionRadius: 300,
    primaryDeviceRestrictionEnabled: false,
    readerRestrictionEnabled: false,
    timeRestrictionEnabled: false,
    loginEnabled: true,
    membersCount: 1,
    locksCount: 2,
    elevatorStopsCount: 0,
    createdAt: "2021-11-01T21:49:51.416Z",
    updatedAt: "2021-11-01T21:49:51.416Z",
    placeId: 12617,
    place: { id: 12617, name: "Door 1" },
    timeRestrictionTimeZone: null,
    timeRestrictionTimeSlots: [],
  },
  {
    id: 30029,
    name: "Group 1",
    description: "It is first group",
    geofenceRestrictionEnabled: false,
    geofenceRestrictionRadius: 300,
    primaryDeviceRestrictionEnabled: false,
    readerRestrictionEnabled: false,
    timeRestrictionEnabled: false,
    loginEnabled: true,
    membersCount: 0,
    locksCount: 1,
    elevatorStopsCount: 0,
    createdAt: "2021-11-01T20:20:36.519Z",
    updatedAt: "2021-11-01T20:20:36.519Z",
    placeId: 12617,
    place: { id: 12617, name: "Door 1" },
    timeRestrictionTimeZone: null,
    timeRestrictionTimeSlots: [],
  },
];

const kisiClient = new Kisi();

const GroupLists = () => {
  return (
    <div>
      <Typography variant="h4">Groups 4</Typography>
      <Typography variant="h7">
        Add members to groups and assign different access rights
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": { m: 1, width: 900, height: 550 },
        }}
        className="doors__container"
      >
        <Paper elevation={1}>
          <ul>
            {groups.map((group) => (
              <SingleList items={group} key={group.id}>
                {group.name}
              </SingleList>
            ))}
          </ul>
        </Paper>
      </Box>
    </div>
  );
};

export default GroupLists;