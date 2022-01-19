
import './App.css';
import Main from './pages/Main';
import React,{useEffect} from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import getRecent from "./utils/recent-played"
import { connect } from 'react-redux';
import { SetDevices, SetNewReleases, SetRecent, SetRecommendation, SetUser } from './redux/actions/_appAction';
import getUser from "./utils/get-user"
import Profile from './pages/Profile';
import Cookies from 'js-cookie';
import getNewReleases from "./utils/new-releases"
import Browse from './pages/Browse';
import getDesktopData from './utils/getDesktopData';
import getSpotifyToken from "./utils/getAccessToken"
import getRecommendation from './utils/Recommendation';
import getGenres from './utils/getGenres';
import getTopArtists from './utils/user_top_artists';
import getTopTracks from './utils/user_top_tracks';
import getDevices from './utils/getDevices';
import searchTrack from './utils/search';


function App({SetRecent,SetUser,SetNewReleases,SetRecommendation,SetDevices}) {


useEffect(()=>{

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
      const items= newReleases&& newReleases.album && newReleases.album.items;
      SetNewReleases(items);
    })


    


    // get all devices

    getDevices().then((data)=>{
      console.log(`All active devices`,data);
      const {devices} = data;
      SetDevices(devices);
    })

    // get desktop data
    Cookies.get('SPOTIFY_TOKEN') && getSpotifyToken().then((data)=>{
      const {token} = data;
      console.log(`token`,token);
      return token;
    }).then((token)=>{
      getDesktopData(token).then((data)=>{
        console.log(`Desktop Data`,data);
      })

      let personalizations = {
        artist:null,
        genre:null,
        track:null
      }


      getGenres().then((data)=>{
        const {genres} = data;
        personalizations.genre = genres[Math.floor(Math.random()*(0,genres.length))];
        return false;
      }).then(()=>{
        getTopArtists().then((data)=>{
          console.log('Users to artists',data);
          const {items}=data;
          personalizations.artist = items.length>0 && items[Math.floor(Math.random()*(0,items.length))].id;
        }).then(()=>{
          getTopTracks().then((data)=>{
            console.log('User top tracks ',data);
    
            const {items} = data;
    
            personalizations.track = items.length>0 && items[Math.floor(Math.random()*(0,items.length))].id;

            
            getRecommendation(token,personalizations).then((recommendation)=>{
              console.log(`Recommendation`,recommendation);

              SetRecommendation(recommendation.tracks);
            })
          })
        })
      })
    })




    // Search a Track

    searchTrack('Ritviz').then((track)=>{
      console.log(`Search Track`,track);
    }).catch(e=>console.log(e))


    


    
    
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
  SetNewReleases:(new_releases)=>dispatch(SetNewReleases(new_releases)),
  SetRecommendation:(recommendations)=>dispatch(SetRecommendation(recommendations)),
  SetDevices:(devices)=>dispatch(SetDevices(devices))
 
  
})
export default connect(null,mapDispatchToProps)(App);
