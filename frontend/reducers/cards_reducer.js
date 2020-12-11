import { RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions';
import { RECEIVE_BOARD } from "../actions/board_actions";

const cardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CARD:
            nextState[action.card.id] = action.card
            return nextState;
        case REMOVE_CARD:
            delete nexstState[action.cardId];
            return nextState;
        case RECEIVE_BOARD:
            return Object.assign(nextState, action.board.cards)
        default:
            return state;
    }
}

export default cardsReducer;