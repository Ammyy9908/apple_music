
import './App.css';
import Main from './pages/Main';
import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import getRecent from "./utils/recent-played"
import { connect } from 'react-redux';
import { SetRecent, SetUser } from './redux/actions/_appAction';
import getUser from "./utils/get-user"
function App({SetRecent,SetUser}) {

  

  React.useEffect(()=>{

    getRecent().then((recent)=>{
      console.log(recent)
      SetRecent(recent.items)
    })

    //retrieve user

    getUser().then((user)=>{
      console.log(user);
      SetUser(user)
    })
  },
  // eslint-disable-next-line
  [])
  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Main/>
    </Route>
   

       
          
          

   
   
  </Switch>
</div>
</Router>
  );
}

const mapDispatchToProps = (dispatch)=>({
  SetRecent:(recentPlayed)=>dispatch(SetRecent(recentPlayed)),
  SetUser:(user)=>dispatch(SetUser(user))
  
})
export default connect(null,mapDispatchToProps)(App);
