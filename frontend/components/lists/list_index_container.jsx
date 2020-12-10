import { connect } from 'react-redux';
import ListIndex from './list_index';
import { createList, updateList, deleteList } from "../../actions/list_actions"

const mapStateToProps = (state, ownProps) => {
    return({
        board: state.entities.boards[ownProps.match.params.boardId],
        lists: Object.values(state.entities.lists)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createList: (list) => dispatch(createList(list)),
        updateList: (list) => dispatch(updateList(list)),
        deleteList: (listId) => dispatch(deleteList(listId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);