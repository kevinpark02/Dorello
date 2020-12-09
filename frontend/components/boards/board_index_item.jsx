import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const board = this.props.board;
        const deleteBoard = this.props.deleteBoard;
        const authorId = this.props.authorId;

        const deleteButton = authorId === board.author_id ? (
            <button className="btn-red" onClick={() => deleteBoard(board.id)}>Delete</button>
        ) : null

        const editButton = authorId === board.author_id ? (
            <Link to={`/boards/${board.id}/edit`} className="btn-blue">Edit Name</Link>
        ) : null

        return(
            <div className="indiv-board-cont">
                <Link to={`/boards/${board.id}`}><li className="indiv-board">{board.board_name}</li></Link>
                <ul className="indiv-board-btn-cont">
                    <li>{editButton}</li>
                    <li>{deleteButton}</li>
                </ul>
            </div>
        )
    }
}

export default BoardIndexItem;
