import React, { useState, useEffect } from "react";
import kisiApi from "../api";
import { Autocomplete, TextField } from "@mui/material";

export default function ModalActionInput({ existingLocks, onChange }) {
  const [locks, setLocks] = useState([]);

  useEffect(() => {
    kisiApi.then((client) => {
      client.get(`locks`).then((groupData) => {
        const filteredLocks = groupData.data.filter((lock) => {
          const existingLockIds = existingLocks.map(
            (existingLock) => existingLock.lockId
          );
          return !existingLockIds.includes(lock.id);
        });
        setLocks(filteredLocks);
      });
    });
  }, []);

  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={locks}
      getOptionLabel={(lock) => lock.name}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="Search Doors" />}
      onChange={(_, value) => onChange(value)}
    />
  );
}
