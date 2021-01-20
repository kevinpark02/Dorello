import React from 'react';
import ListIndexItem from "./list_index_item";
import ListFormContainer from "./create_list_form_container";
import EditBoardFormContainer from "../boards/edit_board_form_container";
import { DragDropContext } from "react-beautiful-dnd";

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            cardOrder: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({['clicked']: !this.state['clicked']})
    }

    handleDelete(id) {
        return (e) => {
            e.preventDefault();
            this.props.deleteBoard(id).then(() => this.props.history.push("/feed"));
        }
    }

    onDragEnd(result) {
        const { destination, source, draggableId } = result;
        // console.log(result);
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        const cards = this.props.cards;

        const listId = result.destination.droppableId;
        const boardId = this.props.lists[listId].board_id;

        console.log(this.props.lists[listId].card_order)

        let cardOrder = this.props.lists[listId].card_order.length === 0 ? Object.keys(cards) : this.props.lists[listId].card_order; 
        cardOrder.splice(source.index, 1);
        cardOrder.splice(destination.index, 0, draggableId);

        this.props.updateList({id: listId,
                         board_id: boardId,
                         card_order: cardOrder
                        });

        this.setState({["cardOrder"]: cardOrder});
    }

    render() {
        const lists = Object.values(this.props.lists);
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
            <button className="btn-red board-delete-btn" onClick={this.handleDelete(board.id)}>Delete</button>
            // <button className="btn-red board-delete-btn" onClick={() => deleteBoard(board.id)}>Delete</button>
        ) : null

        const listForm = (this.state['clicked']) ? 
            <ListFormContainer boardId={board.id} handleClick={this.handleClick}/> : 
                <button className="list-form-cont-before" onClick={this.handleClick}>+ Add another list</button>
        
        return(
            <ul className="list-display-container">
                <div className="list-board-cont">
                    {edit}
                    {deleteButton}
                </div>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="lists-cont">
                        {lists.map(list => {
                            if(list.board_id === board.id) {
                                return(
                                        <ListIndexItem list={list}
                                                    key={list.id}
                                                    createList={createList}
                                                    updateList={updateList}
                                                    deleteList={deleteList}
                                                    board={board}
                                                    cardOrder={this.state.cardOrder}/>
                                )
                            }
                        })}
                        {listForm}
                    </div>
                </DragDropContext>
            </ul>
        )
    }
}

export default ListIndex;