import React from 'react';
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const comments = this.props.comments;
        const commentors = this.props.commentors;
        const currentCard = this.props.currentCard;

        return(
            <div>
                <h3 className="comment-heading"><i className="far fa-comments"></i> &nbsp; Comments</h3>
                <ul className="comment-section">
                    {comments.map(comment => {
                        if(comment.card_id === currentCard.id) {
                            return(
                                <CommentIndexItem comment={comment}
                                                commentors={commentors}
                                                key={comment.id}/>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;