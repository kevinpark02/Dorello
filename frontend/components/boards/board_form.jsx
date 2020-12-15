import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state)
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
                    <h4 className="board-create-title">Create a New Board</h4>
                        <input className="board-create-input"
                               type="text"
                               value={board.board_name}
                               placeholder="Add board name"
                               onChange={this.update('board_name')}/>
                    
                    <input className="btn-green" type="submit" value="Create Board"/>
                </form>
            </div>
        )
    }
}

export default BoardForm