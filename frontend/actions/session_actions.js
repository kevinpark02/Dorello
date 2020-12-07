import * as ApiUtil from '../util/session_api_util';

export const RECIEVE_CURRENT_USER = "RECIEVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
    type: RECIEVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const login = (user) => dispatch => {
    return ApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
    return ApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()),
            errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = (user) => dispatch => {
    return ApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
};