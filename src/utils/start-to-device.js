import axios from "axios"

import Cookies from "js-cookie"


const startDevice = async (device_id)=>{
    try{
        const r = await axios.put(`https://api.spotify.com/v1/me/player`,{
            device_ids: [
              device_id
            ]
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

export default startDevice;