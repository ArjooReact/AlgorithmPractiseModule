import { configureStore } from "@reduxjs/toolkit";
import counterSlice2 from "./counterSlice2";

const myStore = configureStore({
reducers:{
    counter:counterSlice2
}
})

export default myStore