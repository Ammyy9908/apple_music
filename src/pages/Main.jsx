import React from 'react'
import Body from '../components/Body'
import Sidebar from '../components/Sidebar'
import "./Main.css"
import Cookies from "js-cookie";
import {useLocation} from 'react-router-dom'
function Main() {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
      let query = useQuery();
     
      const token=  query.get('access_token')
      if(token){
        Cookies.set('SPOTIFY_TOKEN',token);
        window.location.href='/'
      }
      
      
    return (
        <div className="main-screen">
            <Sidebar/>
            <Body/>
        </div>
    )
}

export default Main
