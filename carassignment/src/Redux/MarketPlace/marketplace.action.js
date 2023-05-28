import axios from "axios";
import { ERROR, GETALL, LOADING } from "./marketplace.actiontype";

export const getFun=(search)=>async(dispatch)=>{
    console.log('search:', search)
    dispatch({type:LOADING});
    try {
        let data=await axios.get(`${process.env.REACT_APP_BASE_URL}/MarketplaceInventory/?search=${search}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
        console.log('data all market:', data)
        dispatch({type:GETALL,payload:data.data})
    }catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}