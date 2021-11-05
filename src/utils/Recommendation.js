import axios from "axios";

const getRecommendation = async (token,personalizations)=>{
    try{
        const r = await axios.get(`https://api.spotify.com/v1/recommendations?market=IN&seed_artists=${personalizations.artist}&seed_genres=${personalizations.genre}&seed_tracks=${personalizations.track}&limit=35`,{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })

        return r.data;
    }

    catch(e){
        return e.message;
    }
}

export default getRecommendation;