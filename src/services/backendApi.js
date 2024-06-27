import axios from "axios";

const baseURL = "http://localhost:3000/"

const API = axios.create({
    baseURL
})

const getPlayerGame = (gameName, tagLine) => {
    API.get(`getPlayerGame`, {params: {gameName, tagLine}}).then(response => console.log(response)).catch(response => console.log(error))
}

export {API, getPlayerGame}