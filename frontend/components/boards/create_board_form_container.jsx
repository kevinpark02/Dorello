import { connect, connnect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions';

const mapStateToProps = (state) => {
    const author_id = state.session.id
    return({
        board: {board_name: "", author_id: author_id}
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        createBoard: (board) => dispatch(createBoard(board))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);