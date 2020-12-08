import React from 'react';
import { Link } from 'react-router-dom';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state)
    }

    render() {
        const board = this.props.board;
        if (board === undefined) {
            return null
        }
        // debugger
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Edit your board</h2>
                    <label>Board Name:
                        <input type="text"
                            value={this.state.board_name}
                            onChange={this.update('board_name')}/>
                    </label>
                    <input type="submit" value="Edit Board Name"/>
                </form>
                <Link to="/feed">Back to Feed</Link>
            </div>
        )
    }
}

export default EditBoardForm;