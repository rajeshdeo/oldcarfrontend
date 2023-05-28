import { ERROR, GETOEM, LOADING } from "./oem.actiontype";

let init={
    oemData:[],
    loading:false,
    error:false
}
export const oemReducer=(state=init,action)=>{
    const {payload,type}=action;
    switch(type){
        case GETOEM:{
            return {...state,oemData:payload,loading:false,error:false}
        }
        case LOADING:{
            return {...state,loading:true,error:false}
        }
        case ERROR:{
            return {...state,loading:false,error:true}
        }
        default:{
            return state
        }
    }
}