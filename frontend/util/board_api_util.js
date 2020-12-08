import { $CombinedState } from "redux"

export const fetchBoards = () => {
    return $.ajax({
        url: `/api/boards`,
        method: "GET"
    })
}

export const fetchBoard = (boardId) => {
    return $.ajax({
        url: `/api/boards/${boardId}`,
        method: "GET"
    })
}

export const createBoard = (board) => {
    return $.ajax({
        url: `/api/posts`,
        method: "POST",
        data: {board}
    })
}

export const updateBoard = (board) => {
    return $.ajax({
        url: `/api/posts/${board.id}`,
        method: "PATCH",
        data: {board}
    })
}

export const deleteBoard = (boardId) => {
    return $.ajax({
        url: `/api/posts/${boardId}`,
        method: "DELETE"
    })
}