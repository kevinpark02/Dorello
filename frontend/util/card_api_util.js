import { $CombinedState } from "redux"

export const createCard = (card) => {
    return $.ajax({
        url: `/api/cards`,
        method: "POST",
        data: {card}
    })
} //this works

export const updateCard = (card) => {
    return $.ajax({
        url: `/api/cards/${card.id}`,
        method: "PATCH",
        data: {board}
    })
} //this works

export const deletecard = (cardId) => {
    return $.ajax({
        url: `/api/cards/${cardId}`,
        method: "DELETE" 
    })
} //this works