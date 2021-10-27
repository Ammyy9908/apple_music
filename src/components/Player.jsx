import React from 'react'
import "./Player.css"
import {FaPlay,FaQuoteLeft} from "react-icons/fa"
import {MdOutlineSkipPrevious,MdSkipNext} from "react-icons/md"
import {FiRepeat} from "react-icons/fi"
import {BiShuffle} from "react-icons/bi"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {GiPauseButton} from "react-icons/gi"


function PlayerButton({Icon,clickhandle}){
    return (
        <button className="player-btn" onClick={clickhandle && clickhandle}>
            <Icon/>
        </button>
    )
}
function Player() {

    const [isPlayed,setPlayed] = React.useState(false);

    const handle_play = ()=>{
        setPlayed(!isPlayed);
    }


    return (
        <div className="player">
            <div className="player-left">
                <PlayerButton Icon={BiShuffle} clickhandle={null}/>
                <PlayerButton Icon={MdOutlineSkipPrevious} clickhandle={null}/>
                <PlayerButton Icon={!isPlayed?FaPlay:GiPauseButton} clickhandle={handle_play}/>
                <PlayerButton Icon={MdSkipNext} clickhandle={null}/>
                
                <PlayerButton Icon={FiRepeat} clickhandle={null}/>
            </div>
            <div className="player-meta">
                <div className="player-song-thumb">
                    <img src="https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/f6/a1/ff/f6a1fff8-83b9-bfc0-1f91-c9fced8f28a3/cover.jpg/160x160bb.webp" alt="" />
                </div>
                <div className="player-meta-text">
                    <span className="song_name">Chan Vekhya</span>
                    <span className="song_album">Harnoor -- Chan Vekhya -Single</span>
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

export default Player
