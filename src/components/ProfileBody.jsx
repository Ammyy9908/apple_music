import React from 'react'
import Container from './Container'
import Player from './Player'
import "./ProfileBody.css"
import {MdKeyboardArrowLeft} from "react-icons/md"
import {FiMoreHorizontal} from "react-icons/fi"
import { connect } from 'react-redux'
import MusicCard from './MusicCard'
import { Link } from 'react-router-dom'
function ProfileBody({recentPlayed,user,setLyrics,is_lyric,setLyric}) {
  
    return (
        <div className="profile_body">
             <Player setLyrics={setLyrics} setLyric={setLyric} is_lyric={is_lyric}/>
             
                 <div className="profile-body-header">
                     <Link to="/"><button>
                        <MdKeyboardArrowLeft/>
                     </button></Link>
                 </div>

                 <div className="profile_cover">
                     <div className="profile__avatar">
                            {user && !user.error && <div className="user_profile_avatar">
                            <img src={user.images[0].url} alt="" />
                            </div>}
                     </div>
                     <div className="profile_cover_footer">
                         <div className="profile_meta">
                             <h3>{user && user.display_name}</h3>
                             <span className="username">@{user && user.email}</span>
                         </div>
                         <div className="profile_controls">
                             <button className="profile_edit">Edit</button>
                             <button className="profile_more"><FiMoreHorizontal/></button>
                         </div>
                     </div>
                 </div>

                 <div className="user_listening_to_section">
                     <Container>
                     <h3>Listening To</h3>
                     <div className="recent-play-cards">
                          
                           {
                                recentPlayed && recentPlayed.filter((v,i,a)=>a.findIndex(t=>(t.track.id === v.track.id))===i).map((recent)=><MusicCard key={recent.track.id} cover={recent.track.album.images[0].url} artist={recent.track.album.artists[0].name} name={recent.track.name} id={recent.track.id} artist_id={recent.track.album.artists[0].id} uri={recent.track.uri}/>)
                           }
                       </div>
                     </Container>
                 </div>
             
        </div>
    )
}

const mapStateToProps = (state)=>({
    recentPlayed:state.appReducer.recentPlayed,
    user:state.appReducer.user
})
export default connect(mapStateToProps,null)(ProfileBody)
