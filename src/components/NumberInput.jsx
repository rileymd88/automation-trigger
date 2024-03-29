import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import TextField from '@mui/material/TextField';
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';



export default function NumberInput({block, blendGlobalTheme, blend}) {
  const dispatch = useDispatch();
  let value
  const tmpValue = useSelector(state => selectItem(state, block.ref))
  if(tmpValue === 'undefined') {
    const payload = {
      ref: block.ref,
      data: block.defaultValueNumber
    }
    dispatch(setItem(payload))
    value = block.defaultValueNumber
  }
  else {
    value = tmpValue
  }
  const useStyles = makeStyles((theme) => ({
    numberField: {
      width: `${block.width}%`,
      marginBottom: 12,
      alignSelf: block.alignment
    }
  }));
  const classes = useStyles();

  const onNumberChange = (e) => {
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
        className={classes.numberField}
        label={block.label}
        onChange={onNumberChange}
        type="number" />
  );
}