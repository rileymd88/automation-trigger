import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';



export default function DatePicker({block, blendGlobalTheme, blend}) {
  const dispatch = useDispatch();
  const date = useSelector(function(state){
    return state
  })
  console.log(date)
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
    <DatePicker
    label="Year only"
    value={date}
    onChange={(newValue) => {
      onDateChange(newValue);
    }}
    renderInput={(params) => (
      <TextField
        {...params}
        margin="normal"
        helperText={null}
        variant="standard"
      />
    )}
  />
  );
}