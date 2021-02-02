import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function CustomCheckbox({ block }) {
  const useStyles = makeStyles((theme) => ({
    numberField: {
      width: `${block.width}%`,
      marginBottom: 12
    },
  }));
  const classes = useStyles();
  const checked = useSelector(selectAllItems)[block.index];
  const dispatch = useDispatch();

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
          checked={checked}
          onChange={onCheckBoxChange}
          name="checkedB"
          color="primary"
        />
      }
      label={block.label}
    />
  );
}
