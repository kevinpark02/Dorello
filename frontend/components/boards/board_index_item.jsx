import React from 'react';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const board = this.props.board;
        const deleteBoard = this.props.deleteBoard;
        const author_id = this.props.author_id;

        const button = author_id === board.author_id ? (
            <button onClick={() => deleteBoard(board.id)}>Delete</button>
        ) : null

        return(
            <div>
                <li>{board.board_name}</li>
                {/* <button onClick={() => deleteBoard(board.id)}>Delete</button> */}
                {button}
            </div>
        )
    }
}

export default BoardIndexItem;
