import React from 'react'
import "./MusicCard.css"
import {FaPlay} from "react-icons/fa"
import {FiMoreHorizontal} from "react-icons/fi"
import {RiPauseMiniLine} from "react-icons/ri"
import { connect } from 'react-redux'
import getSimilarSongs from "../utils/getSimilarSongs"
import playSong from "../utils/play-song";
import getCurrentTrack from "../utils/current-track"
import { SetCurrentSong, SetFirstPlay, SetPlaying } from '../redux/actions/_appAction'
import pauseSong from "../utils/stop-play"
import resumeSong from '../utils/resume_song'
import playAlbum from '../utils/play_album'
function MusicCard({cover,name,artist,currentSong,id,isPlaying,artist_id,SetPlaying,SetCurrentSong,uri,is_played_first,SetFirstPlay,type}) {
    

 

    const handlePlay = ()=>{
        getSimilarSongs(artist_id).then((similar_songs)=>{
            

            let uris = similar_songs.tracks.map((song)=>song.uri);
            
            
            if(!is_played_first){
                playSong([uri,...uris]).then((feedback)=>{
                    if(feedback){
                        
                        getCurrentTrack().then((currentSong)=>{
                            console.log("Current Song=>",currentSong)
                            SetPlaying(true)
                            SetCurrentSong(currentSong)
                            SetFirstPlay(true);
                            
                          })
                    }
                })
            }
            else{
                resumeSong([uri,...uris]).then((feed)=>{
                    const {error} = feed;
                    if(!error){
                       
                       

                        getCurrentTrack().then((currentSong)=>{
                            SetPlaying(true)
                            SetCurrentSong(currentSong)
                            SetFirstPlay(true);
                            
                          })
                    }
                })
            }
        })
    }



    const handleAlbumPlay = ()=>{
        playAlbum(uri).then((feedback)=>{
            const {error} = feedback;

            if(!error){
                getCurrentTrack().then((currentSong)=>{
                    SetPlaying(true)
                    SetCurrentSong(currentSong)
                    SetFirstPlay(true);
                    
                  })
            }
        })
    }


    const handle_pause = ()=>{
        pauseSong().then((feedback)=>{
            if(feedback){
               
                SetPlaying(false);
            }
        })
    }
    return (
        <div className="music-card">
            <div className="music-card-body">
                <img src={cover} alt="" />
                <div className="music-card-body-controls">
               <button className="play_btn" onClick={currentSong && !currentSong.error && currentSong.item.id===id && isPlaying?handle_pause:type==="album"?handleAlbumPlay:handlePlay}>{currentSong && !currentSong.error && currentSong.item.id===id && isPlaying ?<RiPauseMiniLine/>:<FaPlay/>}</button>
                        <button className="more_btn"><FiMoreHorizontal/></button>
                </div>
            </div>
            <div className="music-card-footer">
                <span className="card-songname">{name}</span>
                {artist && <span className="card-song-artist">{artist}</span>}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    SetPlaying:(playing)=>dispatch(SetPlaying(playing)),
    SetCurrentSong:(currentSong)=>dispatch(SetCurrentSong(currentSong)),
    SetFirstPlay:(play_first)=>dispatch(SetFirstPlay(play_first))
})



const mapStateToProps = (state)=>({
    recentPlayed:state.appReducer.recentPlayed,
    user:state.appReducer.user,
    isPlaying:state.appReducer.isPlaying,
    currentSong:state.appReducer.currentSong
    ,
    is_played_first:state.appReducer.is_played_first
})


export default connect(mapStateToProps,mapDispatchToProps)(MusicCard)
