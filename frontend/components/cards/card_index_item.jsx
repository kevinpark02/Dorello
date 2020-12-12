import React from 'react';
import {Link} from 'react-router-dom'

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const board = this.props.board;
        const card = this.props.card;

        return(
            <Link to={`/boards/${board.id}/${card.id}/edit`}><li className="card-container">{card.name}</li></Link>
        )
    }
}

export default CardIndexItem;