import axios from "axios";

const baseURL = "http://localhost:3000/"

const API = axios.create({
    baseURL
})

const processAnswer =  (response) => {
    console.log(response)
    if (response.data) {
        return { data: response.data }
    }
    return {data: []}
}

const getPlayerGame = async (gameName, tagLine) => {
    const playerInfo = API.get(`getPlayerGame`, {params: {gameName, tagLine}})
        .then( (response) => {return  processAnswer(response)} )
        .catch(response => {
            console.log(response); 
            return { data: [], errorMessage: "couldnt find game or whatever"}
        })
    return playerInfo
}

export {API, getPlayerGame}