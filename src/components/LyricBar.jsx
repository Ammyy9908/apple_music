import React from 'react'
import "./LyricBar.css"
function LyricBar({lyrics,is_lyric}) {

    
   
    return (
        <div className={`lyrics-bar ${!lyrics && "flexed-lyrics"} ${is_lyric && "lyric_enable"}`}>
            {

                //if the lyrics found from internet show them
               
                lyrics && <p className="lyrics">{lyrics.replace("Paroles de la chanson","").replace("par","").split("\r\n").toString()}</p>
            }
            {

                //else display a null block
                
                lyrics===null && <div className="null-lyrics">
                <span className="no_lyric_title">No Lyrics found</span>
                <span className="no_lyric_subtitle">There aren't any lyrics available for this song.</span>
            </div>
            }
        </div>
    )
}

export default LyricBar
