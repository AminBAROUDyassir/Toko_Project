import React, { useState } from 'react'
import UserForm from './UserForm'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PageHeader from '../components/PageHeader';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { Paper, makeStyles, TableRow, TableCell, TableBody, InputAdornment, Table, TableContainer, TableHead, TablePagination, TableSortLabel, Toolbar, TextField, Button } from '@material-ui/core';
import *  as userService from "../Services/userService";
import Popup from "../components/Popup"


const useStyles = makeStyles((theme) => ({
	pageContent: {
            padding:theme.spacing(3),
            margin: theme.spacing(5)
    },
    searchInput:{
        width:'30%',
        opacity:'0.7',
        fontSize:'0.9rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'},
            '& .MuiSvgIcon-root':{
                marginRight:'8px'
            },
        },
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: '#32353B',
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
    newButton : {
        position:'absolute',
        right: '10px',
        textTransform: 'none',
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
const [filterFn, setFilterFn]=useState({fn: items => {return items;}})
const [openPopup, setOpenPopup] = useState(false)
const getAge = birthDate => 
Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
const pages =[5, 10, 25]
const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
const [order, setOrder]= useState();
const [orderBy, setOrderBy]= useState();
const handlechangePage = (event, newPage) => {setPage(newPage)}
const handleChangeRowsPerPage = event =>{
    setRowsPerPage(parseInt(event.target.value, 10))
   setPage(0);
}
const handleSearch = e =>{
    let target = e.target;
    setFilterFn({
        fn: items => {
            if (target.value == "")
            return items;
            else
            return items.filter(x => x.Fname.toLowerCase().includes(target.value))
        }
    })

}

//***sorting functions from material-ui.com****//
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
 return 0;
}
const recordsAfterPaging = () => {
    return stableSort(filterFn.fn(records), getComparator(order, orderBy)).slice(page*rowsPerPage, (page+1)*rowsPerPage);
}
    const  handleSortRequest  = (cellId) => {
        const isAsc = orderBy === cellId && order === "asc";
        setOrder(isAsc?'desc':'asc');
        setOrderBy(cellId)
    }

    return (
            <>
             <PageHeader 
                title="Add New User" 
                subtitle="Form design with Validation" 
                icon={<PersonAddIcon 
                fontSize="large"/>}/>
            <Paper className={classes.pageContent}>

    <Toolbar>
        <TextField
        className={classes.searchInput}
        variant="outlined"
        label="Search Users"
        onChange={handleSearch}
        InputProps={{
            endAdornment: (
              <InputAdornment >
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button 
        className={classes.newButton}
        size="large"
        color="primary"
        variant="outlined"
        onClick={() => setOpenPopup(true)}
        startIcon = {<AddIcon/>}>Add New</Button>
    </Toolbar>
    <TableContainer>
        <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                     {HeadCells.map(headcell => (
                     <TableCell key={headcell.id}
                     sortDirection={orderBy === headcell.id ?order:false}>
                         <TableSortLabel 
                         active={orderBy === headcell.id}
                         direction={orderBy === headcell.id ? order : 'asc' }
                            onClick = { () => {handleSortRequest(headcell.id)}}>
                        {headcell.label}
                     </TableSortLabel>
                        </TableCell>))}
                    </TableRow>
                </TableHead>
             <TableBody>
                {recordsAfterPaging().map(item => 
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
            <TablePagination 
                  component = "div" 
                  rowsPerPageOptions  ={pages} 
                  page = {page} 
                  rowsPerPage = {rowsPerPage} 
                  count= {records.length}
                  onChangePage={handlechangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}/>
    </TableContainer>
</Paper>
<Popup
    title = "User Form"
    openPopup = {openPopup}
    setOpenPopup = {setOpenPopup}>
    <UserForm/></Popup>
</>
    )
}



