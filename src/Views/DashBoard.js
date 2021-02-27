import React, {useEffect, useState} from 'react';
import Cards from '../components/Cards';
import Map from '../components/Map';
import DashTable from '../components/DashTable';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Grid,Paper,makeStyles,Button,InputAdornment,FilledInput, Typography} from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import ReplayIcon from '@material-ui/icons/Replay';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import MoodIcon from '@material-ui/icons/Mood';
import {getRecords} from '../Services/covidService';
import AnimatedNumber from 'react-animated-number';
let numeral = require('numeral');


const useStyles = makeStyles((theme) => ({
	root: {
        width: '95%',
		margin: theme.spacing(2)
	},
	icons: {
		fontSize: '60px',
		margin: theme.spacing(2),
		opacity: '0.8',
	},
    paper:{
        
        backgroundColor: '#fdfdff',
        margin: theme.spacing(1),
    },
	title:{
		margin:'15px',
		opacity: '0.8'
	}
}));

export default function DashBoard() {
	const classes = useStyles();
	const [globalRecords, setGlobalRecords]=useState(null)
	const [deathsRecords, setDeathsRecords]=useState(null)
	const [confirmedRecords, setConfirmedRecords]=useState(null)
	const [recovereddRecords, setRecoveredRecords]=useState(null)

	useEffect(() => {
		if (!globalRecords){
		getRecords().then(response => {
			setGlobalRecords(numeral(response.data[0].confirmed).format('0.0a').toString().toUpperCase())
			setDeathsRecords(numeral(response.data[0].deaths).format('0.0a').toString().toUpperCase())
			setConfirmedRecords(numeral(response.data[0].critical).format('0.0a').toString().toUpperCase())
			setRecoveredRecords(numeral(response.data[0].recovered).format('0.0a').toString().toUpperCase())})
		}
			
}, [globalRecords]);

	return (
		<div>
			<Grid container  spacing={2} justify="space-between" className={classes.root}>
				<Grid item  lg={3} sm={6}>
					<Cards
						title="Global Cases"
						subtitle={globalRecords}
						status="Update Now"
						iconHead={<PublicIcon color="primary" className={classes.icons} />}
						iconBot={<ReplayIcon  onClick={() => setGlobalRecords(null)}/>}
					/>
				</Grid>
				<Grid item   lg={3} sm={6}>
					<Cards
						title="Deaths"
						subtitle={deathsRecords}
						status="Update Now"
						iconHead={<AirlineSeatFlatIcon color="secondary" className={classes.icons} />}
						iconBot={<ReplayIcon  onClick={() => setGlobalRecords(null)}/>}
					/>
				</Grid>
				<Grid item  lg={3} sm={6}>
					<Cards
						title=" Confirmed "
						subtitle={confirmedRecords}
						status="Update Now"
						iconHead={<SentimentVeryDissatisfiedIcon className={classes.icons} />}
						iconBot={<ReplayIcon  onClick={() => setGlobalRecords(null)}/>}
					/>
				</Grid>
				<Grid item  lg={3} sm={6}>
					<Cards
						title="Recovered"
						subtitle={recovereddRecords}
						status="Update Now"
						iconHead={<MoodIcon style={{ color: 'green' }} className={classes.icons} />}
						iconBot={<ReplayIcon  onClick={() => setGlobalRecords(null)}/>}
					/>
				</Grid>
			</Grid>
            <Paper className={classes.paper}>
				
            <Grid container  spacing={0} justify="space-between">
            <Grid  item >
				<div className={classes.title}>
			<Typography  variant="h5">Covid-19 Stats by Country</Typography>
			<Typography variant="subtitle1">All confirmed cases </Typography>
			</div>
			<DashTable/></Grid>
            <Grid item lg={8} ><Map/></Grid>
            </Grid>
            </Paper>
		</div>
	);
}
