import { LOGIN_SUCCESS } from "./authActions";
import { LOGOUT_SUCCESS } from "./authActions";

const initialState = {
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, user: action.payload};
        case LOGOUT_SUCCESS:
            return {...state, user: null};
        default:
            return state;
    }
};

export default authReducer;
