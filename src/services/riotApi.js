import axios from "axios";

const baseURL = "https://euw1.api.riotgames.com/lol/"
const apiKey = "RGAPI-ee614323-fa97-4649-abfb-8e0e78eaa2aa"

const API = axios.create({
    baseURL
})

const getPuuid = (gameName, tagLine) => {
    API.get(`/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${apiKey}`, {api_key: apiKey}).then(response => console.log(response))
}

export {API, getPuuid}