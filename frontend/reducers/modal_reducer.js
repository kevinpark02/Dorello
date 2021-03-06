import { NavLink } from "react-router-dom";
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

export default function modalReducer(state = [], action) {
    switch (action.type) {
        case OPEN_MODAL:
            return [action.modal, action.cardId];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
}