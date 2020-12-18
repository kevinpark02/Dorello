import React from 'react';
import EditListFormContainer from "./edit_list_form_container";
import CardIndexContainer from "../cards/card_index_container";
import CardFormContainer from "../cards/create_card_form_container";

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
            <div className="list-wrapper">
                <div className="list-top-content">
                    <li className="list-title">{list.title}</li> 
                    <button className="list-delete-btn" onClick={this.handleClick}>Delete</button>
                </div>
                <EditListFormContainer list={list}/>
                <CardIndexContainer list={list}
                                    board={board}/>
                {cardForm}
                {/* <CardFormContainer list={list}/> */}
            </div>
        )
    }
}

export default ListIndexItem;