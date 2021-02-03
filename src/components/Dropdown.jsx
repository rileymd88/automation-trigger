import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';

export default function Dropdown({block, blendGlobalTheme, blend}) {
  console.log(blendGlobalTheme)
  const useStyles = makeStyles((theme) => ({
    dropdown: {
      width: `${block.width}%`,
      marginBottom: 12
    },
  }));
  console.log(block)
  const classes = useStyles();
  const checked = useSelector(selectAllItems)[block.index];
  const dispatch = useDispatch();
  
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
