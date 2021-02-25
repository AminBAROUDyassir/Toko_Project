import React from 'react';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
    Card,
    IconButton,
	CardContent,
	CardMedia,
	TextField,
	Paper,
	makeStyles,
	Button,
	Typography,
	CardActions,
    Container,
    Divider,
    Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		
        backgroundColor: theme.palette.background.paper,
        
        
	},
    card: {
        width: '100%',
        height:'160px',
        margin: theme.spacing(1),
        // display: 'flex',
        // flexDirection: 'column',
    },
    cardcontent:{
        opacity:'0.5',
        display: 'flex',
        
    
    },
    cardt:{
        
    },
    cardTitle:{
    margin: theme.spacing(1),
    opacity:'0.7',
    }
}));

export default function Cards({title, subtitle, status, iconHead, iconBot}) {
	const classes = useStyles();
	return (
        // className={classes.cardContent}
		<div >
				<Card className={classes.card}> 
                <Grid container style={{marginBottom:'15px', }} justify="space-between" >
                <Grid  item lg={3} sm={3}>{iconHead}</Grid >
                <Grid item  ><Typography  align="right" className={classes.cardTitle} variant="body1">{title}</Typography>
                <Typography   align="right" className={classes.cardTitle}  variant="h4">{subtitle}</Typography></Grid >
                </Grid>
                <Grid  item style={{}}  >
            <Divider variant="middle"/>
					<CardContent className={classes.cardcontent}>
                    <IconButton style={{position:'relative', bottom:'5px',}} size='small' aria-label="{status}">{iconBot}</IconButton>
						<Typography gutterBottom variant="subtitle2" component="h6">{status}</Typography>
					</CardContent>
					<CardActions />
                    </Grid>
				</Card>
		</div>
	);
}
