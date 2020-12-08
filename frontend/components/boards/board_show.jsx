import React from "react";
import { Link } from 'react-router-dom';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board;
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    render() {
        const board = this.props.board;
        // if(board === undefined) {
        //     return null
        // }

        return(
            <div>
                {board.board_name}
            </div>
        )
    }
}

export default BoardShow