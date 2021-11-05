import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

import {
  DialogContent,
  DialogTitle,
  Divider,
  DialogActions,
} from "@mui/material";
import TextField from "@mui/material/TextField";
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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
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
              <DialogContent>
                <ModalActionInput />
              </DialogContent>
              <Divider />
              <div className="actioncontainer">
                <DialogActions>
                  <Button variant="text">Cancel</Button>
                </DialogActions>
                <DialogActions>
                  <Button variant="text">Add</Button>
                </DialogActions>
              </div>
            </Paper>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
