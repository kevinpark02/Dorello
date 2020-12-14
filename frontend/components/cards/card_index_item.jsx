import React from 'react';
import {Link} from 'react-router-dom'

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.openModal('edit', this.props.card.id)
    }

    render() {
        const board = this.props.board;
        const card = this.props.card;
        const due = card.due_date ? <li className="card-due-display">Due: {card.due_date}</li> : null;
        const editForm = this.props.editForm;

        return(
            <div className="card-container">
                {/* <Link to={`/boards/${board.id}/${card.id}/edit`}><li>{card.name}</li></Link> */}
                <Link onClick={this.handleClick} to={`/boards/${board.id}/${card.id}`}><li>{card.name}</li></Link>
                {/* <button onClick={this.handleClick}>{card.name}</button> */}
                {/* <button onClick={this.handleClick}><li>{card.name}</li></button> */}
                {due}
            </div>
        )
    }
}

export default CardIndexItem;