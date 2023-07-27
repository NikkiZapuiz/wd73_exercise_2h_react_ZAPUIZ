import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { artSlice } from "./artReducer";
import { userSlice } from "./authReducer";

const rootReducer = combineReducers({
        user: userSlice.reducer,
        art: artSlice.reducer
    
})

export const store = configureStore({
    reducer: rootReducer
})