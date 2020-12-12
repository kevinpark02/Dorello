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
        // if (board === undefined) {
        //     return null
        // }
        // debugger
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <input type="text"
                        value={this.state.board_name}
                        placeholder="Edit board..."
                        onChange={this.update('board_name')}/>
                    <input className="btn-blue" type="submit" value="Edit"/>
                </form>
                {/* <Link to="/feed">Back to Feed</Link> */}
            </div>
        )
    }
}

export default EditBoardForm;