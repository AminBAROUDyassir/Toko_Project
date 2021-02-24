import './App.css';
import {  Route, NavLink } from 'react-router-dom'
import DashBoard from '../Pages/DashBoard';
import SignIn from '../Pages/SignIn';
import SideBar from "../components/SideBar";
import UsersTables from '../Pages/UsersTables';
import Header from '../components/NavBar';
import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import axios from 'axios';

axios.interceptors.response.use(null, error  => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status <500
  if(!expectedError) {
    console.log("Logging the error", error);
    // alert("An unexpected error occurred")
  }
 return Promise.reject(error);
});


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
    
  }
})


function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
       <SideBar/>
      <Header/>
      <Route path="/users-tables" exact component={UsersTables} />
      <Route path="/dashboard" exact component={DashBoard} />
      <Route path="/login" exact component={SignIn} />
      </div>
      <CssBaseline/>
      </ThemeProvider>
  );
}

export default App;
