import { connect } from 'react-redux';
import EditCardForm from './edit_card_form';
import { updateCard, deleteCard } from '../../actions/card_actions';
import { updateList } from "../../actions/list_actions";
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    return({
        card: state.entities.cards[ownProps.cardId],
        lists: state.entities.lists
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        updateCard: card => dispatch(updateCard(card)),
        deleteCard: cardId => dispatch(deleteCard(cardId)),
        closeModal: ownProps.closeModal,
        updateList: list => dispatch(updateList(list))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCardForm))