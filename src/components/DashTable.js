import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import USA from '../assets/flags/Flag of United States.gif';
import India from '../assets/flags/Flag of India.gif';
import Brazil from '../assets/flags/Flag of Brazil.gif';
import kingdom from '../assets/flags/Flag of United Kingdom.gif';
import Russia from '../assets/flags/Flag of Russia.gif';
import France from '../assets/flags/Flag of France.gif';
import Spain from '../assets/flags/Flag of Spain.gif';
import Italy from '../assets/flags/Flag of Italy.gif';
import Turkey from '../assets/flags/Flag of Turkey.gif';
import Germany from '../assets/flags/Flag of Germany.gif';
import Colombia from '../assets/flags/Flag of Colombia.gif';
import Argentina from '../assets/flags/Flag of Argentina.gif';

const useStyles = makeStyles({
	table: {
        minWidth: '350px',
        maxWidth: '350px',
		marginLeft:'10px'
		
	}
});


function createData(name, cases, img) {
	return { name, cases, img };
}

const rows = [
	createData('United States', '28,330,141', USA),
	createData('India', '11,030,176', India),
	createData('Brazil', '10,324,463', Brazil),
	createData('United Kingdom', '4,156,703', kingdom),
	createData('Russia', '4,153,735', Russia),
	createData('France', '3,721,061', France),
	createData('Spain', '3,170,644', Spain),
	// createData('Italy', '2,848,564', Italy),
	// createData('Turkey', '2,665,194', Turkey),
	// createData('Germany', '2,416,037', Germany),
	// createData('Colombia', '2,237,542', Colombia),
	// createData('Argentina', '2,085,411', Argentina)
];

export default function DashTable() {
	const classes = useStyles();

	return (
		<TableContainer>
			<Table className={classes.table} aria-label="simple table">
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell>
								<img alt="" width="40px" src={row.img} />
							</TableCell>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.cases}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
