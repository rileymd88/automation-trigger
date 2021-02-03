import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';



export default function CustomSwitch({block, globalTheme, blend}) {
  const dispatch = useDispatch();
  const checked = useSelector(selectAllItems)[block.index]
  const useStyles = makeStyles((theme) => ({
    switch: {
      width: `${block.width}%`,
      marginBottom: 12
    }
  }));
  const classes = useStyles();

  const onSwitchChange = (e) => {
    const payload = {
      ref: block.ref,
      data: e.target.value
    }
    dispatch(setItem(payload))
  };

  return (
    <FormControlLabel
    className={classes.switch}
    control={
      <Switch
        checked={checked}
        onChange={onSwitchChange}
        color="primary"
      />
    }
    label={block.label}
  />
  );
}