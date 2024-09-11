import { types } from "./actionTypes";
import { initialState } from "./initialState";

export const reducer = (state=initialState,action)=>{
switch(action.type){
    case types.INCREAMENT_COUNTER:
        return{
            ...state,valuedata:state.valuedata+1
        }
        case types.DECREAMENT_COUNTER:
            return{
                ...state,valuedata:state.valuedata-1
            }
       default:
       return state
        
                
}
   
}

