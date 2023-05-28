import { ERROR, GETOEM, LOADING } from "./oem.actiontype";
import { getapi } from "./oem.api";

export const getFun=(payload)=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await getapi(payload)
        console.log('data: get OEM', data)
        dispatch({type:GETOEM,payload:data.data})

    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}