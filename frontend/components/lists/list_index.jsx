import React from 'react';
import ListIndexItem from "./list_index_item";
import ListFormContainer from "./create_list_form_container";
import EditBoardFormContainer from "../boards/edit_board_form_container";
import { Link } from 'react-router-dom';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(e) {
    //     e.preventDefault();
    //     this.props.deleteBoard(this.props.board.id);
    //     <Redirect to="/feed"></Redirect>
    // }

    render() {
        const lists = this.props.lists;
        const board = this.props.board;
        const createList = this.props.createList;
        const updateList = this.props.updateList;
        const deleteList = this.props.deleteList;
        
        const authorId = this.props.authorId;
        const deleteBoard = this.props.deleteBoard;

        if (board === undefined) {
            return null;
        }

        const edit = authorId === board.author_id ? (
            <EditBoardFormContainer board={board}/>
        ) : <h4 className="list-board-title">{board.board_name}</h4>

        const deleteButton = authorId === board.author_id ? (
            <Link to="/feed"><button className="btn-red board-delete-btn" onClick={() => deleteBoard(board.id)}>Delete</button></Link>
            // <button className="btn-red board-delete-btn" onClick={this.handleClick}>Delete</button>
        ) : null

        
        return(
            <ul className="list-display-container">
                <div className="list-board-cont">
                    {edit}
                    {deleteButton}
                </div>
                <div className="lists-cont">
                    {lists.map(list => {
                        if(list.board_id === board.id) {
                            return(
                                    <ListIndexItem list={list}
                                                key={list.id}
                                                createList={createList}
                                                updateList={updateList}
                                                deleteList={deleteList}
                                                board={board}/>
                            )
                        }
                    })}
                    <ListFormContainer boardId={board.id}/>
                </div>
            </ul>
        )
    }
}

export default ListIndex;