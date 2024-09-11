import {types} from '../redux2/actionTypes'

export const increamentCounter = ()=>{
    return{
        type:types.INCREAMENT_COUNTER
    }
}

export const decreamentCounter = ()=>{
    return{
        type:types.DECREAMENT_COUNTER
    }
}

