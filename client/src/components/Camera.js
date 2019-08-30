import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
	type: {
		// fontFamily: 'bookman',
	},
	loading: {
		backgroundColor: '#000'
	}
}));

export default function Camera() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <img id='img' alt=''/>
	    <Typography className={classes.type} variant="h3" gutterBottom>
	      <br /><br /><br />Searching For Camera...
	    </Typography>
	    <LinearProgress className={classes.loading}/>
    </Container>
  );
}