import axios from "axios"
import Cookies from "js-cookie"


const playAlbum = async (uri)=>{
    try{
        const r = await axios.put(`https://api.spotify.com/v1/me/player/play`,{
            "context_uri": uri,
            "offset": {
              "position": 5
            },
            "position_ms": 0
          },
          {
              headers:{
                  'Authorization':`Bearer ${Cookies.get('SPOTIFY_TOKEN')}`
              }
          });

          return r.data;
    }
    catch(e){
        return e.message;
    }
}

export default playAlbum;