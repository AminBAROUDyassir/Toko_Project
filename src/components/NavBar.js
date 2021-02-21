import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar, makeStyles } from '@material-ui/core';


const useStyles = makeStyles( {
    root: {
        backgroundColor: 'white',
		transform: 'translateZ(0)'
    },
    searchInput:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'},
            '& .MuiSvgIcon-root':{
                marginRight:'8px'  
            }
        }
})

export default function Header() {

    const classes = useStyles();
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<Grid container alignItems="center">
					<Grid item>
						<InputBase 
                        placeholder="search"
                        className={classes.searchInput}
                        startAdornment={ <SearchIcon fontSize="small"/>}/>
					</Grid>
                    <Grid item sm></Grid>
					<Grid item>
						<IconButton>
							<IconButton>
								<Badge>
									<PowerSettingsNewIcon />
								</Badge>
							</IconButton>

							<Badge badgeContent={4} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton>
							<FormatListBulletedIcon />
							<Badge />
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}
