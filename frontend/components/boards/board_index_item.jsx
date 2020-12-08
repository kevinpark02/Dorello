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
                <ul>
                    <li>{board.title}</li>
                </ul>
            </div>
        )
    }
}

export default BoardIndexItem;
