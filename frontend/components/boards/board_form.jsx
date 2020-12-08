import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.board;
    }

    render(){
        const board = this.state;
        return(
            <div>
                <form >
                    <h2>Create a New Board</h2>
                    <label>Board Name:
                        <input type="text"
                               value={board.board_name}
                               onChange={this.update('board_name')}/>
                    </label>
                </form>
            </div>
        )
    }
}