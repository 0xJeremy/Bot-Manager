import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Build from "@material-ui/icons/Build";
import OpenWith from "@material-ui/icons/OpenWith";
import Grid from "@material-ui/core/Grid";
import GridItem from "./packs/GridItem.js";
import Card from "./packs/Card.js";
import CardBody from "./packs/CardBody.js";
import CardHeader from "./packs/CardHeader.js";
import CardIcon from "./packs/CardIcon.js";
import Button from "./packs/Button.js"
import ManualControl from "./ManualControl.js"

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  body: {
    paddingTop: '0',
    paddingBottom: '0'
  }
}));

export default function ControlPanel() {
  const classes = useStyles();

  function Row1() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Button variant="contained" color="danger" className={classes.button} fullWidth>
            Autonomous Mode
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="info" className={classes.button} fullWidth>
            Camera Mode
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="info" className={classes.button} fullWidth>
            Camera Mode
          </Button>
        </Grid>
      </React.Fragment>
    );
  }

  function Row2() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Button variant="contained" color="danger" className={classes.button} fullWidth>
            Manual Control
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="info" className={classes.button} fullWidth>
            Camera Mode
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="info" className={classes.button} fullWidth>
            Camera Mode
          </Button>
        </Grid>
      </React.Fragment>
    );
  }

  function Row3() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Button variant="contained" color="danger" className={classes.button} fullWidth>
            Automatic Debug
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="info" className={classes.button} fullWidth>
            Camera Mode
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="info" className={classes.button} fullWidth>
            Camera Mode
          </Button>
        </Grid>
      </React.Fragment>
    );
  }


  return (
    <div>
      <Grid container spacing={2}>

        <GridItem xs={8} md={6}>
          <Card>
            <CardHeader color="warning" icon>
              <CardIcon color="warning">
                <OpenWith />
              </CardIcon>
            </CardHeader>
            <CardBody className={classes.body}>
              <ManualControl />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={8} md={6}>
          <Card>
            <CardHeader color="warning" icon>
              <CardIcon color="warning">
                <Build />
              </CardIcon>
            </CardHeader>
            <CardBody className={classes.body}>

              <Grid container spacing={0} justify="center">
                <Grid container item xs={12} spacing={2}>
                  <Row1 />
                </Grid>
                <Grid container item xs={12} spacing={2}>
                  <Row2 />
                </Grid>
                <Grid container item xs={12} spacing={2}>
                  <Row3 />
                </Grid>
              </Grid>

            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}