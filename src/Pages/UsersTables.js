import React from 'react'
import UserForm from './UserForm'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PageHeader from '../components/PageHeader';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	pageContent: {
            padding:theme.spacing(3),
            margin: theme.spacing(5)
    }
}));

export default function UsersTables() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <PageHeader title="Add New User" 
subtitle="Form design with Validation" 
icon={<PersonAddIcon fontSize="large"/>}/>
<Paper className={classes.pageContent}>
<UserForm/>
</Paper>
</React.Fragment>
    )
}



