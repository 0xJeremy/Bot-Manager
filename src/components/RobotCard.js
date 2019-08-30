import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./packs/Card.js";
import CardBody from "./packs/CardBody.js";
import CardHeader from "./packs/CardHeader.js";
import StateTable from './StateTable.js';
import PiStatus from './PiStatus.js'

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
            <StateTable />
        </CardBody>
      </Card>
      <Card>
        <CardHeader color="danger">
          <h4 className={classes.cardTitle}>Raspberry Pi Info</h4>
        </CardHeader>
        <CardBody>
          <PiStatus />
        </CardBody>
      </Card>
    </div>
  );
}