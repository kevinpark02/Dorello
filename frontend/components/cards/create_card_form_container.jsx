import { connect } from 'react-redux';
import CardForm from "./card_form";
import { createCard } from "../../actions/card_actions";

const mapStateToProps = (state, ownProps) => {
    const listId = ownProps.list.id;
    const creatorId = state.session.id;

    return({
        card: { name: "", description: "", due_date: null, list_id: listId, creator_id: creatorId  }
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        createCard: (card) => dispatch(createCard(card))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);