import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state).then(() => this.props.handleClick(e));
        this.setState({ ['board_name']: "" });
    }

    closeForm(e) {
        e.preventDefault();
        this.props.handleClick(e);
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

    render(){
        const board = this.state;
        return(
            <div className="board-create">
                <form onSubmit={this.handleSubmit} className="board-create-form">
                    {/* {this.renderErrors()} */}
                    {/* <h4 className="board-create-title">Create a New Board</h4> */}
                        <input className="board-create-input"
                               type="text"
                               value={board.board_name}
                               placeholder="Add board name"
                               onChange={this.update('board_name')}/>
                    <div className="board-form-btns-x">
                        <input className="btn-green board-create-btn" type="submit" value="Create Board"/>
                        <button onClick={this.closeForm}>X</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BoardForm