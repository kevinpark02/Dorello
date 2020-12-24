import React from 'react';
import { Link } from 'react-router-dom';
import EditBoardFormContainer from "./edit_board_form_container";


class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(this.props.board.email === "demo@dorello.com") {
            setTimeout(() => {
                this.props.deleteBoard(this.props.board.id)
            }, 600000)
        }
    }

    render() {
        const board = this.props.board;
        const authorId = this.props.authorId;
        const boardDisplay = <li className="indiv-board">{board.board_name}</li>
        const email = authorId === board.author_id ? null : (<h4 className="board-author">{board.email}</h4>)
        // const deleteButton = authorId === board.author_id ? (
        //     <button className="btn-red board-delete-btn" onClick={() => deleteBoard(board.id)}>Delete</button>
        // ) : null

        return(
            <div className="board-wrap">
                {email}
                <Link className="indiv-board-cont" to={`/boards/${board.id}`}>
                    {boardDisplay}
                </Link>
            </div>

        )
    }
}

export default BoardIndexItem;
