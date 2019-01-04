import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import InductsForDay from '../../InductsForTheDay';
import SortsForTheDay from '../../SortsForTheDay';
import InductsForlastHour from '../../InductsForlastHour';
import SortsForlastHour from '../../SortsForlastHour';
import './land.css'; 


const styles = theme => ({
  root: {
	  flexGrow: 1,
	  padding: '90px 20px 20px 15px',
	    overflowY: 'auto',
	    backgroundColor: theme.palette.background.default,
  },
  table: {
    minWidth: 400,
    border: '1px #E7EBE8',
  },
  row: {  
	  borderCollapse: '10px !important',
  },
});

let id = 0;
function createData(chute_num, full, disabled, duration, timestamp) {
  id += 1;
  return { id, chute_num, full, disabled, duration, timestamp };
}

const rows = [
  createData('234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
  createData('234', 'Y', 'N', '00.08', '2018/09/10 13:17:18'),
];

  const paper = {
		padding: '0px',
		height: 200
	};
	
function SimpleTable(props) {
  const { classes } = props;


  return (
  
  
  
    <Paper className={classes.root}>
	<Grid className="bread-crum">Unit Sorter Dashboard >> Sorter A >> Chute Status</Grid>
	<Grid container xs={12} sm={12} md={12} spacing={8}>
		<Grid xs={4} sm={4} md={4} spacing={8}>
			<Paper style={paper}>
				<InductsForDay />
			</Paper>
		</Grid>
		<Grid item xs={8} sm={8}  md={8} spacing={8}>
			<div className="chuteHeader">Chute Status </div>
			<Table className={classes.table}>
			<TableHead>
			  <TableRow className="crowH">
				<TableCell className="cheader">Chute No. </TableCell>
				<TableCell align="left" className="cheader">Full </TableCell>
				<TableCell align="left" className="cheader">Disabled </TableCell>
				<TableCell align="left" className="cheader">Duration </TableCell>
				<TableCell align="left" className="cheader">Timestamp </TableCell>
			  </TableRow>
			</TableHead>
			<TableBody>
			  {rows.map(row => {
				return (
				  <TableRow key={row.id} className="crowH">
					<TableCell component="th" scope="row" className="crow1">
					  {row.chute_num}
					</TableCell>
					<TableCell align="left" className="crow1">{row.full}</TableCell>
					<TableCell align="left" className="crow1">{row.disabled}</TableCell>
					<TableCell align="left" className="crow1">{row.duration}</TableCell>
					<TableCell align="left" className="crow1">{row.timestamp}</TableCell>
				  </TableRow>
				);
			  })}
			</TableBody>
			</Table>
		</Grid>
	</Grid>
    </Paper>
	
	
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);