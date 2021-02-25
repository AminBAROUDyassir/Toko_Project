import React from 'react';
import {
	makeStyles,
	List,
	ListItem,
	Divider,
	ListItemIcon,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Drawer,
	} from '@material-ui/core';
import logoMain from '../assets/logo.svg';
import logoUser from '../assets/logo.jpg';
import GridOnIcon from '@material-ui/icons/GridOn';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from 'react-router-dom';
import reactDom from 'react-dom';

const useStyles = makeStyles({
	sideBar: {
		color: 'white',
		position: 'fixed',
		left: '0px',
		top:'0px',
		width: '250px',
		height: "150vh",
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
				<ListItem  key="text">
					<ListItemAvatar>
						<Avatar alt="LogoMain" src={logoMain} />
					</ListItemAvatar>
					<ListItemText primary="CREATIVE TIM" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem select button key="text" component={Link} to="/login">
				<LockOutlinedIcon fontSize="large" />
						<ListItemText primary="Sign in" />	
				</ListItem>
				{/* <ListItem button key="text" component={Link} to="/login"> */}
	{/* <ListItemAvatar> */}
		{/* <Avatar alt="Remy Sharp" src={logoUser} /> */}
	{/* </ListItemAvatar> */}
		{/* <ListItemText primary="Sign in" />	 */}
{/* </ListItem> */}
			</List>
			<List>
				<ListItem button key="text" component={Link} to="/dashboard">
					<DashboardIcon fontSize="large" />
						<ListItemText primary="Dashboard" />
				</ListItem>
			</List>
			<List>
				<ListItem button key="text" component={Link} to="/users-tables">
					<GridOnIcon fontSize="large" />
						<ListItemText primary="Tables" />
				</ListItem>
			</List>
		</div>
	);
}
