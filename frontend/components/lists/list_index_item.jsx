import React from 'react';
import EditListFormContainer from "./edit_list_form_container";
import CardIndexContainer from "../cards/card_index_container";
import CardFormContainer from "../cards/create_card_form_container";
import { Draggable } from 'react-beautiful-dnd';

class ListIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false }
        this.handleClick = this.handleClick.bind(this);
        this.handleCardForm = this.handleCardForm.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deleteList(this.props.list.id)
    }

    handleCardForm(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({['clicked']: !this.state['clicked']})
    }


    render() {
        const list = this.props.list;
        const board = this.props.board;

        const cardForm = (this.state['clicked']) ? 
            <CardFormContainer list={list} handleCardForm={this.handleCardForm}/> : 
                <button className="card-container-before" onClick={this.handleCardForm}>+ Add another card</button>

        if (board === undefined){
            return null;
        }

        return(
            <Draggable draggableId={list.id.toString()} index={this.props.index}>
                {(provided) => (
                    <div className="list-wrapper"
                         {...provided.draggableProps}
                         ref={provided.innerRef}>
                        <div className="list-top-content"
                             {...provided.dragHandleProps}>
                            <li className="list-title">{list.title}</li> 
                            <button className="list-delete-btn" onClick={this.handleClick}>Delete</button>
                        </div>
                        <EditListFormContainer list={list}/>
                        <CardIndexContainer list={list}
                                            board={board}
                                            cardOrder={this.props.cardOrder}/>
                        {cardForm}
                    </div>
                )}
            </Draggable>
        )
    }
}

export default ListIndexItem;