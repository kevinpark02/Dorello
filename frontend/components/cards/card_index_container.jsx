import { connect } from 'react-redux';
import CardIndex from './card_index';
import { createCard, updateCard, deleteCard } from "../../actions/card_actions"

const mapStateToProps = (state, ownProps) => {
    return({
        list: ownProps.list,
        cards: Object.values(state.entities.cards)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createCard: (card) => dispatch(createCard(card)),
        updateCard: (card) => dispatch(updateCard(card)),
        deleteList: (cardId) => dispatch(deleteCard(cardId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex)