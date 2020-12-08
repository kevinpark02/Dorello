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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Create a New Board</h2>
                    <label>Board Name:
                        <input type="text"
                               value={board.board_name}
                               onChange={this.update('board_name')}/>
                    </label>
                    <input type="submit" value="Create Board"/>
                </form>
            </div>
        )
    }
}

export default BoardForm