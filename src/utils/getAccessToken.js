import axios from "axios"


const getSpotifyToken = async ()=>{
    try{
        const r = await axios.get('https://spotifyserversumit.herokuapp.com/getToken');

       return r.data;
    }
    catch(e){
        return e.message;
    }
}

export default getSpotifyToken;