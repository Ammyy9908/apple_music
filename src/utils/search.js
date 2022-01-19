import axios from "axios"
import Cookies from "js-cookie";


const searchTrack = async (key)=>{
    try{
        const r= await axios.get(`https://api.spotify.com/v1/search?q=${key}&type=artist,track&market=IN`,{
            headers:{
                'Authorization':`Bearer ${Cookies.get('SPOTIFY_TOKEN')}`
            }
        });
        return r.data;
    }
    catch(e){
        return e;
    }
}

export default searchTrack