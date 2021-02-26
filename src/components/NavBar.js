import React, {useContext} from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar, makeStyles } from '@material-ui/core';
import UserContext from './../components/userContext';


const useStyles = makeStyles( {
    root: {
		Width:'100vh',
        backgroundColor: 'white',
		transform: 'translateZ(0)'
    },
    searchInput:{
        opacity:'0.8',
        padding:'0px 8px',
        fontSize:'0.9rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'},
            '& .MuiSvgIcon-root':{
                marginRight:'8px'  
            }
        }
})

export default function Header() {
	const loginUser = useContext(UserContext);
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
					{loginUser ?<IconButton>
									<PowerSettingsNewIcon />
							</IconButton>:null}
							<IconButton>
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
