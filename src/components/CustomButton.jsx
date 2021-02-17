import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoadingButton from '@material-ui/lab/LoadingButton';
import { executeBlend } from '../services/backend'
import { selectAllItems, selectItem, setDialog, setSnackbarOpen, setMessage, setSeverity } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';
import CustomIcon from './CustomIcon'

export default function CustomButton({blend, refs, getData, requiredItems, dialog}) {
  const dispatch = useDispatch();
  console.log(blend)
  let height
  let width
  if(!dialog.show) {
    if(blend.buttonHeightAuto) {
      height = 'auto'
    }
    else {
      height = `${blend.buttonHeight}%`
    }
    if(blend.buttonWidthAuto) {
      width = 'auto'
    }
    else {
      width = `${blend.buttonWidth}%`
    }
  }
  console.log(width)
  const useStyles = makeStyles((theme) => ({
    button: {
      width: width,
      alignSelf: blend.alignment,
      height: height
    },
  }));
  const classes = useStyles();
  const items = useSelector(selectAllItems)
  const [loading, setLoading] = React.useState(false)
  let requiredItemsFilled = true
  requiredItems.map(function(ref){
    const state = useSelector(state => selectItem(state, ref))
    if(state === "" || typeof state === 'undefined' || state === null) {
      requiredItemsFilled = false
    }
  })

  
  const onButtonClick = async () => {
      try {
        setLoading(true)
        let clone = {...items}
        for(const key in clone) {
          if(!refs.includes(key)) {
            delete clone[key]
          }
        }
        const msg = await executeBlend(blend.id, {form: clone, data: getData()})
        if(blend.showSuccessMsg) {
          dispatch(setSeverity('success'))
          if(blend.showSuccessMsgOutput) {
            dispatch(setMessage(msg))
          }
          else {
            dispatch(setMessage(blend.customSuccessMsg))
          }
          dispatch(setSnackbarOpen(true))
        }
        setLoading(false)
      }
      catch(err) {
        if(blend.showSuccessMsg) {
          dispatch(setSeverity('warning'))
          if(blend.showSuccessMsgOutput) {
            dispatch(setMessage(msg))
          }
          else {
            dispatch(setMessage(blend.customErrorMsg))
          }
          dispatch(setSnackbarOpen(true))
        }
        setLoading(false)

        console.error(err)
      }
      if(dialog.show) {
        dispatch(setDialog(false))
      }
  };

  let disabled
  if(blend.id.length > 1) {
    if(blend.useEnabledCondition) {
      if(blend.enabledCondition === 1) {
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
  if(!requiredItemsFilled) {
    disabled = true
  }
  let startIcon
  let endIcon
  if(blend.icon.useIcon) {
    if(blend.icon.position === 'left') {
      startIcon = <CustomIcon iconType={blend.icon.iconType}></CustomIcon>
    }
    else {
      endIcon = <CustomIcon iconType={blend.icon.iconType}></CustomIcon>
    }
  }
  return (
      <LoadingButton
        className={classes.button}
        disableElevation
        startIcon={startIcon}
        endIcon={endIcon}        
        disabled={disabled}
        pending={loading}
        pendingIndicator={blend.runningBlendLabel}
        variant="contained" 
        color="primary" 
        onClick={onButtonClick}>
          {blend.buttonLabel}
      </LoadingButton>
  );
}