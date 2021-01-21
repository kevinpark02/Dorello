import { connect } from 'react-redux';
import CardForm from "./card_form";
import { createCard } from "../../actions/card_actions";
import { updateList } from "../../actions/list_actions";

const mapStateToProps = (state, ownProps) => {
    const listId = ownProps.list.id;
    const creatorId = state.session.id;

    return({
        card: { name: "", description: "", due_date: "", list_id: listId, creator_id: creatorId  },
        lists: state.entities.lists
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        createCard: (card) => dispatch(createCard(card)),
        updateList: (list) => dispatch(updateList(list))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);