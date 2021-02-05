import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';



export default function TextInput({block, blendGlobalTheme, blend}) {
  const dispatch = useDispatch();
  let value
  const tmpValue = useSelector(state => selectItem(state, block.ref))
  if(tmpValue === 'undefined') {
    const payload = {
      ref: block.ref,
      data: block.defaultValueString
    }
    dispatch(setItem(payload))
    value = block.defaultValueString
  }
  else {
    value = tmpValue
  }
  const useStyles = makeStyles((theme) => ({
    textField: {
      width: `${block.width}%`,
      marginBottom: 12,
      alignSelf: block.alignment
    }
  }));
  const classes = useStyles();

  const onTextChange = (e) => {
    const payload = {
      ref: block.ref,
      data: e.target.value
    }
    dispatch(setItem(payload))
  };

  return (
      <TextField
        variant={blendGlobalTheme.variant}
        value={value}
        className={classes.textField}
        label={block.label}
        onChange={onTextChange}
        type="string" />
  );
}