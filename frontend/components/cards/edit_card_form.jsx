import React from 'react';
import EditBoardForm from '../boards/edit_board_form';

class EditCardForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.card;
    }

    render() {
        const board = this.props.board
        const card = this.state;
        console.log(card);

        if (board === undefined) {
            return null;
        }

        return(
            <div className="card-edit-container">
                <form className="card-edit-form">
                    
                    <h3 className="card-edit-name"><i className="fas fa-desktop"></i> &nbsp; {card.name}</h3>

                    <h3 className="card-edit-due"><i className="far fa-calendar-alt"></i> &nbsp; Due Date</h3>
                    
                    <h3 className="card-edit-description-heading"><i className="fas fa-stream"></i> &nbsp; Description</h3>
                    <textarea className="card-edit-description"
                              placeholder="Add a more detailed description..."/>
            
                </form>
            </div>
        )
    }
}

export default EditCardForm;