import * as CardApiUtil from "../util/card_api_util";

export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

export const receiveCard = (card) => {
    return({
        type: RECEIVE_CARD,
        card
    })
}

export const removeCard = (cardId) => {
    return({
        type: REMOVE_CARD,
        cardId
    })
}

export const createCard = (card) => dispatch => {
    return CardApiUtil.createCard(card)
        .then(card => dispatch(receiveCard(card)))
}

export const updateCard = (card) => dispatch => {
    return CardApiUtil.updateCard(card)
        .then(card => dispatch(receiveCard(card)))
}

export const deleteCard = (cardId) => dispatch => {
    return CardApiUtil.deleteCard(cardId)
        .then(() => dispatch(removeCard(cardId)))
}

// All the reducers work on the window