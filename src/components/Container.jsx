import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

export default function Container({block}) {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'row',
      margin: 12,
      justifyContent: 'space-around'
    }
  }));
  const classes = useStyles();

  return (
      <Grid container direction="column" alignContent='space-between'></Grid>
  );
}