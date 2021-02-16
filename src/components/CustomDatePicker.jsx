import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';
import { DatePicker } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';



export default function CustomDatePicker({block, blendGlobalTheme, blend}) {
  const dispatch = useDispatch();
  let date
  const tmpDate = useSelector(state => selectItem(state, block.ref))
  if(tmpDate === 'undefined') {
    const payload = {
      ref: block.ref,
      data: block.defaultValue
    }
    dispatch(setItem(payload))
    date = block.defaultValue
  }
  else {
    date = tmpDate
  }
  
  const useStyles = makeStyles((theme) => ({
    textField: {
      width: `${block.width}%`,
      marginBottom: 12
    }
  }));
  const classes = useStyles();

  const onDateChange = (newValue) => {
    const payload = {
      ref: block.ref,
      data: newValue
    }
    dispatch(setItem(payload))
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      value={null}
      label={block.label}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} variant={blendGlobalTheme.variant} />}
    />
  </LocalizationProvider>
  );
}