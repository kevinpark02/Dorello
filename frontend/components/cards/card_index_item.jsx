import React from 'react';
import {Link} from 'react-router-dom'

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const board = this.props.board;
        const card = this.props.card;
        const due = card.due_date ? <li className="card-due-display">Due: {card.due_date}</li> : null;

        return(
            <div className="card-container">
                <Link to={`/boards/${board.id}/${card.id}/edit`}><li>{card.name}</li></Link>
                {due}
            </div>
        )
    }
}

export default CardIndexItem;