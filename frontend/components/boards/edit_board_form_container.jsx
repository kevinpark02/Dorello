import { connect } from 'react-redux';
import EditBoardForm from './edit_board_form';
import { fetchBoards, fetchBoard, updateBoard } from '../../actions/board_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    return({
        // board: state.entities.boards[ownProps.match.params.boardId],
        board: ownProps.board,
        errors: state.errors.board
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        // fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
        fetchBoards: () => dispatch(fetchBoards()),
        updateBoard: (board) => dispatch(updateBoard(board)),
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBoardForm));