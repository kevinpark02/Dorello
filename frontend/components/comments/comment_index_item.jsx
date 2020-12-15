import React from 'react'

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const comment = this.props.comment;
        // const commentors = this.props.commentors;

        if (comment === undefined) {
            return null
        }

        return(
            <div className="comment-container">
                <li className="comment-author">{comment.email} wrote...</li>
                <li className="comment-body">{comment.body} </li>
            </div>
        )   
    }
}

export default CommentIndexItem;