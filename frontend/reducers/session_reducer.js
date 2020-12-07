import { RECIEVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullUser = {
    id: null
}

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECIEVE_CURRENT_USER:
            return {id: action.currentUser.id};
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
}

export default sessionReducer;