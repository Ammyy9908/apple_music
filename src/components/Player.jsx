import React from 'react'
import "./Player.css"
import {FaPlay,FaQuoteLeft} from "react-icons/fa"
import {MdOutlineSkipPrevious,MdSkipNext} from "react-icons/md"
import {FiRepeat} from "react-icons/fi"
import {BiShuffle} from "react-icons/bi"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {GiPauseButton} from "react-icons/gi"
import playSong from "../utils/play-song"
import pauseSong from "../utils/stop-play"
import playNext from "../utils/play-next"
import playPrev from "../utils/play-prev"
import { connect } from 'react-redux'

function PlayerButton({Icon,clickhandle}){
    return (
        <button className="player-btn" onClick={clickhandle && clickhandle}>
            <Icon/>
        </button>
    )
}
function Player({recentPlayed}) {

    console.log(recentPlayed)
    const [isPlayed,setPlayed] = React.useState(false);
    const tracks = recentPlayed && recentPlayed.filter((v,i,a)=>a.findIndex(t=>(t.track.id === v.track.id))===i).map((recent)=>recent.track.uri);

    console.log("Recent tracks",tracks);

    const handle_play = ()=>{

        playSong(tracks).then((isplay)=>{
            setPlayed(true);
        }).catch((e)=>{
            console.log(e.message);
        })
       
    }

    const handle_pause = ()=>{
        pauseSong().then((feedback)=>{
            if(feedback){
                setPlayed(false);
            }
        })
    }

    const handleNext = ()=>{
        playNext().then((feedback)=>{
            if(feedback){
                console.log('Next song played!');
            }
        })
    }

    const handlePrev = ()=>{
        console.log('Prev button clicked!');
        playPrev().then((feedback)=>{
            if(feedback){
                console.log('Previous song played!');
            }
        })
    }


    return (
        <div className="player">
            <div className="player-left">
                <PlayerButton Icon={BiShuffle} clickhandle={null}/>
                <PlayerButton Icon={MdOutlineSkipPrevious} clickhandle={handlePrev}/>
                <PlayerButton Icon={!isPlayed?FaPlay:GiPauseButton} clickhandle={!isPlayed?handle_play:handle_pause}/>
                <PlayerButton Icon={MdSkipNext} clickhandle={handleNext}/>
                
                <PlayerButton Icon={FiRepeat} clickhandle={null}/>
            </div>
            <div className="player-meta">
                <div className="player-song-thumb">
                    <img src={recentPlayed && recentPlayed[0].track.album.images[0].url} alt="" className="current_song_thumb"/>
                </div>
                <div className="player-meta-text">
                    <span className="song_name">{recentPlayed && recentPlayed[0].track.name}</span>
                    <span className="song_album">{recentPlayed && recentPlayed[0].track.artists[0].name} -- {recentPlayed && recentPlayed[0].track.name}</span>
                </div>
            </div>
            <div className="player-right">
                <div className="song-volume-controller">

                </div>

                <PlayerButton Icon={FaQuoteLeft} clickhandle={null}/>
                <PlayerButton Icon={AiOutlineUnorderedList} clickhandle={null}/>

            </div>
        </div>
    )
}


const mapStateToProps = (state)=>({
    recentPlayed:state.appReducer.recentPlayed,
    user:state.appReducer.user
})
export default connect(mapStateToProps,null)(Player)
