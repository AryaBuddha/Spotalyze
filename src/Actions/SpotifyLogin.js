import axios from "axios";


export const verifyToken = async (token) => {
    try {
        const res = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return true;
    } catch (err) {
        return false;
    }




}