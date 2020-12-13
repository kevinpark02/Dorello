import React from 'react';


class EditCardForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.card;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateCard(this.state)
    }

    render() {
        const board = this.props.board
        const card = this.state;

        if (board === undefined) {
            return null;
        }

        return(
            <div className="card-edit-container">
                <form className="card-edit-form" onSubmit={this.handleSubmit}>
                    
                    <h3 className="card-edit-name"><i className="fas fa-desktop"></i> &nbsp; {card.name}</h3>

                    <h3 className="card-edit-due"><i className="far fa-calendar-alt"></i> &nbsp; Due Date</h3>
                    <input className="card-edit-due-input"
                           type="date"
                           value={card.due_date}
                           onChange={this.update('due_date')}/>
                    
                    <h3 className="card-edit-description-heading"><i className="fas fa-stream"></i> &nbsp; Description</h3>
                    <textarea className="card-edit-description"
                              placeholder="Add a more detailed description..."
                              value={card.description}
                              onChange={this.update('description')}/>

                    <input className="btn-green card-edit-btn" type="submit" value="Save"/>
            
                </form>
            </div>
        )
    }
}

export default EditCardForm;