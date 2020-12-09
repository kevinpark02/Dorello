import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import boardsErrorsReducer from "./board_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    board: boardsErrorsReducer
})

export default errorsReducer;