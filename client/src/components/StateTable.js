import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    overflowX: 'auto',
  },
  table: {
    // minWidth: 650,
  },
  value: {
  	paddingRight: '5px',
  },
  units: {
  	paddingLeft: '0px',
  }
}));

function createData(name, value, units) {
  return { name, value, units };
}

const rows = [
  createData('CPU Usage', 50, '%'),
  createData('RAM Usage', 128, 'mb'),
  createData('Network Upload', 128, 'mb'),
  createData('Network Download', 128, 'mb'),
];

export default function StateTable() {
	const classes = useStyles();
	return (
		<Table className={classes.table}>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell className={classes.value} align="right">{row.value}</TableCell>
            <TableCell className={classes.units} align="right">{row.units}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}