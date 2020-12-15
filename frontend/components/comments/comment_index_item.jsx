import React from 'react'

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deleteComment(this.props.comment.id);
    }

    render() {
        const comment = this.props.comment;
        const currentUser = this.props.currentUser;
        const button = (comment.creator_id === currentUser) ? 
            (<button className="btn-red comment-delete-btn" onClick={this.handleClick}>Delete</button>) :
            null

        if (comment === undefined) {
            return null
        }

        return(
            <div className="comment-container">
                <li className="comment-author">{comment.email} wrote...</li>
                <li className="comment-body">{comment.body}</li>
                {/* <button className="btn-red comment-delete-btn" onClick={this.handleClick}>Delete</button> */}
                {button}
            </div>
        )   
    }
}

export default CommentIndexItem;