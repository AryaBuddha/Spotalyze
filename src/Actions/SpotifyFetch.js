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

export const getTrackRecommendations = async (token, seed_genres, seed_tracks, limit) => {



    console.log(seed_genres)
    console.log(seed_tracks);
    console.log(`https://api.spotify.com/v1/recommendations?seed_genres=${seed_genres}&seed_tracks=${seed_tracks}&limit=${limit}`)


    const res = await axios.get(`https://api.spotify.com/v1/recommendations?seed_genres=${seed_genres}&seed_tracks=${seed_tracks}&limit=${limit}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    return res.data;


}