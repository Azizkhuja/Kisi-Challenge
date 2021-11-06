import React, { useState, useEffect } from "react";
import kisiApi from "../api";

import {
  Box,
  Button,
  Typography,
  Modal,
  Paper,
  DialogContent,
  DialogTitle,
  Divider,
  DialogActions,
  TextField,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ModalActionInput from "./ModalActionInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  borderRadius: 10,
  bgcolor: "background.paper",
};

export default function BasicModal({ locks, onClose }) {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedLocks, setSelectedLocks] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    onClose();
    setOpen(false);
  };
  const onCancelClick = () => {
    setOpen(false);
  };
  const onAddClick = () => {
    setOpen(false);
  };

  return (
    <div className="modal__container">
      <Button variant="outlined" onClick={handleOpen}>
        Add Doors
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <Paper elevation={1}>
              <DialogTitle className="modal__title">Add Doors</DialogTitle>
              <DialogContent className="action__container">
                <ModalActionInput
                  existingLocks={locks}
                  onChange={(locks) => setSelectedLocks(locks)}
                />
              </DialogContent>
              <Divider />
              <div className="action__buttons">
                <DialogActions>
                  <Button variant="text" onClick={() => onCancelClick()}>
                    Cancel
                  </Button>
                </DialogActions>
                <DialogActions>
                  <Button
                    variant="text"
                    onClick={() => {
                      onAddClick();
                      kisiApi.then((client) => {
                        selectedLocks.forEach((selectedLock) => {
                          client.post("/group_locks", {
                            group_lock: {
                              group_id: id,
                              lock_id: selectedLock.id,
                            },
                          });
                        });
                      });
                    }}
                  >
                    Add
                  </Button>
                </DialogActions>
              </div>
            </Paper>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
