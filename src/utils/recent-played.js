import axios from "axios"
import Cookies from "js-cookie"

const getRecent = async ()=>{
    try{
        const r = await axios.get(`https://api.spotify.com/v1/me/player/recently-played`,{
            headers:{
                'Authorization':`Bearer ${Cookies.get('SPOTIFY_TOKEN')}`
            }
        })
        return r.data;
    }
    catch(e){
        if(e.response && e.response.data){
            return e.response.data;
        }
    }
}

export default getRecent;