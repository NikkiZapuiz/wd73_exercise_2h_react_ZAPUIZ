export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const loginSuccess = (name) => ({
    type: LOGIN_SUCCESS, payload: name 
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});
