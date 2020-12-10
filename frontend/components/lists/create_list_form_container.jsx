import { connect } from 'react-redux';
import ListForm from './list_form';
import { createList } from "../../actions/list_actions";

const mapStateToProps = (state, ownProps) => {
    const boardId = ownProps.boardId;
    const creatorId = state.session.id
    return({
        list: {title: "", board_id: boardId, creator_id: creatorId }
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        createList: (list) => dispatch(createList(list))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ListForm)