import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { selectAllItems, setDialog, selectDialog } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function CustomDialog({dialog, customButton}) {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems)
  const dialogOpen = useSelector(selectDialog)
  const [loading, setLoading] = React.useState(false)
  const useStyles = makeStyles((theme) => ({
    textField: {
    }
  }));
  const classes = useStyles();

  const onClose = (e) => {
    dispatch(setDialog(false))
  };

  return (
    <Dialog
    fullWidth={true}
    maxWidth={dialog.width}
    open={dialogOpen}
    onClose={onClose}
    PaperComponent={PaperComponent}
    aria-labelledby="draggable-dialog-title"
  >
    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">{dialog.title}</DialogTitle>
    <DialogContent>
      {dialog.formItems}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      {customButton}
    </DialogActions>
  </Dialog>
  );
}