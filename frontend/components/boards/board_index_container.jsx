import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';

const mapStateToProps = (state) => {
    return({
        boards: Object.values(state.entities.boards),
        authorId: state.session.id,
        demoUser: state.entities.users[state.session.id].email
        // users: state.entities.users
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchBoards: () => dispatch(fetchBoards()),
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);