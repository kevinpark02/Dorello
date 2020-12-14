import React from 'react';
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <CommentIndexItem />
        )
    }
}

export default CommentIndex;