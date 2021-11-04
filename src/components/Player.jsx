import React from 'react'
import "./Player.css"
import {FaPlay,FaQuoteLeft} from "react-icons/fa"
import {MdOutlineSkipPrevious,MdSkipNext} from "react-icons/md"
import {FiRepeat} from "react-icons/fi"
import {BiShuffle} from "react-icons/bi"
import {GiPauseButton} from "react-icons/gi"
import playSong from "../utils/play-song"
import pauseSong from "../utils/stop-play"
import playNext from "../utils/play-next"
import playPrev from "../utils/play-prev"
import { connect } from 'react-redux'
import getLyrics from '../utils/getLyrics'
import axios from 'axios'
import Cookies from 'js-cookie'
import { SetCurrentSong, SetFirstPlay, SetPlaying } from '../redux/actions/_appAction'
import getCurrentTrack from "../utils/current-track"
import resumeSong from "../utils/resume_song"

function PlayerButton({Icon,clickhandle}){
    return (
        <button className="player-btn" onClick={clickhandle && clickhandle}>
            <Icon/>
        </button>
    )
}
function Player({recentPlayed,setLyrics,is_lyric,setLyric,SetPlaying,isPlaying,SetCurrentSong,currentSong,SetFirstPlay,is_played_first}) {

    
    
    const tracks = recentPlayed && recentPlayed.filter((v,i,a)=>a.findIndex(t=>(t.track.id === v.track.id))===i).map((recent)=>recent.track.uri);
    

   

    const handle_play = ()=>{

        // get current track

    

        if(!is_played_first)
        {
            playSong(tracks).then(()=>{
           
            SetPlaying(true);
            getCurrentTrack().then((currentSong)=>{
                
                SetCurrentSong(currentSong)
              })

              SetFirstPlay(true);

        }).catch((e)=>{
            console.log(e.message);
        })}
        else{
            resumeSong().then((feed)=>{
                const {error} = feed;
                if(!error){
                    getCurrentTrack().then((currentSong)=>{
                        
                        
                        SetPlaying(true);
                        SetCurrentSong(currentSong)
                        SetFirstPlay(true);
                        
                      })
                }
            })
        }
       
    }
    

    const handle_pause = ()=>{
        pauseSong().then((feedback)=>{
            if(feedback){
              
                SetPlaying(false);
            }
        })
    }

    const handleNext = ()=>{
       
        playNext().then((feedback)=>{
            if(feedback){
                getCurrentTrack().then((currentSong)=>{
                    
                    SetCurrentSong(currentSong)
                  })
            }
        })
    }

    const handlePrev = ()=>{
        
        playPrev().then((feedback)=>{
            if(feedback){
                getCurrentTrack().then((currentSong)=>{
                    SetCurrentSong(currentSong)
                  })
            }
        })
    }


    const getCurrentSong = async ()=>{
        try{
            const r = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing`,{
                headers:{
                    'Authorization':`Bearer ${Cookies.get('SPOTIFY_TOKEN')}`
                }
            })

            return r.data;
        }

        catch(e){
            if(e.response && e.response.data){
                return e.response.data;
            }
        }
    }
    const handleGetLyrics = ()=>{
        setLyric(!is_lyric)
        getCurrentSong().then((current_track)=>{
            
            if(current_track){
                const {artists} = current_track.item;
            const track = current_track.item.name
            getLyrics(artists[0].name,track).then((lyrics)=>{
               
                if(lyrics.status===404){
                    setLyrics(null);
                }
                else{
                    setLyrics(lyrics.lyrics)
                }
            })
            }
        })
       
    }


    return (
        <div className="player">
            <div className="player-left">
                <PlayerButton Icon={BiShuffle} clickhandle={null}/>
                <PlayerButton Icon={MdOutlineSkipPrevious} clickhandle={handlePrev}/>
                <PlayerButton Icon={!isPlaying?FaPlay:GiPauseButton} clickhandle={!isPlaying?handle_play:handle_pause}/>
                <PlayerButton Icon={MdSkipNext} clickhandle={handleNext}/>
                
                <PlayerButton Icon={FiRepeat} clickhandle={null}/>
            </div>
            <div className="player-meta">
                <div className="player-song-thumb">
                    <img src={currentSong && !currentSong.error && currentSong.item ? currentSong.item.album.images[0].url:'https://music.apple.com/assets/product/MissingArtworkMusic.svg'} alt="" className="current_song_thumb"/>
                </div>
                <div className="player__left">
                {currentSong && !currentSong.error && <div className="player-meta-text">
                    <span className="song_name">{currentSong && !currentSong.error  && currentSong.item.name}</span>
                    <span className="song_album">{currentSong && !currentSong.error   && currentSong.item.artists[0].name} -- {currentSong && currentSong.item.name}</span>
                    
                </div>}
               
                </div>

            </div>
            <div className="player-right">
                <div className="song-volume-controller">

                </div>

                <PlayerButton Icon={FaQuoteLeft} clickhandle={handleGetLyrics}/>
               

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
    currentSong:state.appReducer.currentSong,
    is_played_first:state.appReducer.is_played_first
})
export default connect(mapStateToProps,mapDispatchToProps)(Player)
