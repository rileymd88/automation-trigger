import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';



export default function CustomSlider({block, globalTheme, blend}) {
  const dispatch = useDispatch();
  let value
  const tmpValue = useSelector(state => selectItem(state, block.ref))
  if(tmpValue === 'undefined') {
    const payload = {
      ref: block.ref,
      data: block.defaultValueNumber
    }
    dispatch(setItem(payload))
    value = block.defaultValueNumber
  }
  else {
    value = tmpValue
  }
  const useStyles = makeStyles((theme) => ({
    slider: {
      width: `${block.width}%`,
      marginBottom: 12,
      alignSelf: block.alignment
    }
  }));
  const classes = useStyles();

  const onSliderChange = (e) => {
    const payload = {
      ref: block.ref,
      data: e.target.value
    }
    dispatch(setItem(payload))
  };

  return (
  <div>
    <Typography id="discrete-slider" gutterBottom>
    {block.label}
  </Typography>
  <Slider
    onChange={onSliderChange}
    className={classes.slider}
    value={value}
    valueLabelDisplay="auto"
    step={block.step}
    min={block.min}
    max={block.max}
  />
  </div>
  );
}