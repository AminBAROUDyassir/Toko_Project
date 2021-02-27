import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	warp: {
		
		overflow: 'hidden'
	},
	frame: {
		width: '700px',
		minWidth: '300px',
		height: '650px',
		 border: '0px none' ,
		 marginLeft: '50px',
		 marginTop: '-140px',
		
	},
});



export default function Map() {
	const classes = useStyles();
	return (
		<div className={classes.warp}>
			<iframe
			className={classes.frame}
				src="https://public.domo.com/cards/bWxVg"
				title="Covid-19-map"
				scrolling="no"
			/>
		</div>
	);
}
