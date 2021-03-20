import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Popup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button variant="contained" color="secondary" className="btn" onClick={handleClickOpen}>
        Create Event
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Event has been created!"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Add Availability Now
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
          Add Availability Later
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}