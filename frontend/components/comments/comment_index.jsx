import React from 'react';
import CommentIndexItem from "./comment_index_item";
import CreateCommentContainer from "./create_comment_container";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const comments = this.props.comments;
        const currentCard = this.props.currentCard;
        const currentUser = this.props.currentUser;
        const deleteComment = this.props.deleteComment;

        return(
            <div className="comment-outer-container">
                <h3 className="comment-heading"><i className="far fa-comments"></i> &nbsp; Comments</h3>
                <CreateCommentContainer currentCard={currentCard}/>
                <ul className="comment-section">
                    {comments.map(comment => {
                        if(comment.card_id === currentCard.id) {
                            return(
                                <CommentIndexItem comment={comment}
                                                  currentUser={currentUser}
                                                  key={comment.id}
                                                  deleteComment={deleteComment}/>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;