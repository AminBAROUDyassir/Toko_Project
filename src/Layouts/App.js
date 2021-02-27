import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import DashBoard from '../Views/DashBoard';
import SignIn from '../Views/SignIn';
import SideBar from '../components/SideBar';
import UsersTables from '../Views/UsersTables';
import Header from '../components/NavBar';
import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import UserContext from './../components/userContext';
import { getUser } from './../Services/userService';

axios.interceptors.response.use(null, (error) => {
	const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
	if (!expectedError) {
		console.log('Logging the error', error);
		// alert("An unexpected error occurred")
	}
	return Promise.reject(error);
});

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#333996',
			light: '#3c44b126'
		},
		secondary: {
			main: '#f83245',
			light: '#f8324526'
		},
		background: {
			default: '#f4f5fd'
		}
	},
	overrides: {
		MuiMenuItem: {
			root: {
				background: 'transparant',
				'&$selected': {
					// <-- mixing the two classes
					backgroundColor: 'orange'
				}
			}
		},
		MuiAppBar: {
			root: {
				transform: 'translateZ(0)'
			}
		}
	},
	props: {
		MuiIconButton: {
			disableRipple: true
		}
	}
});

const useStyles = makeStyles({
	appMain: {
		paddingLeft: '250px',
		overflow: 'hidden',
		height: '100%'
	}
});

function App() {
	const classes = useStyles();
	const [ user, setUser ] = useState(false);

	useEffect(() => {
		try {
			const jwt = localStorage.getItem('token');
			const { _id } = jwtDecode(jwt);
      
			getUser(_id).then(res => 
				setUser(res.data));
		} catch (error) {
      
			setUser(false);
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.appMain}>
				<UserContext.Provider value={{Fname: user.Fname, Lname: user.Lname}}>
					<SideBar />
					<Header />
					<Route path="/users-tables" exact component={UsersTables} />
					<Route path="/dashboard" exact component={DashBoard} />
					<Route path="/login" exact component={SignIn} />
				</UserContext.Provider>
			</div>
			<CssBaseline />
		</ThemeProvider>
	);
}

export default App;
