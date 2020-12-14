import { connect } from 'react-redux';
import EditCardForm from './edit_card_form';
import { updateCard, deleteCard } from '../../actions/card_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    return({
        card: state.entities.cards[ownProps.cardId],
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        updateCard: card => dispatch(updateCard(card)),
        deleteCard: cardId => dispatch(deleteCard(cardId))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCardForm))