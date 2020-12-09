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
            <button onClick={() => deleteBoard(board.id)}>Delete</button>
        ) : null

        const editButton = authorId === board.author_id ? (
            <Link to={`/boards/${board.id}/edit`}>Edit Board Name</Link>
        ) : null

        return(
            <div>
                <Link to={`/boards/${board.id}`}><li>{board.board_name}</li></Link>
                {editButton}
                {deleteButton}
            </div>
        )
    }
}

export default BoardIndexItem;
