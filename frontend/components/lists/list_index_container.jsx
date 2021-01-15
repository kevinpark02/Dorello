import { connect } from 'react-redux';
import ListIndex from './list_index';
import { createList, updateList, deleteList } from "../../actions/list_actions"
import { deleteBoard } from "../../actions/board_actions";
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    return({
        board: state.entities.boards[ownProps.match.params.boardId],
        lists: Object.values(state.entities.lists),
        authorId: state.session.id,
        listForm: { clicked: false },
        cards: state.entities.cards
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createList: (list) => dispatch(createList(list)),
        updateList: (list) => dispatch(updateList(list)),
        deleteList: (listId) => dispatch(deleteList(listId)),
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex));