import { combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { artSlice } from "./artReducer";

const rootReducer = combineReducers({
        auth: authReducer,
        art: artSlice.reducer
    
})

export const store = configureStore({
    reducer: rootReducer
})