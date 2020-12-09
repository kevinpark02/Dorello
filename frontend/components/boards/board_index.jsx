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
            <div className="board-cont">
                <h4 className="personal-board-title">Personal Board</h4>
                <ul className="personal-board-cont">
                    {boards.map(board => {
                        if(board.author_id === authorId) {
                            return(
                                <BoardIndexItem board={board}
                                                key={board.id}
                                                deleteBoard={deleteBoard}
                                                authorId={authorId}/>
                            )
                        }
                    })}
                </ul>

                <h4 className="others-board-title">See other users' boards</h4>
                <ul className="others-board-cont">
                    {boards.map(board => {
                        if(board.author_id !== authorId) {
                            return(
                                <BoardIndexItem board={board}
                                                key={board.id}
                                                deleteBoard={deleteBoard}
                                                authorId={authorId}/>
                            )
                        }
                    })}
                </ul>
            </div>
        )


        // return(
        //     <div>
        //         <h2>All Boards</h2>
        //         <ul>
        //             {boards.map(board => {
        //                 return(
        //                     <BoardIndexItem board={board}
        //                                     key={board.id}
        //                                     deleteBoard={deleteBoard}
        //                                     authorId={authorId}/>
        //                 )
        //             })}
        //         </ul>
                
        //     </div>
        // )
    }
}

export default BoardIndex;