import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import kisiApi from "../api";

import {
  Box,
  Button,
  Modal,
  Paper,
  DialogContent,
  DialogTitle,
  Divider,
  DialogActions,
} from "@mui/material";

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
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [selectedLocks, setSelectedLocks] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  return (
    <div className="modal__container">
      <Button onClick={() => history.goBack()}>Back</Button>
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
                  <Button variant="text" onClick={() => handleClose()}>
                    Cancel
                  </Button>
                </DialogActions>
                <DialogActions>
                  <Button
                    variant="text"
                    onClick={() => {
                      kisiApi.then((client) => {
                        const promises = selectedLocks.map((selectedLock) => {
                          return client.post("/group_locks", {
                            group_lock: {
                              group_id: id,
                              lock_id: selectedLock.id,
                            },
                          });
                        });

                        Promise.all(promises).then(() => handleClose());
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
