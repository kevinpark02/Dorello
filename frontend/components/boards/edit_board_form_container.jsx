import { connect } from 'react-redux';
import EditBoardForm from './edit_board_form';
import { fetchBoard, updateBoard } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
    return({
        board: state.entities.boards[ownProps.match.params.boardId],
        errors: state.errors.board
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
        updateBoard: (board) => dispatch(updateBoard(board))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);