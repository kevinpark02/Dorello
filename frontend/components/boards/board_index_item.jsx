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

        const boardDisplay = authorId === board.author_id ? (
            <Link to={`/boards/${board.id}`}><li className="indiv-board">{board.board_name}</li></Link>
        ) : 
        (<Link to={`/boards/${board.id}`}><li className="indiv-board">{board.board_name} by <span className="board-author">{board.email}</span></li></Link>)

        const deleteButton = authorId === board.author_id ? (
            <button className="btn-red board-delete-btn" onClick={() => deleteBoard(board.id)}>Delete</button>
        ) : null

        const edit = authorId === board.author_id ? (
            <EditBoardFormContainer board={board}/>
        ) : null

        return(
            <div className="indiv-board-cont">
                {boardDisplay}
                {/* <Link to={`/boards/${board.id}`}><li className="indiv-board">{board.board_name}</li></Link> */}
                <ul className="indiv-board-btn-cont">
                    <li>{edit}</li>
                    <li>{deleteButton}</li>
                </ul>
            </div>
        )
    }
}

export default BoardIndexItem;
