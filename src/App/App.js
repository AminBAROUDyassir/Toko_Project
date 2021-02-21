import sidebar from '../components/SideBar';
import './App.css';
import SideBar from "../components/SideBar";
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../components/NavBar';


import UsersTables from '../Pages/UsersTables';


const useStyles = makeStyles({
  appMain:{
    paddingLeft: '250px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <>  
      <SideBar/>
      <div className={classes.appMain}>
      <Header/>
      <UsersTables/>
      </div>
      <CssBaseline/>
    </>
    
  );
}

export default App;
