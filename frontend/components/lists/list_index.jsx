import React from 'react';
import ListIndexItem from "./list_index_item";
import ListFormContainer from "./create_list_form_container";
import EditBoardFormContainer from "../boards/edit_board_form_container";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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
        // debugger
        const { destination, source, draggableId, type } = result;
        let cardOrder;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        if (type === "card") {
            if (destination.droppableId !== source.droppableId) {
                const sourceList = this.props.lists[source.droppableId];
                const destinationList = this.props.lists[destination.droppableId];
                const currentBoardId = this.props.lists[sourceList.id].board_id;
    
                let sourceCardOrder = sourceList.card_order;
                let destinationCardOrder = destinationList.card_order;
                
                sourceCardOrder.splice(source.index, 1);
                destinationCardOrder.splice(destination.index, 0, draggableId)
    
                this.props.updateList({
                    id: sourceList.id,
                    board_id: currentBoardId,
                    card_order: sourceCardOrder
                })
    
                this.props.updateList({
                    id: destinationList.id,
                    board_id: currentBoardId,
                    card_order: destinationCardOrder
                })
    
                this.props.updateCard({
                    id: this.props.cards[draggableId].id,
                    creator_id: this.props.cards[draggableId].creator_id,
                    list_id: destination.droppableId
                })
            } else {
                const cards = this.props.cards;
                const listId = destination.droppableId;
                const boardId = this.props.lists[listId].board_id;
        
                cardOrder = this.props.lists[listId].card_order.length === 0 ? 
                    Object.keys(cards).map(cardId => {
                        if(cards[cardId].list_id.toString() === listId) {
                            return (
                                cardId
                            )
                        }
                    }) 
                    : 
                    (this.props.lists[listId].card_order).map(cardId => {
                        if(cards[cardId].list_id.toString() === listId) {
                            return(
                                cardId
                            )
                        }
                    })
                  
                cardOrder.splice(source.index, 1);
                cardOrder.splice(destination.index, 0, draggableId);
                
                cardOrder = cardOrder.filter(function(card) {
                    return card !== undefined;
                });
                    
                this.props.updateList({id: listId,
                                 board_id: boardId,
                                 card_order: cardOrder
                                });
            }
        } else if (type === "list") {
            let board = this.props.board;
            let listOrder = board.list_order;

            listOrder.splice(source.index, 1);
            listOrder.splice(destination.index, 0, draggableId);
            
            this.props.updateBoard({
                id: board.id,
                list_order: listOrder
            }).then(res => console.log(res))
        }

    }

    render() {
        // debugger
        const lists = this.props.lists;
        // const lists = Object.values(this.props.lists);
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
                    <Droppable droppableId="all-lists" 
                               direction="horizontal" 
                               type="list">
                        {(provided) => (
                            <div className="lists-cont"
                                 {...provided.droppableProps}
                                 ref={provided.innerRef}>
                                {board.list_order.map((listId,idx) => {
                                    if(Object.keys(lists).length > 0) {
                                        return(
                                                <ListIndexItem list={lists[listId]}
                                                            key={lists[listId].id}
                                                            createList={createList}
                                                            updateList={updateList}
                                                            deleteList={deleteList}
                                                            board={board}
                                                            cardOrder={lists[listId].card_order}
                                                            index={idx}/>
                                        )
                                    }
                                })}
                                {/* {lists.map((list,idx) => {
                                    if(list.board_id === board.id) {
                                        return(
                                                <ListIndexItem list={list}
                                                            key={list.id}
                                                            createList={createList}
                                                            updateList={updateList}
                                                            deleteList={deleteList}
                                                            board={board}
                                                            cardOrder={list.card_order}
                                                            index={idx}/>
                                        )
                                    }
                                })} */}
                                {provided.placeholder}
                                {listForm}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </ul>
        )
    }
}

export default ListIndex;