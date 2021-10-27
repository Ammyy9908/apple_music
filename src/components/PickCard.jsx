import React from 'react'
import {FaPlay} from "react-icons/fa"
import {FiMoreHorizontal} from "react-icons/fi"
import "./PickCard.css"
function PickCard({title,cover,name,artists,year,is_station}) {
    return (
        <div className="pick-card">
            <div className="card-title">{title}</div>
            <div className="card-body">
                <div className="card-top">
                    <div className="card-thumb">
                        <img src={cover.source} alt="" />
                    </div>

                    {is_station && <button className="play_btn_centered">
                    <FaPlay/>
                    </button>}
                    <div className="card_controls">
                        {is_station && <div></div>}
                        {!is_station && <button className="play_btn"><FaPlay/></button>}
                        <button className="more_btn"><FiMoreHorizontal/></button>
                    </div>
                </div>
                <div className="card-footer" style={{backgroundImage:`url(${cover.source})`}}>
                    <div className="card-footer-body">
                    {name && <span className="album_name">{name}</span>}
                    {artists && artists.length>0 && <span className="album_artist">{artists.map((artist)=>' '+artist)}</span>}
                    {year && <span className="album_year">{year}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickCard
