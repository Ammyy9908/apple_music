import axios from "axios";
import Cookies from "js-cookie"


const pauseSong = async ()=>{
    try{
        const r = await axios.put(`https://api.spotify.com/v1/me/player/pause?device_id=${Cookies.get('DEVICE_ID')}`,{

        },{
            headers:{
                'Authorization':`Bearer ${Cookies.get('SPOTIFY_TOKEN')}`
            }
        })

        return r;
    }
    catch(e){
        if(e.response && e.response.data){
            return e.response.data;
        }
    }

}

export default pauseSong;