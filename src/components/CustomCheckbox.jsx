import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function CustomCheckbox({block, globalTheme, blend}) {
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => ({
    numberField: {
      width: `${block.width}%`,
      marginBottom: 12,
      alignSelf: block.alignment
    },
  }));
  const classes = useStyles();
  let value
  const tmpValue = useSelector(state => selectItem(state, block.ref))

  const defaultValue = block.defaultValueNumber === 1 ? true : false
  if(tmpValue === 'undefined') {
    const payload = {
      ref: block.ref,
      data: defaultValue
    }
    dispatch(setItem(payload))
    value = defaultValue
  }
  else {
    value = tmpValue
  }
  

  const onCheckBoxChange = (e) => {
    const payload = {
      ref: block.ref,
      data: e.target.checked,
    };
    dispatch(setItem(payload))
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value}
          onChange={onCheckBoxChange}
          name="checkedB"
          color="primary"
        />
      }
      label={block.label}
    />
  );
}
