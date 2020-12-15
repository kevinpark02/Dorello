import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { createComment, updateComment, deleteComment } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
    return({
        currentUser: state.session.id,
        currentCard: ownProps.currentCard,
        comments: Object.values(state.entities.comments),
    })
}

const mapDispatchToProps = dispatch => {
    return({
        createComment: comment => dispatch(createComment(comment)),
        updateComment: comment => dispatch(updateComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)