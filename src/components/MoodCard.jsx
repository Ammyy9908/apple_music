import React from 'react'
import "./MoodCard.css"
function MoodCard({cover,artists}) {
    return (
        <div className="mood-card">
            <div className="mood-card-body">
                <div className="mood-card-thumb">
                    <img src={cover} alt="" />
                </div>
                
            </div>
            <div className="mood-card-footer" style={{backgroundImage:`url(${cover})`}}>
                <div className="mood-card-footer-body">
                <span>{artists.map((artist)=>''+artist)}</span>
                </div>
            </div>
        </div>
    )
}

export default MoodCard
