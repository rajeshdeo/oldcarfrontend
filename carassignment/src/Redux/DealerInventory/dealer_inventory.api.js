import axios from "axios"

const baseURL = process.env.REACT_APP_BASE_URL;

export const getapi = ()=>{
    return axios.get(`${baseURL}/MarketplaceInventory/dealer`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
}
export const addapi = (payload)=>{
    console.log('payload:', payload)
    return axios.post(`${baseURL}/MarketplaceInventory/create`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
}
export const updateapi = (id,payload)=>{
    return axios.patch(`${baseURL}/MarketplaceInventory/update/${id}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
}
export const deleteapi = (id)=>{
    return axios.delete(`${baseURL}/MarketplaceInventory/delete/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
}