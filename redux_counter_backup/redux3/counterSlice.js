import { createSlice } from "@reduxjs/toolkit";


const counterSlice3 = createSlice({
    name: 'counter3',
    initialState:{
        value:80
    },
    reducers:{
        increamentCounter(state){
             state.value +=1
        },
        decreamentCounter(state){
             state.value -=1
        }
    }
})
export const{increamentCounter,decreamentCounter}= counterSlice3.actions
export default counterSlice3.reducer