import * as BoardApiUtil from '../util/board_api_util'

export const RECEIVE_ALL_BOARDS = "RECEIVE_ALL_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";

export const receiveAllBoards = (boards) => {
    return({
        type: RECEIVE_ALL_BOARDS,
        boards
    })
}

export const receiveBoard = (board) => {
    return({
        type: RECEIVE_BOARD,
        board
    })
}

export const removeBoard = (boardId) => {
    return({
        type: REMOVE_BOARD,
        boardId
    })
}

export const fetchBoards = () => dispatch => {
    return BoardApiUtil.fetchBoards()
        .then(boards => dispatch(receiveAllBoards(boards)))
}

export const fetchBoard = (boardId) => dispatch => {
    return BoardApiUtil.fetchBoard(boardId)
        .then(board => dispatch(receiveBoard(board)))
}

export const createBoard = (board) => dispatch => {
    return BoardApiUtil.createBoard(board)
        .then(board => dispatch(receiveBoard(board)))
}

export const updateBoard = (board) => dispatch => {
    return BoardApiUtil.updateBoard(board)
        .then(board => dispatch(receiveBoard(board)))
}

export const deleteBoard = (boardId) => dispatch => {
    return BoardApiUtil.deleteBoard(boardId)
        .then(() => dispatch(removeBoard(boardId)))
}