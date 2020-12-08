import React from 'react';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {
        const boards = this.props.boards;
        const authorId = this.props.authorId;
        const deleteBoard = this.props.deleteBoard;

        return(
            <div>
                <h2>All Boards</h2>
                <ul>
                    {boards.map(board => {
                        return(
                            <BoardIndexItem board={board}
                                            key={board.id}
                                            deleteBoard={deleteBoard}
                                            authorId={authorId}/>
                        )
                    })}
                </ul>
                
            </div>
        )
    }
}

export default BoardIndex;