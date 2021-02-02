import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { setItem, selectAllItems, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';



export default function CustomSlider({block}) {
  const dispatch = useDispatch();
  const value = useSelector(selectAllItems)[block.index]
  const useStyles = makeStyles((theme) => ({
    slider: {
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
    <div>
    <Typography id="discrete-slider" gutterBottom>
    {block.label}
  </Typography>
  <Slider
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