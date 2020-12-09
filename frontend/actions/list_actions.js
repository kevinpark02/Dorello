import * as ListApiUtil from "../util/list_api.util";

export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

export const receiveList = (list) => {
    return({
        type: RECEIVE_LIST,
        list
    })
}

export const removeList = (listId) => {
    return({
        type: REMOVE_LIST,
        listId
    })
}

export const createList = (list) => dispatch => {
    return ListApiUtil.createList(list)
        .then(list => dispatch(receiveList(list)))
}

export const updateList = (list) => dispatch => {
    return ListApiUtil.updateList(list)
        .then(list => dispatch(receiveList(list)))
}

export const deleteList = (listId) => dispatch => {
    return ListApiUtil.deleteList(listId)
        .then(() => dispatch(removeList(listId)))
}