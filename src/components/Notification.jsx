import React from 'react';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Portal from '@mui/material/Portal';
import makeStyles from '@mui/styles/makeStyles';
import { selectMessage, selectSnackbarOpen, selectSeverity, setSnackbarOpen } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme) => ({
  notification: {
    zIndex: 2000
  },
}));

export default function Notification() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const showSnackbar = useSelector(selectSnackbarOpen)
  const message = useSelector(selectMessage)
  const severity = useSelector(selectSeverity)
  

  const handleClose = async () => {
    dispatch(setSnackbarOpen(false))
  }

  return (
    <Portal>
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showSnackbar} 
      autoHideDuration={12000} 
      onClose={handleClose}>
      <Alert 
      onClose={handleClose} 
      severity={severity}>
        {message}
      </Alert>
    </Snackbar>
    </Portal>
  );
}