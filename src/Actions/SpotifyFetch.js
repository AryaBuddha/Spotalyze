import axios from 'axios';


export const getBasicInfo = async (token) => {


    const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    return res.data;

}

export const getTop = async (token, type, limit) => {

    const res = await axios.get(`https://api.spotify.com/v1/me/top/${type}?limit=${limit}&time_range=short_term`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    return res.data;

}