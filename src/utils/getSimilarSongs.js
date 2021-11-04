import axios from 'axios';
import Cookies from 'js-cookie';


const getSimilarSongs = async (artist_id)=>{
    
    try{
        console.log(Cookies.get('SPOTIFY_TOKEN'));
        const r = await axios.get(`https://api.spotify.com/v1/artists/${artist_id}/top-tracks?market=IN`,{
            headers:{
                'Authorization':`Bearer ${Cookies.get('SPOTIFY_TOKEN')}`
            }
        });

        return r.data;
    }
    catch(e){
        if(e.response && e.response.data){
            console.log(e.response.data)
        }
    }
}

export default getSimilarSongs;