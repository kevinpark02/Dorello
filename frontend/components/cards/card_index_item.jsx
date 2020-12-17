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
            <Link onClick={this.handleClick} to={`/boards/${board.id}/${card.id}`}>
                <div className="card-container">
                    <li className="card-name">{card.name}</li>
                    {due}
                </div>
            </Link>
        )
    }
}

export default CardIndexItem;