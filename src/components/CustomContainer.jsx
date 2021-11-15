import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Grid } from '@mui/material';

export default function CustomContainer() {

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '100%'
    }
  }));
  const classes = useStyles();

  return (
      <Grid className={classes.container}></Grid>
  );
}