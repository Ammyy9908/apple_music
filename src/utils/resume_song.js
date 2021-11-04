import axios from "axios"

import Cookies from "js-cookie"


const resumeSong = async (tracks=null)=>{
    try{
        const r = await axios.put(`https://api.spotify.com/v1/me/player/play`,{
            "uris": tracks &&tracks,
            
          },{
            headers:{
                'Authorization':`Bearer ${Cookies.get('SPOTIFY_TOKEN')}`
            }
        })
        return r.data;
    }

    catch(e){
        return e.message;
    }
}

export default resumeSong;