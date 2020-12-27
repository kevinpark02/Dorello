import React from 'react';
import { Link } from 'react-router-dom';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    componentDidUpdate(prevProps){
        if (this.props.board) {
            if(prevProps.board.board_name !== this.props.board.board_name) {
                this.setState({id: this.props.board.id,
                                board_name: this.props.board.board_name,
                                author_id: this.props.board.author_id,
                                email: this.props.board.email
                              });
            }
        } else {
            return null;
        }
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state)
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