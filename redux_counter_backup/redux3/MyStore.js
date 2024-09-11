import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
const MyStore3 = configureStore({
    reducer:{
       counter3:counterReducer
    }
})

export default MyStore3