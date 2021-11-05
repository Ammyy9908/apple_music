import axios from "axios"
import Cookies from "js-cookie"

const getTopTracks = async ()=>{
    try{
        const r = await axios.get('https://api.spotify.com/v1/me/top/tracks',{
            headers:{
                'Authorization':'Bearer '+Cookies.get('SPOTIFY_TOKEN')
            }
        });
        return r.data;
    }

    catch(e){
        return e.message;
    }
}

export default getTopTracks;