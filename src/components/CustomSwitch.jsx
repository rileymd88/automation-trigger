import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';



export default function CustomSwitch({block, globalTheme, blend}) {
  const dispatch = useDispatch();
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
  const useStyles = makeStyles((theme) => ({
    switch: {
      width: `${block.width}%`,
      marginBottom: 12,
      alignSelf: block.alignment
    }
  }));
  const classes = useStyles();

  const onSwitchChange = (e) => {
    const payload = {
      ref: block.ref,
      data: e.target.checked
    }
    dispatch(setItem(payload))
  };

  return (
    <FormControlLabel
    className={classes.switch}
    control={
      <Switch
        checked={value}
        onChange={onSwitchChange}
        color="primary"
      />
    }
    label={block.label}
  />
  );
}