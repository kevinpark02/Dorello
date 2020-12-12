import React from 'react';
import { Link } from 'react-router-dom';
import EditBoardFormContainer from "./edit_board_form_container";


class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const board = this.props.board;
        const deleteBoard = this.props.deleteBoard;
        const authorId = this.props.authorId;
        // const boardAuthor = this.props.users[board.author_id].email;

        const deleteButton = authorId === board.author_id ? (
            <button className="btn-red" onClick={() => deleteBoard(board.id)}>Delete</button>
        ) : null

        const edit = authorId === board.author_id ? (
            <EditBoardFormContainer board={board}/>
        ) : null

        return(
            <div className="indiv-board-cont">
                <Link to={`/boards/${board.id}`}><li className="indiv-board">{board.board_name}</li></Link>
                <ul className="indiv-board-btn-cont">
                    <li>{edit}</li>
                    <li className="board-delete-btn">{deleteButton}</li>
                </ul>
            </div>
        )
    }
}

export default BoardIndexItem;
