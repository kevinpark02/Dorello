import React from 'react'

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.comment

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deleteComment(this.props.comment.id);
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.updateComment(this.state);
    }

    render() {
        // const comment = this.props.comment;
        const comment = this.state;
        const currentUser = this.props.currentUser;

        const button = (comment.creator_id === currentUser) ? 
            (<button className="btn-red comment-delete-btn" onClick={this.handleClick}>Delete</button>) :
            null

        const author = (comment.creator_id === currentUser) ?
            (<li className="comment-author">You wrote...</li>) :
            (<li className="comment-author">{comment.email}</li>)

        const commentDisplay = (comment.creator_id === currentUser) ?
            (<form onSubmit={this.handleSubmit}>
                <input className="comment-body"
                       type="text"
                       value={comment.body}
                       onChange={this.update('body')}/>
                <div className="comment-btns">
                    <input className="btn-blue comment-edit-btn" type="submit" value="Edit"/>
                    {button}
                </div>
            </form>) :
            (<li className="comment-body">{comment.body}</li>)

        if (comment === undefined) {
            return null
        }

        return(
            <div className="comment-container">
                {author}
                {/* <li className="comment-author">{comment.email} wrote...</li> */}
                {commentDisplay}
                {/* <li className="comment-body">{comment.body}</li> */}
                {/* <button className="btn-red comment-delete-btn" onClick={this.handleClick}>Delete</button> */}
                {/* {button} */}
            </div>
        )   
    }
}

export default CommentIndexItem;