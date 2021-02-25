import React from 'react';
import Cards from '../components/Cards';
import Map from '../components/Map';
import DashTable from '../components/DashTable';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import {FormControl,FormControlLabel,FormLabel,Grid,Radio,RadioGroup,TextField,Paper,makeStyles,Button,InputAdornment,FilledInput} from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import MoodIcon from '@material-ui/icons/Mood';

const useStyles = makeStyles((theme) => ({
	root: {
        width: '92%',
		margin: theme.spacing(2)
	},
	icons: {
		fontSize: '60px',
		margin: theme.spacing(2),
		opacity: '0.8',
	},
    paper:{
        
        backgroundColor: '#fdfdff',
        margin: theme.spacing(2),
    }
}));

export default function DashBoard() {
	const classes = useStyles();
	return (
		<div>
			<Grid container spacing={2} justify="space-evenly" className={classes.root}>
				<Grid item  lg={3} sm={6}>
					<Cards
						title="Global Cases"
						subtitle="+ 112M"
						status="Update Now"
						iconHead={<PublicIcon color="primary" className={classes.icons} />}
						iconBot={<ReplayIcon fontSize="large" />}
					/>
				</Grid>
				<Grid item  lg={3} sm={6}>
					<Cards
						title="Deaths"
						subtitle="+ 2,4M"
						status="Update Now"
						iconHead={<AirlineSeatFlatIcon color="secondary" className={classes.icons} />}
						iconBot={<ReplayIcon fontSize="large" />}
					/>
				</Grid>
				<Grid item  lg={3} sm={6}>
					<Cards
						title=" Confirmed "
						subtitle="+85M"
						status="Update Now"
						iconHead={<SentimentVeryDissatisfiedIcon className={classes.icons} />}
						iconBot={<ReplayIcon fontSize="large" />}
					/>
				</Grid>
				<Grid item  lg={3} sm={6}>
					<Cards
						title="Recovered"
						subtitle="+21M"
						status="Update Now"
						iconHead={<MoodIcon style={{ color: 'green' }} className={classes.icons} />}
						iconBot={<ReplayIcon fontSize="large" />}
					/>
				</Grid>
			</Grid>
            <Paper className={classes.paper}>
            <Grid container  spacing={0} justify="space-between">
            <Grid item ><DashTable/></Grid>
            <Grid item lg={8}><Map/></Grid>
            </Grid>
            </Paper>
		</div>
	);
}
