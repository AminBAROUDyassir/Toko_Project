import React, { useContext } from 'react';
import {
	makeStyles,
	withStyles,
	List,
	ListItem,
	Divider,
	ListItemIcon,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Drawer,
	MenuItem
} from '@material-ui/core';
import logoMain from '../assets/logo.svg';
import logoUser from '../assets/logo.jpg';
import GridOnIcon from '@material-ui/icons/GridOn';
import Badge from '@material-ui/core/Badge';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';
import reactDom from 'react-dom';
import UserContext from './../components/userContext';


const useStyles = makeStyles((theme) =>({
	selected: {
		backgroundColor: "orange",
		color: "white",
		fontWeight: 600
	  },
sideBar: {
		color: 'white',
		position: 'fixed',
		left: '0px',
		top: '0px',
		width: '250px',
		height: '150vh',
		backgroundColor: '#263053',
		'& .MuiSvgIcon-root': {
			margin: '8px 10px 8px 10px'
		}
	}
}));
const StyledBadge = withStyles((theme) => ({
	badge: {
	  backgroundColor: '#44b700',
	  color: '#44b700',
	  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
	  '&::after': {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		borderRadius: '50%',
		animation: '$ripple 1.2s infinite ease-in-out',
		border: '1px solid currentColor',
		content: '""',
	  },
	},
	'@keyframes ripple': {
	  '0%': {
		transform: 'scale(.8)',
		opacity: 1,
	  },
	  '100%': {
		transform: 'scale(2.4)',
		opacity: 0,
	  },
	},
  }))(Badge);
export default function SideBar() {
	const classes = useStyles();
	const loginUser = useContext(UserContext);
	return (
		<div className={classes.sideBar}>
			<Divider />
			<List>
				<ListItem key="text">
					<ListItemAvatar>
						<Avatar alt="LogoMain" src={logoMain} />
					</ListItemAvatar>
					<ListItemText primary="CREATIVE TIM" />
				</ListItem>
			</List>
			<Divider />
			<List>
			<MenuItem  >
				{!loginUser ? <ListItem select="true" button key="text" component={Link} to="/login">
					<LockOutlinedIcon fontSize="large" />
					<ListItemText primary="Sign in" />
				</ListItem>:
				
				<ListItem button key="text" component={Link} to="/dashboard">
				<ListItemAvatar>
				<StyledBadge overlap="circle" anchorOrigin={{vertical: 'bottom',  horizontal: 'right',}} variant="dot">
               <Avatar alt="Remy Sharp" src={logoUser} /></StyledBadge>
				</ListItemAvatar>
				<ListItemText primary="John Smith" />	
				</ListItem>}
				</MenuItem>
			</List>
			<List>
				<MenuItem  >
				<ListItem button key="text" component={Link} to="/dashboard">
					<DashboardIcon fontSize="large" />
					<ListItemText primary="Dashboard" />
				</ListItem>
			</MenuItem>
			</List>
			<List>
			<MenuItem  selected={true} classeName={classes.selected}>
				<ListItem button key="text" component={Link} to="/users-tables">
					<GridOnIcon fontSize="large" />
					<ListItemText primary="Tables" />
				</ListItem>
				</MenuItem>
			</List>
		</div>
	);
}
