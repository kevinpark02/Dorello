import React from 'react';
import EditListFormContainer from "./edit_list_form_container";

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
        return(
            <div className="list-wrapper">
                <div className="list-top-content">
                    <li>{list.title}</li> 
                    <button className="list-delete-btn" onClick={this.handleClick}>X</button>
                </div>
                <EditListFormContainer list={list}/>
            </div>
        )
    }
}

export default ListIndexItem;