import { connect } from 'react-redux';
import CommentForm from "./comment_form";
import { createComment } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
    const cardId  = ownProps.currentCard.id
    const creatorId = state.session.id
    return({
        comment: {
            body: "",
            card_id: cardId,
            creator_id: creatorId
        }
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        createComment: comment => dispatch(createComment(comment))
    })
} 

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
