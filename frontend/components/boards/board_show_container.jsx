import {connect} from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    return({
        board: state.entities.boards[ownProps.match.params.boardId]
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow));