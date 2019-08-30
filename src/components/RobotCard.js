import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Language from "@material-ui/icons/Language";
import Grid from "@material-ui/core/Grid";
import GridItem from "./packs/GridItem.js";
import Card from "./packs/Card.js";
import CardBody from "./packs/CardBody.js";
import CardHeader from "./packs/CardHeader.js";
import CardIcon from "./packs/CardIcon.js";
import Paper from '@material-ui/core/Paper';
import StateTable from './StateTable.js';

const useStyles = makeStyles(theme => ({
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontSize: '1.5em'
  }
}));

export default function RobotCard() {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardHeader color="danger">
          <h4 className={classes.cardTitle}>Robot Status</h4>
        </CardHeader>
        <CardBody>
          <Paper className={classes.root}>
            <StateTable />
          </Paper>
        </CardBody>
      </Card>
      <Card>
        <CardHeader color="danger">
          <h4 className={classes.cardTitle}>Full header coloured</h4>
          <p>Category subtitle</p>
        </CardHeader>
        <CardBody>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night
          life in Barcelona...
        </CardBody>
      </Card>
    </div>
  );
}