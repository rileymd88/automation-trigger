import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import LoadingButton from '@mui/lab/LoadingButton';
import { executeAutomation, createBookmark, getAppId, getSheetId } from '../services/backend'
import { selectAllItems, setDialog, setSnackbarOpen, setMessage, setSeverity, setRedirect } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';
import CustomIcon from './CustomIcon'

export default function CustomButton({ blend, refs, getData, requiredItems, dialog }) {
  const dispatch = useDispatch();
  let height
  let width
  if (!dialog.show) {
    if (blend.buttonHeightAuto) {
      height = 'auto'
    }
    else {
      height = `${blend.buttonHeight}%`
    }
    if (blend.buttonWidthAuto) {
      width = 'auto'
    }
    else {
      width = `${blend.buttonWidth}%`
    }
  }
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
  requiredItems.map(function (ref) {
    let state
    for (let s in items) {
      state = items[s]
      if (state === "" || typeof state === 'undefined' || state === null) {
        requiredItemsFilled = false
      }
    }
  })

  const onButtonClick = async () => {
    try {
      setLoading(true)
      let clone = { ...items }
      for (const key in clone) {
        if (!refs.includes(key)) {
          delete clone[key]
        }
      }
      if (blend.sendSelections) {
        const bookmarkId = await createBookmark(blend.app)
      }
      const msg = await executeAutomation(blend.id, { form: clone, data: getData(), bookmarkId: blend.sendSelections ? bookmarkId : '', appId: getAppId(), sheetId: getSheetId() }, blend.executionToken)

      if (blend.showSuccessMsg) {
        dispatch(setSeverity('success'))
        if (blend.showSuccessMsgOutput) {
          if (typeof msg !== 'undefined') {
            try {
              // json
              let jsonMsg = JSON.parse(msg)
              dispatch(setMessage(jsonMsg.message))
              dispatch(setRedirect(jsonMsg.redirect))
              if (typeof jsonMsg.redirect !== 'undefined') {
                setTimeout(() => {
                  if (jsonMsg.newTab) {
                    window.open(jsonMsg.redirect, '_blank');
                  }
                  else {
                    window.location.href = jsonMsg.redirect
                  }
                }, typeof jsonMsg.timeout !== 'undefined' ? jsonMsg.timeout : 800);
              }
            }
            catch (e) {
              // array
              if (typeof msg === 'object' && msg.length > 0) {
                dispatch(setMessage(msg.join(' ')))
              }
              // string
              else {
                dispatch(setMessage(msg))
              }
            }

            // json

          }
        }
        else {
          dispatch(setMessage(blend.customSuccessMsg))
        }
        dispatch(setSnackbarOpen(true))
      }
      setLoading(false)
    }
    catch (err) {
      if (blend.showSuccessMsg) {
        dispatch(setSeverity('warning'))
        if (blend.showSuccessMsgOutput) {
          if (typeof msg !== 'undefined') {
            dispatch(setMessage(msg))
          }
        }
        else {
          dispatch(setMessage(blend.customErrorMsg))
        }
        dispatch(setSnackbarOpen(true))
      }
      setLoading(false)
      console.error(err)
    }
    if (dialog.show) {
      dispatch(setDialog(false))
    }
  };

  let disabled
  if (blend.id.length > 1) {
    if (blend.useEnabledCondition) {
      if (blend.enabledCondition === 1) {
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
  if (!requiredItemsFilled) {
    disabled = true
  }
  let startIcon
  let endIcon
  if (blend.icon.useIcon) {
    if (blend.icon.position === 'left') {
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