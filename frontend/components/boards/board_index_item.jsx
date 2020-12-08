import React from 'react';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const board = this.props.board;
        const deleteBoard = this.props.deleteBoard;
        
        return(
            <div>
                <li>{board.board_name}</li>
                <button onClick={() => deleteBoard(board.id)}>Delete</button>
            </div>
        )
    }
}

export default BoardIndexItem;
