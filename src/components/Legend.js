import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '15em',
    borderRadius: '4px',
    border: '1px rgb(100, 100, 100) solid',
    borderWidth: '1px 8px 1px 1px',
    position: 'absolute',
    bottom: '1em',
    right: '1em',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '75%',
    flexShrink: 0,
    paddingRight: '4px'
  },
  panel: {
  	background: '#111',
  	color: '#fff',
  	'& span': {
  		color: '#fff'
  	},
  },
  summary: {
  	paddingRight: '16px',
  	paddingLeft: '16px'
  },
  no: {color: 'rgb(100, 100, 100)'},
  some: {color: 'rgba(100, 100, 255, 0.8)'},
  moderate: {color: 'rgba(100, 255, 100, 0.8)'},
  high: {color: 'rgba(255, 100, 100, 0.8)'}
}));

function Legend() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary className={classes.summary}
          expandIcon={<span><ExpandMoreIcon /></span>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <div className={classes.no}>
          <Typography className={classes.heading}>No Activity (xx-xx mV)</Typography>
        </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Electrode Data Will Go Here
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary className={classes.summary}
          expandIcon={<span><ExpandMoreIcon /></span>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
        <div className={classes.some}>
          <Typography className={classes.heading}>Some Activity (xx-xx mV)</Typography>
        </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Electrode Data Will Go Here
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary className={classes.summary}
          expandIcon={<span><ExpandMoreIcon /></span>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
        <div className={classes.moderate}>
          <Typography className={classes.heading}>Moderate Activity (xx-xx mV)</Typography>
        </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Electrode Data Will Go Here
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary className={classes.summary}
          expandIcon={<span><ExpandMoreIcon /></span>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
        <div className={classes.high}>
          <Typography className={classes.heading}>High Activity (xx-xx mV)</Typography>
        </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Electrode Data Will Go Here
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Legend
