import React from 'react'
import { connect } from 'react-redux';
import LyricBar from '../components/LyricBar';
import ProfileBody from '../components/ProfileBody'
import Sidebar from '../components/Sidebar'
import { SetCurrentSong } from '../redux/actions/_appAction';
import getCurrentTrack from "../utils/current-track"
import "./Profile.css"
function Profile({SetCurrentSong}) {
    const [is_lyric,setLyricToggle] = React.useState(false);
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
        <div className="profile-screen">
            <Sidebar/>
            <ProfileBody setLyrics={setLyrics} setLyric={setLyricToggle} is_lyric={is_lyric}/>
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
export default connect(mapStateToProps,mapDispatchToProps)(Profile)
