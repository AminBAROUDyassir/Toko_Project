import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
	Paper,
	makeStyles,
	Button,
	InputAdornment,
	FilledInput
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PageHeader from '../components/PageHeader';
import { LaptopWindows } from '@material-ui/icons';
import * as userService from '../Services/userService';

const initialFValues = {
	_id: 0,
	Fname: '',
	Lname: '',
	email: '',
	birthday: '',
	address: '',
	gender: 'male',
	experienceY: '',
};

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(4),
		'& .MuiFormControl-root': {
			width: '80%',
			margin: theme.spacing(2)
		}
	},
	label: {
		textTransform: 'none'
	}
}));

export default function UserForm(props) {

	const {addOrEdit, recordForEdit }= props;
	const validate = () => {
		let temp = {...errors};
		temp.Fname = values.Fname ? '' : 'This field is required.';
		temp.Lname = values.Lname ? '' : 'This field is required.';
		temp.email = values.email ? '' : 'Email is  required.';
		temp.birthday = values.birthday.length >= 10 ? '' : 'This field is required.';
		setErrors({ ...temp });
		return Object.values(temp).every((x) => x == ''); // if all validation elements are true it return true
	};
const resetForm = () => {
	setValues(initialFValues);
	setErrors({})
}
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {addOrEdit(values, resetForm);}
	};
	const [ values, setValues ] = useState(initialFValues);
	const [ errors, setErrors ] = useState({});

	const classes = useStyles();
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};
useEffect(() => {
	if (recordForEdit != null)
	setValues({...recordForEdit})}, [recordForEdit])


	return (
		<form className={classes.root} onSubmit={handleSubmit}>
			<Grid container>
				<Grid item xs={6}>
					<TextField
					
						variant="outlined"
						label="First Name"
						name="Fname"
						value={values.Fname}
						onChange={handleInputChange}
						error={errors.Fname}
						helperText={errors.Fname}
						inputProps={{maxLength :30}}
					/>
					<TextField
					
						variant="outlined"
						label="Last Name"
						name="Lname"
						value={values.Lname}
						onChange={handleInputChange}
						error={errors.Lname}
						helperText={errors.Lname}
						inputProps={{maxLength :30}}
					/>
					<TextField
					
						variant="outlined"
						label="Email"
						type="email"
						name="email"
						value={values.email}
						onChange={handleInputChange}
						error={errors.email}
						helperText={errors.email}
						inputProps={{maxLength :30}}
					/>
					<TextField
						variant="outlined"
						label="Address"
						name="address"
						value={values.address}
						onChange={handleInputChange}
						inputProps={{maxLength :150}}
					/>
				</Grid>
				<Grid item xs={6}>
					<FormControl>
						<FormLabel>Gender</FormLabel>
						<RadioGroup row name="gender" value={values.gender} onChange={handleInputChange}>
							<FormControlLabel value="male" control={<Radio />} label="Male" />
							<FormControlLabel value="female" control={<Radio />} label="Female" />
							<FormControlLabel value="other" control={<Radio />} label="Other" />
						</RadioGroup>
					</FormControl>
					<TextField
					
						variant="outlined"
						type="date"
						label="birthday"
						placeholder="birthdayy"
						name="birthday"
						value={values.birthday}
						InputLabelProps={{ shrink: true }}
						onChange={handleInputChange}
						error={errors.birthday}
						helperText={errors.birthday}
					/>
					<TextField
						variant="outlined"
						type="number"
						label="Experiences Years"
						name="experienceY"
						InputProps={{ endAdornment: <InputAdornment position="end">Years</InputAdornment>,}}
						value={values.experienceY}
						onChange={handleInputChange}
						onInput={(e)=>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)}}
					/>
					<div>
						<Button
							classes={{ root: classes.root, label: classes.label }}
							variant="contained"
							color="primary"
							size="large"
							type="submit"
						>
							Submit
						</Button>
					</div>
				</Grid>
			</Grid>
		</form>
	);
}
