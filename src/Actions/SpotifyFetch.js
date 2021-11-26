import axios from 'axios';


export const getBasicInfo = async (token) => {


    const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    console.log(res.data)
    return res.data;

}