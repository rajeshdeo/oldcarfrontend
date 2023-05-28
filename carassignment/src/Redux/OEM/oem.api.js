import axios from "axios"
let baseURL = process.env.REACT_APP_BASE_URL;
export const getapi = ({search})=>{
    console.log('search:', search)
    if(search!=""){
        return axios.get(`${baseURL}/OEM/?search=${search}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
    })
    }else{
        return axios.get(`${baseURL}/OEM`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        }
    })
    }
}