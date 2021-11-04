import React from 'react'
import Player from './Player'

function BrowseBody({recentPlayed,user,setLyrics,is_lyric,setLyric}) {
    return (
        <div>
            <Player setLyrics={setLyrics} setLyric={setLyric} is_lyric={is_lyric}/>
        </div>
    )
}

export default BrowseBody
