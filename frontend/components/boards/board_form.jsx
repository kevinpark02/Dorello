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

    render(){
        const board = this.state;
        return(
            <div className="modal board-create">
                <form onSubmit={this.handleSubmit} className="board-create-form">
                    <h2>Create a New Board</h2>

                        <input type="text"
                               value={board.board_name}
                               placeholder="Add board name"
                               onChange={this.update('board_name')}/>
                    
                    <input type="submit" value="Create Board"/>
                </form>
            </div>
        )
    }
}

export default BoardForm