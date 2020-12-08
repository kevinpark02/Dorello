import React from 'react';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    render() {
        return(
            <h1>Edit your board</h1>
        )
    }
}

export default EditBoardForm;