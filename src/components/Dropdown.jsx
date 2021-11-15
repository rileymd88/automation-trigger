import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { setItem, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Dropdown({block, blendGlobalTheme, blend}) {
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
      forcePopupIcon={false}
      value={value}
      defaultValue={block.defaultValue}
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
