import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';

const mapStateToProps = (state) => {
    return({
        boards: Object.values(state.entities.boards),
        author_id: state.session.id
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchBoards: () => dispatch(fetchBoards()),
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);