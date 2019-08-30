import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RobotCard from "./RobotCard";
import ControlPanel from "./ControlPanel";
import Camera from "./Camera";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  camera: {
    borderRadius: '6px',
    border: '1px rgb(100, 100, 100) solid',
    borderWidth: '10px 2px 2px 2px',
    marginBottom: '16px',
    marginRight: '8px'
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();

  const socket = props.socket;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid className={classes.camera} item xs={8}>
          <Camera socket={socket}/>
        </Grid>
        <Grid item xs>
          <RobotCard socket={socket}/>
        </Grid>
      </Grid>
      <ControlPanel />
    </div>
  );
}