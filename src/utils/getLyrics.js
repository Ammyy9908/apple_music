import axios from "axios";

const getLyrics = async (artist,song)=>{
    try{
        const r= await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
        return r.data;
    }

    catch(e){
        if(e.response && e.response.data){
            return e.response
        }
    }
}


export default getLyrics;