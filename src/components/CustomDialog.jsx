import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import LoadingButton from '@material-ui/lab/LoadingButton';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { executeBlend } from '../services/backend'
import { selectAllItems, selectItem, setDialog, selectDialog } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';

function PaperComponent() {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function CustomDialog({customButton}) {
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

  const onSave = async (e)  => {
    try {
      setLoading(true)
      let clone = {...items}
      for(const key in clone) {
        if(!dialog.refs.includes(key)) {
          delete clone[key]
        }
      }
      await executeBlend(dialog.id, {form: clone, data: dialog.getData()})
      setLoading(false)
      dispatch(setDialog(false))
    }
    catch(err) {
      setLoading(false)
      console.error(err)
      dispatch(setDialog(false))
    }
    
  }

  return (
    <Dialog
    fullWidth={true}
    maxWidth={dialog.width}
    open={dialogOpen}
    onClose={onClose}
    aria-labelledby="draggable-dialog-title"
  >
    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">{dialog.title}</DialogTitle>
    <DialogContent>
      {dialog.formItems}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <LoadingButton
        disabled={dialog.disabled}
        pending={loading}
        pendingIndicator={dialog.runningBlendLabel}
        variant="contained" 
        color="primary" 
        onClick={onSave}>
          {dialog.buttonLabel}
      </LoadingButton>
    </DialogActions>
  </Dialog>
  );
}