import sidebar from '../components/SideBar';
import './App.css';
import SideBar from "../components/SideBar";
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import DashboardIcon from '@material-ui/icons/Dashboard';


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
      <PageHeader
      title="title"
      subtitle="subtitle"
      icon={<DashboardIcon/>}
      />
      </div>
      <CssBaseline/>
    </>
    
  );
}

export default App;
