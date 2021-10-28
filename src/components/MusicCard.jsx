import React from 'react'
import "./MusicCard.css"
import {FaPlay} from "react-icons/fa"
import {FiMoreHorizontal} from "react-icons/fi"
function MusicCard({cover,name,artist}) {
    return (
        <div className="music-card">
            <div className="music-card-body">
                <img src={cover} alt="" />
                <div className="music-card-body-controls">
               <button className="play_btn"><FaPlay/></button>
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

export default MusicCard
