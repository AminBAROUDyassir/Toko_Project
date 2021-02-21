import React from 'react';
import {
	makeStyles,
	List,
	ListItem,
	Divider,
	ListItemIcon,
	ListItemText,
	ListItemAvatar,
	Avatar
} from '@material-ui/core';
import logoMain from '../logo.svg';
import logoUser from '../logo.jpg';
import GridOnIcon from '@material-ui/icons/GridOn';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles({
	sideBar: {
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		left: '0px',
		width: '250px',
		height: '100%',
		backgroundColor: '#253053',
		'& .MuiSvgIcon-root': {
			margin: '8px 10px 8px 10px'
		}
	}
});

export default function SideBar() {
	const classes = useStyles();

	return (
		<div className={classes.sideBar}>
			<Divider />
			<List>
				<ListItem button key="text">
					<ListItemAvatar>
						<Avatar alt="LogoMain" src={logoMain}/>
					</ListItemAvatar>

					<ListItemText primary="CREATIVE TIM" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button key="text">
					<ListItemAvatar>
						<Avatar alt="Remy Sharp" src={logoUser} />
					</ListItemAvatar>
					<ListItemText primary="Tokochi" />
				</ListItem>
			</List>
			<List>
				<ListItem button key="text">
					<DashboardIcon fontSize="large"/>
					<ListItemText primary="Dashboard" />
				</ListItem>
			</List>
			<List>
				<ListItem button key="text">
					<GridOnIcon fontSize="large"/>

					<ListItemText primary="Tables" />
				</ListItem>
			</List>
		</div>
	);
}
