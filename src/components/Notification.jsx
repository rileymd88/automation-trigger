import React from 'react';
import { createPortal } from 'react-dom';
import { Toast } from '@qlik/sprout-react';
import { selectMessage, selectSnackbarOpen, selectSeverity, setSnackbarOpen } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function Notification() {
  const dispatch = useDispatch()
  const showSnackbar = useSelector(selectSnackbarOpen)
  const message = useSelector(selectMessage)
  const severity = useSelector(selectSeverity)

  React.useEffect(() => {
    if (!showSnackbar) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      dispatch(setSnackbarOpen(false))
    }, 12000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [dispatch, showSnackbar]);

  const handleClose = async () => {
    dispatch(setSnackbarOpen(false))
  }

  if (!showSnackbar) {
    return null;
  }

  return (
    createPortal(
      <Toast.Container placement="bottom">
        <Toast.Content
          message={message}
          onClose={handleClose}
          severity={severity === 'warning' ? 'warning' : severity}
        />
      </Toast.Container>,
      document.body
    )
  );
}
