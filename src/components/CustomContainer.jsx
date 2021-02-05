import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

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