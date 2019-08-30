import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import RobotCard from './RobotCard'
import ControlPanel from './ControlPanel'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Container maxWidth="sm">
            <img id='img' />
          </Container>
        </Grid>
        <Grid item xs>
          <RobotCard />
        </Grid>
      </Grid>
      <ControlPanel />
    </div>
  );
}