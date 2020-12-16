import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECIEVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS
})

export const login = (user) => dispatch => {
    return ApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
    return ApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()),
            errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};

export const signup = (user) => dispatch => {
    return ApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveSessionErrors(errors.responseJSON)));
};