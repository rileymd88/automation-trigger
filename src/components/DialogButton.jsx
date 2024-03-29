import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomIcon from './CustomIcon'
import { setDialog } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function DialogButton({dialog}) {
  const dispatch = useDispatch();
  let height
  let width
  if(dialog.heightAuto) {
    height = 'auto'
  }
  else {
    height = `${dialog.height}%`
  }
  if(dialog.widthAuto) {
    width = 'auto'
  }
  else {
    width = `${dialog.buttonWidth}%`
  }
  
  const useStyles = makeStyles((theme) => ({
    button: {
      width: width,
      alignSelf: dialog.alignment,
      height: height
    }
  }));
  const classes = useStyles();

  const onButtonClick = (e) => {
    dispatch(setDialog(true))
  };


  let disabled
  if(dialog.id.length > 1) {
    if(dialog.useEnabledCondition) {
      if(dialog.enabledCondition === 1) {
        disabled = false
      }
      else {
        disabled = true
      }
    }
    else {
      disabled = false
    }
  }
  else {
    disabled = true
  }

  let startIcon
  let endIcon
  if(dialog.useIcon) {
    if(dialog.iconPosition === 'left') {
      startIcon = <CustomIcon iconType={dialog.iconType}></CustomIcon>
    }
    else {
      endIcon = <CustomIcon iconType={dialog.iconType}></CustomIcon>
    }
  }


  return (
    <Button
        startIcon={startIcon}
        endIcon={endIcon}
        disableElevation
        className={classes.button}
        disabled={disabled}
        variant="contained" 
        color="primary" 
        onClick={onButtonClick}>
        {dialog.buttonLabel}
      </Button>
  );
}