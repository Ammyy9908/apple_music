import axios from "axios"
import Cookies from "js-cookie"


const getNewToken = async ()=>{
    try{
        const r = await axios.post('http://localhost:5000/refresh_token',{
            refresh_token:Cookies.get('REFRESH_TOKEN')
        });

       return r.data;
    }
    catch(e){
        return e.message;
    }
}

export default getNewToken;