import React from 'react'
import "./Sidebar.css"
import {AiOutlineSearch,AiOutlineClockCircle} from "react-icons/ai"
import {FaMusic,FaRegPlayCircle} from "react-icons/fa"
import {FiRadio} from "react-icons/fi"
import {GiMicrophone} from "react-icons/gi"
import {IoMdAlbums} from "react-icons/io"
import {FcMusic} from "react-icons/fc"
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-body">
                <div className="sidebar-search" tabIndex="0">
                    <AiOutlineSearch/>
                    <input type="text" name="search" id="search" placeholder="Search"/>
                </div>
                <ul className="apple_music_list">
                    <li>
                        <span>Apple Music</span></li>
                        <li>
                            <ul>
                                <Link to="/"><li className="active__option"><FaRegPlayCircle/><span>Listen Now</span></li></Link>
                                <Link to="/browse"><li><FaMusic/> <span>Browse</span></li></Link>
                                <Link to="/radio"><li><FiRadio/> <span>Radio</span></li></Link>
                            </ul>
                        </li>
                </ul>

                <ul className="apple_music_list">
                    <li>
                        <span>Library</span></li>
                        <li>
                            <ul>
                                <li><AiOutlineClockCircle/> <span>Recently Added</span></li>
                                <li><GiMicrophone/> <span>Artists</span></li>
                                <li><IoMdAlbums/> <span>Albums</span></li>
                                <li><FcMusic/> <span>Songs</span></li>
                            </ul>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
