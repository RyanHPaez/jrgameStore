import { configureStore } from "@reduxjs/toolkit";
import motorcycleSlice from "./redux/motorcycleSlice";

const store = configureStore({
    reducer: {motorcycles: motorcycleSlice}
})

export default store