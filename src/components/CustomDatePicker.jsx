import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import TextField from '@mui/material/TextField';
import { setItem, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { format } from 'date-fns'
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const convertNumberDate = (numberData) => {
  const hours = Math.floor((numberData % 1) * 24);
  const minutes = Math.floor((((numberData % 1) * 24) - hours) * 60)
  return new Date(Date.UTC(0, 0, numberData, hours - 17, minutes));
}

export default function CustomDatePicker({ block, blendGlobalTheme, blend }) {
  const useStyles = makeStyles((theme) => ({
    datePicker: {
      width: `${block.width}%`,
      marginBottom: 12,
      alignSelf: block.alignment
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  let date
  const tmpDate = useSelector(state => selectItem(state, block.ref))
  if (tmpDate === 'undefined') {
    const payload = {
      ref: block.ref,
      data: convertNumberDate(block.defaultValueDate)
    }
    dispatch(setItem(payload))
    date = convertNumberDate(block.defaultValueDate)
  }
  else {
    date = tmpDate
  }



  const onDateChange = (newValue) => {
    const payload = {
      ref: block.ref,
      data: newValue
    }
    dispatch(setItem(payload))
  };

  return (
    <LocalizationProvider className={classes.datePicker} dateAdapter={AdapterDateFns}>
      <DatePicker
        onChange={onDateChange}
        mask={block.dateFormat.split('|')[1]}
        inputFormat={block.dateFormat.split('|')[0]}
        className={classes.datePicker}
        value={date}
        label={block.label}
        renderInput={(params) => <TextField {...params} className={classes.datePicker} variant={blendGlobalTheme.variant} />}
      />
    </LocalizationProvider>
  );
}