import React from 'react';
import { Button } from '@qlik/sprout-react';
import { executeAutomation, createBookmark, createTemporaryBookmark, getAppId, getSheetId } from '../services/backend'
import { selectAllItems, setDialog, setSnackbarOpen, setMessage, setSeverity, setRedirect } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';
import CustomIcon from './CustomIcon'
import { getButtonBrandStyle, getButtonStyle } from './component-utils';
import { getAutomationHypercubeData } from '../utils/hypercube';

export default function CustomButton({ blend, blendGlobalTheme, refs, getData, items, dialog, app, model }) {
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
  const itemsState = useSelector(selectAllItems)
  const [loading, setLoading] = React.useState(false)

  let requiredItemsFilled = true

  for(let i = 0; i<items.length;i++) {
    const item = items[i]
    if(item.required) {
      const state = itemsState[item.ref]
      if(item.component === 'checkbox' || item.component === 'switch') {
        if(state === "" || typeof state === 'undefined' || state === null || state !== item.requiredValue) {
          requiredItemsFilled = false
          break
        }
        else {
          requiredItemsFilled = true
        }
      }
      else {
        if(state === "" || typeof state === 'undefined' || state === null) {
          requiredItemsFilled = false
          break
        }
        else {
          requiredItemsFilled = true
        }
      }
    }
  }
    
      
 

  const parseMsg = (msg) => {
    if (typeof msg !== 'undefined') {
      if (blend.showSuccessMsgOutput) {
        try {
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
      }
      else {
        dispatch(setMessage(blend.customErrorMsg))
      }
    }
  }

  const onButtonClick = async () => {
    setLoading(true)
    let clone = { ...itemsState }
    for (const key in clone) {
      if (!refs.includes(key)) {
        delete clone[key]
      }
    }
    let bookmarkId
    if (blend.sendSelections) {
      bookmarkId = blend.useTemporaryBookmark
        ? await createTemporaryBookmark(blend.app)
        : await createBookmark(blend.app)
    }
    const data = blend.simplifiedJsonFormat
      ? getAutomationHypercubeData(getData(), true)
      : { hypercube: getAutomationHypercubeData(getData(), false) }
    const m  = await executeAutomation(blend.id, { form: clone, data, bookmarkid: blend.sendSelections ? bookmarkId : '', app: await getAppId(app), sheetid: await getSheetId(model) }, blend.executionToken)
    dispatch(setSeverity(m.ok || m.msg === 'queued' ? 'success': 'warning'))
    parseMsg(m.msg === 'queued' ? blend.customSuccessMsg : m.msg )
    if(blend.showSuccessMsg) {
      dispatch(setSnackbarOpen(true))
    }
    if (dialog.show) {
      dispatch(setDialog(false))
    }
    setLoading(false)
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
    <Button
      disabled={disabled}
      icon={startIcon}
      justified={!blend.buttonWidthAuto}
      label={blend.buttonLabel}
      loading={loading}
      style={{
        ...getButtonStyle(blend.alignment, width, height),
        ...getButtonBrandStyle(blendGlobalTheme),
      }}
      title={loading ? blend.runningBlendLabel : blend.buttonLabel}
      trailingIcon={endIcon}
      variant="primary"
      onClick={onButtonClick}>
      {blend.buttonLabel}
    </Button>
  );
}
