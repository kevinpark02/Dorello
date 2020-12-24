import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../../actions/session_actions';
import { fetchBoard } from '../../actions/board_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    boards: Object.values(state.entities.boards),
    authorId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

