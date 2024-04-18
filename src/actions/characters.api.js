import { URL_API_RICK_AND_MORTY } from "./url"

export const GetAllCharacters = async() =>{
    const response = await fetch(`${URL_API_RICK_AND_MORTY}/character`)
    const data = await response.json()
    return data
}

export const getCharacterId= async(id) =>{
    const response = await fetch(`${URL_API_RICK_AND_MORTY}/character/${id}`)
    const data = await response.json()
    return data
}