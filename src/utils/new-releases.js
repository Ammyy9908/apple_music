import axios from "axios"
import Cookies from "js-cookie"


const getNewReleases = async ()=>{
    try{
        const r = await axios.get(`https://api.spotify.com/v1/browse/new-releases?country=IN&limit=35`,{
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

export default getNewReleases;