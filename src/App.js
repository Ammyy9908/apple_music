
import './App.css';
import Main from './pages/Main';
import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import getRecent from "./utils/recent-played"
import { connect } from 'react-redux';
import { SetNewReleases, SetRecent, SetUser } from './redux/actions/_appAction';
import getUser from "./utils/get-user"
import Profile from './pages/Profile';
import Cookies from 'js-cookie';
import getNewReleases from "./utils/new-releases"
import Browse from './pages/Browse';

function App({SetRecent,SetUser,SetNewReleases}) {

  

  React.useEffect(()=>{

    getRecent().then((recent)=>{
      
      SetRecent(recent.items)
    })

    //retrieve user

    Cookies.get('SPOTIFY_TOKEN') && getUser().then((user)=>{
      const {error} = user;
      
      if(error){
         window.location.href='http://localhost:5000/login'
      }
      else{
        SetUser(user)
      }
      
    });


    // get new Releases

    getNewReleases().then((newReleases)=>{
      const {error} = newReleases;

      if(error){
        return console.log(`There is error in getting new releases`);
      }
      const {items} = newReleases.albums;
      SetNewReleases(items);
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

    <Route exact path="/browse">
    <Browse/>
    </Route>
   

    <Route
           exact
            path="/user/:uid"
            render={(props) => {
              const uid = props.match.params.uid;
              return <Profile uid={uid && uid} />;
            }}
           
          />

       
          
          

   
   
  </Switch>
</div>
</Router>
  );
}

const mapDispatchToProps = (dispatch)=>({
  SetRecent:(recentPlayed)=>dispatch(SetRecent(recentPlayed)),
  SetUser:(user)=>dispatch(SetUser(user)),
  SetNewReleases:(new_releases)=>dispatch(SetNewReleases(new_releases))
 
  
})
export default connect(null,mapDispatchToProps)(App);
