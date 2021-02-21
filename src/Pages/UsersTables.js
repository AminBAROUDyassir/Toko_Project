import React, { useState } from 'react'
import UserForm from './UserForm'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PageHeader from '../components/PageHeader';
import { Paper, makeStyles, TableRow, TableCell, TableBody, Table, TableContainer, TableHead } from '@material-ui/core';
import *  as userService from "../Services/userService";


const useStyles = makeStyles((theme) => ({
	pageContent: {
            padding:theme.spacing(3),
            margin: theme.spacing(5)
    }
}));

const HeadCells = [
    { id: 'fullName', label: 'Full Name' },
    { id: 'email', label: 'Email' },
    { id: 'gender', label: 'Gender' },
    { id: 'address', label: 'Address' },
    { id: 'age', label: 'Age' },
]

export default function UsersTables() {
    const classes = useStyles();
const [records, setRecords]=useState(userService.getAllUsers)

   const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
 return (
        <>
        <PageHeader title="Add New User" subtitle="Form design with Validation" icon={<PersonAddIcon fontSize="large"/>}/>
<Paper className={classes.pageContent}>
{/* <UserForm/> */}

<TableContainer>
<Table>
    <TableHead>
        <TableRow>
        {HeadCells.map(headcell => (<TableCell key={headcell.id}>{headcell.label}</TableCell>))}
        </TableRow>
    </TableHead>
    <TableBody>
{records.map(item => 
   (<TableRow key={item.id}>
       <TableCell>{item.Fname + " "+item.Lname}</TableCell>
       <TableCell>{item.email}</TableCell>
       <TableCell>{item.gender}</TableCell>
       <TableCell>{item.address}</TableCell>
       <TableCell>{getAge(item.birthday)}</TableCell>
   </TableRow>) )
}
</TableBody>
</Table>
</TableContainer>
</Paper>
</>
    )
}



