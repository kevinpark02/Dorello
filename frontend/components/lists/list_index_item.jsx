import React from 'react';
import EditListFormContainer from "./edit_list_form_container";
import CardIndexContainer from "../cards/card_index_container";
import CardFormContainer from "../cards/create_card_form_container";

class ListIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deleteList(this.props.list.id)
    }

    render() {
        const list = this.props.list;
        const board = this.props.board;

        if (board === undefined){
            return null;
        }

        return(
            <div className="list-wrapper">
                <div className="list-top-content">
                    <li>{list.title}</li> 
                    <button className="list-delete-btn" onClick={this.handleClick}>Delete</button>
                </div>
                <EditListFormContainer list={list}/>
                <CardIndexContainer list={list}
                                    board={board}/>
                <CardFormContainer list={list}/>
            </div>
        )
    }
}

export default ListIndexItem;