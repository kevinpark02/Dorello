import { connect } from 'react-redux';
import CardIndex from './card_index';
import { createCard, updateCard, deleteCard } from "../../actions/card_actions"
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    return({
        board: ownProps.board,
        list: ownProps.list,
        cards: Object.values(state.entities.cards)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createCard: (card) => dispatch(createCard(card)),
        updateCard: (card) => dispatch(updateCard(card)),
        deleteList: (cardId) => dispatch(deleteCard(cardId)),
        openModal: (modal, cardId) => dispatch(openModal(modal, cardId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex)