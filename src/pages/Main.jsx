import React from 'react'
import Body from '../components/Body'
import Sidebar from '../components/Sidebar'
import "./Main.css"
import Cookies from "js-cookie";
import {useLocation} from 'react-router-dom'
import LyricBar from '../components/LyricBar';
import getCurrentTrack from "../utils/current-track"
import { connect } from 'react-redux';
import { SetCurrentSong } from '../redux/actions/_appAction';
function Main({SetCurrentSong}) {

const [is_lyric,setLyricToggle] = React.useState(false);
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
      let query = useQuery();
     
      const token=  query.get('access_token')
      const refresh_token = query.get('refresh_token');
      if(token && refresh_token){
        Cookies.set('SPOTIFY_TOKEN',token);
        Cookies.set('REFRESH_TOKEN',refresh_token);
        window.location.href='/'
      }

      const [lyrics,setLyrics] = React.useState(null);


      // Set current playing song when this page renders

      React.useEffect(()=>{
        getCurrentTrack().then((current_track)=>{
            console.log(`Current playing track is `,current_track);
            SetCurrentSong(current_track)
        })
      },
      // eslint-disable-next-line
      [])
      

    return (
        <div className="main-screen">
            <Sidebar/>
            <Body setLyrics={setLyrics} setLyric={setLyricToggle} is_lyric={is_lyric}/>
            <LyricBar lyrics={lyrics} is_lyric={is_lyric}/>
        </div>
    )
}


const mapDispatchToProps = (dispatch)=>({
    SetCurrentSong:(currentSong)=>dispatch(SetCurrentSong(currentSong))
})

const mapStateToProps = (state)=>({
    recentPlayed:state.appReducer.recentPlayed,
    user:state.appReducer.user,
    isPlaying:state.appReducer.isPlaying,
    currentSong:state.appReducer.currentSong
})
export default connect(mapStateToProps,mapDispatchToProps)(Main)
