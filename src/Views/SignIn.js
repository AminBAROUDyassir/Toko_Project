import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router';

const apiEndPoint = 'http://localhost:4000/api/auth';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: 'url(img/wallpaper2-min.PNG)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		width: '100%',
		paddingTop: '40px'
	},
	paper: {
		margin: theme.spacing(8, 8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));
const data = {
	email: '',
	password: ''
};

export default function SignIn({ loggedIn, logout, login }) {
	const classes = useStyles();
	const [ values, setValues ] = useState(data);
	const [ errors, setErrors ] = useState({});
	const history = useHistory();

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const { data } = await axios.post(apiEndPoint, { email: values.email, password: values.password });
			localStorage.setItem('token', data);
			window.location = '/dashboard';
			// history.push('/dashboard');
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				setErrors(ex.response);
			}
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid container justify="center" className={classes.image}>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Grid className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<form className={classes.form} onSubmit={handleSubmit}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								onChange={handleInputChange}
								type="email"
								value={values.email}
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								inputProps={{ maxLength: 30 }}
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								onChange={handleInputChange}
								name="password"
								label="Password"
								type="password"
								value={values.password}
								id="password"
								error={errors.data}
								helperText={errors.data}
								autoComplete="current-password"
								inputProps={{ maxLength: 50 }}
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								fullWidth
								type="submit"
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Sign In
							</Button>
						</form>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
