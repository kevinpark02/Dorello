import React from 'react';
import CardIndexItem from "./card_index_item";

class CardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const board = this.props.board;
        const list = this.props.list;
        const cards = this.props.cards;

        return(
            <ul>
                {cards.map(card => {
                    if(card.list_id === list.id){
                        return(
                            <CardIndexItem card={card}
                                           key={card.id}/>
                        )
                    }
                })}
            </ul>
        )
    }
}

export default CardIndex