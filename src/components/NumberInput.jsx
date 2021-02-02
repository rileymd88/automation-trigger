import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';



export default function NumberInput({block}) {
  const dispatch = useDispatch();
  const text = useSelector(selectAllItems)[block.index]
  const useStyles = makeStyles((theme) => ({
    numberField: {
      width: `${block.width}%`,
      marginBottom: 12
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
        value={text}
        className={classes.numberField}
        label={block.label}
        onChange={onNumberChange}
        type="number" />
  );
}