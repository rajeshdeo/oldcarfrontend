import { ADDCARS, DELETECARS, ERROR, GETCARS, LOADING, UPDATECARS } from "./dealer_inventory.actiontype";

let init={
    dealer_inventory:[],
    loading:false,
    error:false
}
export const dealerInventoryReducer=(state=init,action)=>{
    const {payload,type}=action;
    switch(type){
        case GETCARS:{
            return {...state,dealer_inventory:payload,loading:false,error:false}
        }
        case ADDCARS:{
            return {...state,dealer_inventory:[...state.dealer_inventory,payload],loading:false,error:false}
        }
        case UPDATECARS:{
            let data=state.dealer_inventory.map((el)=>{
                if(el._id==payload.id){
                    console.log('Reducer payload:', payload.payload)
                    return {...el,...payload.payload}
                }
                return el
            })
            return {...state,dealer_inventory:data,loading:false,error:false}
        }
        case DELETECARS:{
            let data=state.dealer_inventory.filter((el)=>{
                return el._id!==payload
            })
            return {...state,dealer_inventory:data,loading:false,error:false}
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