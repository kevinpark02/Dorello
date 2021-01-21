import React from 'react';
import CommentIndexContainer from "../comments/comment_index_container";

class EditCardForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.card;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    update(field) {
        // debugger
        return e => this.setState({[field]: e.target.value})
    }

    handleClick(e) {
        e.preventDefault();

        let cardOrder = this.props.lists[this.props.card.list_id].card_order;
        let deleteIdx = cardOrder.indexOf(this.props.card.id.toString());

        if (cardOrder.length === 1) {
            cardOrder = [];
        } else {
            cardOrder.splice(deleteIdx, 1);
        }

        this.props.updateList({
            id: this.props.card.list_id,
            board_id: this.props.lists[this.props.card.list_id].board_id,
            card_order: cardOrder
        })
            // .then(res => console.log(res))
            .then(() => this.props.deleteCard(this.props.card.id))
            .then(() => this.props.closeModal()); 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateCard(this.state);
        // this.props.closeModal();
    }

    render() {
        const card = this.state;

        if (card === undefined) {
            return null;
        }
        // debugger
        return(
            <div className="card-edit-container">
                <form className="card-edit-form" onSubmit={this.handleSubmit}>
                    
                    <h3 className="card-edit-name">
                        <i className="fas fa-desktop"></i> &nbsp; 
                        <input type="text" 
                               value={card.name} 
                               onChange={this.update('name')}/>
                    </h3>

                    <h3 className="card-edit-due"><i className="far fa-calendar-alt"></i> &nbsp; Due Date</h3>
                    <input className="card-edit-due-input"
                           type="date"
                           value={card.due_date ? card.due_date : ""}
                           onChange={this.update('due_date')}/>
                    
                    <h3 className="card-edit-description-heading"><i className="fas fa-stream"></i> &nbsp; Description</h3>
                    <textarea className="card-edit-description"
                              placeholder="Add a more detailed description..."
                              value={card.description}
                              onChange={this.update('description')}/>
                    <div className="card-edit-btns">
                        <input className="btn-green card-edit-btn" type="submit" value="Save"/>
                        <button className="btn-red card-delete-btn" onClick={this.handleClick}>Delete</button>
                    </div>
                </form>
                    <CommentIndexContainer currentCard={card}/>
            </div>
        )
    }
}

export default EditCardForm;