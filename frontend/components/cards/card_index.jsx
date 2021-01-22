import React from 'react';
import CardIndexItem from "./card_index_item";
import { Droppable } from "react-beautiful-dnd"

class CardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // debugger
        const board = this.props.board;
        const list = this.props.list;
        const cards = this.props.cards;
        const openModal = this.props.openModal

        const cardDisplay = (this.props.cardOrder.length !== 0) ?
                <Droppable droppableId={(this.props.list.id).toString()}
                           type="card">
                    {(provided) => (
                        <ul className="card-outer-container"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.cardOrder.map((cardOrderId, index) => {
                                if(cards[cardOrderId].list_id === list.id) {
                                    return(
                                        <CardIndexItem card={cards[cardOrderId.toString()]}
                                                        key={cardOrderId.toString()}
                                                        board={board}
                                                        openModal={openModal}
                                                        index={index}/>                                    
                                    )
                                }
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable >
                :
                <Droppable droppableId={(this.props.list.id).toString()}
                           type="card">
                    {(provided) => (
                        <ul className="card-outer-container"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {Object.values(cards).map((card, index) => {
                                if(card.list_id === list.id) {
                                    return(
                                        <CardIndexItem card={card}
                                                    key={card.id}
                                                    board={board}
                                                    openModal={openModal}
                                                    index={index}/>
                                    )
                                }
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>

        return(
                cardDisplay
        )
    }
}

export default CardIndex