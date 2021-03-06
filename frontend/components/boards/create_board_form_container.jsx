import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions';

const mapStateToProps = (state) => {
    const author_id = state.session.id
    return({
        board: {board_name: "", author_id: author_id},
        errors: state.errors.board
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        createBoard: (board) => dispatch(createBoard(board))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);