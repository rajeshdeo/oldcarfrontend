import axios from "axios"

const baseURL = process.env.REACT_APP_BASE_URL;
console.log(baseURL)
export const registerapi = (payload)=>{
    return axios.post(`${baseURL}/dealer/register`,payload)
}
export const loginapi = (payload)=>{
    return axios.post(`${baseURL}/dealer/login`,payload)
}