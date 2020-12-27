import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../../actions/session_actions';
import { fetchBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    boards: Object.values(state.entities.boards),
    authorId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));

