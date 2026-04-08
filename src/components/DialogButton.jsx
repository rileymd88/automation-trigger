import React from 'react';
import { Button } from '@qlik/sprout-react';
import CustomIcon from './CustomIcon'
import { setDialog } from '../states/formsSlice'
import { useDispatch } from 'react-redux';
import { getButtonBrandStyle, getButtonStyle } from './component-utils';

export default function DialogButton({ dialog, blendGlobalTheme }) {
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
      disabled={disabled}
      icon={startIcon}
      justified={!dialog.widthAuto}
      label={dialog.buttonLabel}
      onClick={onButtonClick}
      style={{
        ...getButtonStyle(dialog.alignment, width, height),
        ...getButtonBrandStyle(blendGlobalTheme),
      }}
      trailingIcon={endIcon}
      variant="primary"
    />
  );
}
