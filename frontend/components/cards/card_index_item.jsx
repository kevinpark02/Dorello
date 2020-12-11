import React from 'react';

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const card = this.props.card;

        return(
            <li className="card-container">{card.name}</li>
        )
    }
}

export default CardIndexItem;