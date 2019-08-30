import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  value: {
  	paddingRight: '5px',
  },
  units: {
  	paddingLeft: '0px',
  }
}));

function GetCell(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TableCell className={classes.value} align="right">{props.val}</TableCell>
      <TableCell className={classes.units} align="right">{props.unit}</TableCell>
    </React.Fragment>
  )
}

class StateTable extends Component {
  constructor(props) {
    super();
    this.state = {
      cpu: 50,
      ram: 128,
      networkUp: 128,
      networkDown: 128
    }
    props.socket.on('state', data => this.setState({
      cpu: data.cpu,
      ram: data.ram,
      networkUp: data.netUp,
      networkDown: data.netDown,
    }));
  }

  render() {
    return (
      <Table>
        <TableBody>

          <TableRow>
            <TableCell component="th" scope="row">
              CPU Usage
            </TableCell>
            <GetCell val={this.state.cpu} unit={'%'}/>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              RAM Usage
            </TableCell>
            <GetCell val={this.state.ram} unit={'mb'}/>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Network Upload
            </TableCell>
            <GetCell val={this.state.networkUp} unit={'mb'}/>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Network Download
            </TableCell>
            <GetCell val={this.state.networkDown} unit={'mb'}/>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default StateTable;
