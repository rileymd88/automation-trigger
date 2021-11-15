import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { setItem, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function DropdownMultiple({block, blendGlobalTheme, blend}) {
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => ({
    dropdown: {
      width: `${block.width}%`,
      marginBottom: 12,
      alignSelf: block.alignment
    },
  }));
  const classes = useStyles();
  let value
  const tmpValue = useSelector(state => selectItem(state, block.ref))
  if(typeof tmpValue === 'undefined') {
    const payload = {
      ref: block.ref,
      data: block.defaultValueString ? block.defaultValueString.split(',') : []
    }
    dispatch(setItem(payload))
    value = block.defaultValueString ? block.defaultValueString.split(',') : []
  }
  else {
      value = tmpValue
  }
  
  const options = block.dropdownOptions === "" || typeof block.dropdownOptions === 'undefined' ? [] : block.dropdownOptions.split(',')

  const onDropdownChange = (newValue) => {
    const payload = {
      ref: block.ref,
      data: newValue,
    };
    dispatch(setItem(payload))
  };

  return (
    <Autocomplete
      multiple
      forcePopupIcon={false}
      value={typeof value === 'object' ? value : []}
      variant={blendGlobalTheme.variant}
      options={options.length > 1 ? options: []}
      className={classes.dropdown}
      renderInput={(params) => <TextField {...params} variant={blendGlobalTheme.variant} label={block.label} />}
      onChange={(event, newValue) => {
        onDropdownChange(newValue);
      }}
    />
  );
}
