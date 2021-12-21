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


    const res = await axios.get(`https://api.spotify.com/v1/recommendations?seed_genres=${seed_genres}&seed_tracks=${seed_tracks}&limit=${limit}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    return res.data;


}

export const getArtistRecommendations = async (token, seed_artist) => {

    const res = await axios.get(`https://api.spotify.com/v1/artists/${seed_artist}/related-artists`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    return res.data;

}