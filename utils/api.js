import { API_URL, STRAPI_API_TOKEN } from "./urls.js"


export const fetchDataFromApi = async (endpoint) => {
    const option = {
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + STRAPI_API_TOKEN
        }
    }

    const res = await fetch(`${API_URL}${endpoint}`, option)
    const data = await res.json()

    return data
}