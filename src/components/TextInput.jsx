import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';



export default function TextInput({block}) {
  const dispatch = useDispatch();
  const text = useSelector(selectAllItems)[block.index]
  const useStyles = makeStyles((theme) => ({
    textField: {
      width: `${block.width}%`,
      marginBottom: 12
    }
  }));
  const classes = useStyles();

  const onTextChange = (e) => {
    const payload = {
      ref: block.ref,
      data: e.target.value
    }
    dispatch(setItem(payload))
  };

  return (
      <TextField
        value={text}
        className={classes.textField}
        label={block.label}
        onChange={onTextChange}
        type="string" />
  );
}