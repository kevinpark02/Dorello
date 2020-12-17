import React from 'react';

class CommentForm extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state)
        this.setState({ ['body']: "" })
    }

    render() {
        const comment = this.state;
        return(
            <div className="comment-form-container">
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <textarea value={comment.body}
                            placeholder="Write a comment..."
                            onChange={this.update('body')}/>
                    <input className="btn-green comment-form-btn" type="submit" value="Comment"/>
                </form>
            </div>
        )
    }
}

export default CommentForm;