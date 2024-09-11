import { createSlice } from "@reduxjs/toolkit";


const counterSlie2= createSlice({
    name:'counter2',
    initialState:{
        value:63
    },
    reducers:{
        increamentCounter1(state){
         state.value +=1
        },
        decreamentCounter2(state){
         state.value -=1 
        }
    }
})
export const{increamentCounter1,decreamentCounter2} = counterSlie2.actions
export default counterSlie2.reducer

createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(incrementBy, (state, action) => {
          // action is inferred correctly here if using TS
        })
        // You can chain calls, or have separate `builder.addCase()` lines each time
        .addCase(decrement, (state, action) => {})
        // You can match a range of action types
        .addMatcher(
          isRejectedAction,
          // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
          (state, action) => {}
        )
        // and provide a default case if no other handlers matched
        .addDefaultCase((state, action) => {})
    },
  })