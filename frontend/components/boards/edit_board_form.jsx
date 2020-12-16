import React from 'react';
import { Link } from 'react-router-dom';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // this.props.fetchBoard(this.props.boardId)
        this.props.fetchBoards();
        this.setState({ ['board_name']: "" })
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state)
        this.setState({ ['board_name']: "" })
    }

    renderErrors(){
        return(
                <ul>
                    {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        const board = this.props.board;
        if (board === undefined) {
            return null
        }
        return(
            <div>
                <form className="edit-board-form-cont" onSubmit={this.handleSubmit}>
                    <input  className="edit-board-form-input"
                            type="text"
                            value={this.state.board_name}
                            placeholder="Edit board..."
                            onChange={this.update('board_name')}/>
                    <input className="btn-blue edit-board-btn" type="submit" value="Edit"/>
                </form>
            </div>
        )
    }
}

export default EditBoardForm;