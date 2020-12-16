import React from 'react';
import BoardIndexItem from './board_index_item';
import BoardFormContainer from './create_board_form_container';

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
        const demoUser = this.props.demoUser

        const personalBoardDisplay = (demoUser === "demo@dorello.com") ?
            (<h4 className="personal-board-title"><span><i className="fas fa-user fa-lg"></i></span><span>&nbsp;</span>&nbsp; Demo User Board (You will have 10 minutes to make a board and use its features. Enjoy your experience!)</h4>) :
                (<h4 className="personal-board-title"><span><i className="fas fa-user fa-lg"></i></span><span>&nbsp;</span>&nbsp; Personal Board</h4>);


        const otherBoardsDisplay = (demoUser === "demo@dorello.com") ?
            (<h4 className="others-board-title"><span><i className="fas fa-users fa-lg"></i></span><span>&nbsp;</span>&nbsp; Other Boards (Demo users have no access)</h4>) :
                (<h4 className="others-board-title"><span><i className="fas fa-users fa-lg"></i></span><span>&nbsp;</span>&nbsp; Other Boards</h4>);
    

        return(
            <div className="board-cont">
                {personalBoardDisplay}
                {/* <h4 className="personal-board-title"><span><i className="fas fa-user fa-lg"></i></span><span>&nbsp;</span>&nbsp; Personal Board</h4> */}
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
                    <BoardFormContainer />
                </ul>

                {otherBoardsDisplay}
                {/* <h4 className="others-board-title"><span><i className="fas fa-users fa-lg"></i></span><span>&nbsp;</span>&nbsp; Other Boards</h4> */}
                <ul className="others-board-cont">
                    {boards.map(board => {
                        if((board.author_id !== authorId) && (demoUser !== "demo@dorello.com")) {
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