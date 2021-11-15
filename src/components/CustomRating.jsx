import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { setItem, selectItem } from '../states/formsSlice'
import { useSelector, useDispatch } from 'react-redux';



export default function Custom({ block, globalTheme, blend }) {
  const dispatch = useDispatch();
  let value
  const tmpValue = useSelector(state => selectItem(state, block.ref))
  if (tmpValue === 'undefined') {
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

  const onRatingChange = (e) => {
    const payload = {
      ref: block.ref,
      data: e.target.value
    }
    dispatch(setItem(payload))
  };

  return (
    <div>
      <Typography id="discrete-rating" gutterBottom>
        {block.label}
      </Typography>
      <Rating
        value={value}
        onChange={onRatingChange}
        size={block.ratingSize}
        precision={block.precision}
        max={block.maxRating}
      />
    </div>
  );
}