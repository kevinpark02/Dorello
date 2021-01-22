import { connect } from 'react-redux';
import ListIndex from './list_index';
import { createList, updateList, deleteList } from "../../actions/list_actions";
import { updateCard } from "../../actions/card_actions";
import { updateBoard, deleteBoard } from "../../actions/board_actions";
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    return({
        board: state.entities.boards[ownProps.match.params.boardId],
        // lists: Object.values(state.entities.lists),
        lists: state.entities.lists,
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
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
        updateCard: (card) => dispatch(updateCard(card)),
        updateBoard: (board) => dispatch(updateBoard(board))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex));